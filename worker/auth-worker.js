const WORKER_URL = 'https://projectpilot-auth.eds22.workers.dev';
const ALLOWED_ORIGIN = 'https://wdjiangdev.github.io';

const CHARSET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const INVITE_PREFIX = 'PP-';
const INVITE_CODE_LENGTH = 8;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 10;

const SESSION_TTL_DAYS = 30;
const SESSION_TTL_SECONDS = SESSION_TTL_DAYS * 24 * 60 * 60;

const PBKDF2_ITERATIONS = 100000;
const PBKDF2_KEY_LENGTH = 32;
const PBKDF2_SALT_LENGTH = 16;

const USERNAME_REGEX = /^[a-zA-Z0-9_.-]{3,20}$/;
const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_MAX_LENGTH = 72;
const INVITE_CODE_REGEX = /^PP-[A-Z2-9]{8}$/;

async function hashPassword(password, salt) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: PBKDF2_ITERATIONS,
      hash: 'SHA-256',
    },
    keyMaterial,
    PBKDF2_KEY_LENGTH * 8
  );
  return new Uint8Array(derivedBits);
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a[i] ^ b[i];
  }
  return result === 0;
}

function generateRandomBytes(length) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

function bytesToHex(bytes) {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

function generateInviteCode() {
  const bytes = generateRandomBytes(INVITE_CODE_LENGTH);
  let code = INVITE_PREFIX;
  for (let i = 0; i < INVITE_CODE_LENGTH; i++) {
    code += CHARSET[bytes[i] % CHARSET.length];
  }
  return code;
}

function generateSessionToken() {
  return bytesToHex(generateRandomBytes(32));
}

function getClientIp(request) {
  return request.headers.get('CF-Connecting-IP') || 'unknown';
}

function getRateLimitKey(ip) {
  const window = Math.floor(Date.now() / RATE_LIMIT_WINDOW_MS);
  return `rl:${ip}:${window}`;
}

async function checkRateLimit(env, ip) {
  const key = getRateLimitKey(ip);
  const current = await env.AUTH.get(key);
  const count = current ? parseInt(current, 10) : 0;
  if (count >= RATE_LIMIT_MAX) {
    return false;
  }
  await env.AUTH.put(key, String(count + 1), { expirationTtl: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000) + 60 });
  return true;
}

async function parseJsonBody(request) {
  try {
    const text = await request.text();
    if (!text) return null;
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}

function corsResponse() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}

async function handleOptions() {
  return corsResponse();
}

function validateUsername(username) {
  return typeof username === 'string' && USERNAME_REGEX.test(username);
}

function validatePassword(password) {
  return typeof password === 'string' && password.length >= PASSWORD_MIN_LENGTH && password.length <= PASSWORD_MAX_LENGTH;
}

function validateInviteCode(code) {
  return typeof code === 'string' && INVITE_CODE_REGEX.test(code);
}

function extractBearerToken(request) {
  const auth = request.headers.get('Authorization');
  if (!auth || !auth.startsWith('Bearer ')) return null;
  return auth.slice(7);
}

async function getSession(env, token) {
  const key = `sess:${token}`;
  const data = await env.AUTH.get(key, 'json');
  if (!data) return null;
  if (data.exp < Date.now()) {
    await env.AUTH.delete(key);
    return null;
  }
  return data;
}

async function createSession(env, username, role) {
  const token = generateSessionToken();
  const exp = Date.now() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000;
  await env.AUTH.put(`sess:${token}`, JSON.stringify({ u: username, role, exp }), { expirationTtl: SESSION_TTL_SECONDS });
  return token;
}

async function deleteSession(env, token) {
  await env.AUTH.delete(`sess:${token}`);
}

async function hasAnyUser(env) {
  const list = await env.AUTH.list({ prefix: 'user:', limit: 1 });
  return list.keys.length > 0;
}

async function handleSetup(env, body) {
  if (!env.SETUP_TOKEN) {
    return jsonResponse({ ok: false, error: 'Setup not configured' }, 403);
  }
  if (body.setupToken !== env.SETUP_TOKEN) {
    return jsonResponse({ ok: false, error: 'Invalid setup token' }, 403);
  }
  if (await hasAnyUser(env)) {
    return jsonResponse({ ok: false, error: 'Already initialized' }, 403);
  }
  if (!validateUsername(body.username) || !validatePassword(body.password)) {
    return jsonResponse({ ok: false, error: 'Invalid username or password' }, 400);
  }
  const salt = generateRandomBytes(PBKDF2_SALT_LENGTH);
  const hash = await hashPassword(body.password, salt);
  const userKey = `user:${body.username}`;
  await env.AUTH.put(userKey, JSON.stringify({
    salt: bytesToHex(salt),
    hash: bytesToHex(hash),
    role: 'admin',
    createdAt: Date.now(),
  }));
  const token = await createSession(env, body.username, 'admin');
  return jsonResponse({ ok: true, token, username: body.username, role: 'admin' });
}

async function handleRegister(env, body, ip) {
  if (!(await checkRateLimit(env, ip))) {
    return jsonResponse({ ok: false, error: 'Rate limit exceeded' }, 429);
  }
  if (!validateUsername(body.username)) {
    return jsonResponse({ ok: false, error: 'Invalid username' }, 400);
  }
  if (!validatePassword(body.password)) {
    return jsonResponse({ ok: false, error: 'Invalid password' }, 400);
  }
  const inviteCode = typeof body.code === 'string' ? body.code.toUpperCase() : '';
  if (!validateInviteCode(inviteCode)) {
    return jsonResponse({ ok: false, error: 'Invalid invite code' }, 400);
  }
  const userKey = `user:${body.username}`;
  const existing = await env.AUTH.get(userKey);
  if (existing) {
    return jsonResponse({ ok: false, error: 'Username already taken' }, 400);
  }
  const codeKey = `code:${inviteCode}`;
  const codeData = await env.AUTH.get(codeKey, 'json');
  if (!codeData || codeData.usedBy) {
    return jsonResponse({ ok: false, error: 'Invalid or used invite code' }, 400);
  }
  const salt = generateRandomBytes(PBKDF2_SALT_LENGTH);
  const hash = await hashPassword(body.password, salt);
  await env.AUTH.put(userKey, JSON.stringify({
    salt: bytesToHex(salt),
    hash: bytesToHex(hash),
    role: 'user',
    createdAt: Date.now(),
  }));
  await env.AUTH.put(codeKey, JSON.stringify({
    ...codeData,
    usedBy: body.username,
    usedAt: Date.now(),
  }));
  const token = await createSession(env, body.username, 'user');
  return jsonResponse({ ok: true, token, username: body.username, role: 'user' });
}

async function handleLogin(env, body, ip) {
  if (!(await checkRateLimit(env, ip))) {
    return jsonResponse({ ok: false, error: 'Rate limit exceeded' }, 429);
  }
  if (!validateUsername(body.username) || !validatePassword(body.password)) {
    return jsonResponse({ ok: false, error: 'Invalid input' }, 400);
  }
  const userKey = `user:${body.username}`;
  const userData = await env.AUTH.get(userKey, 'json');
  if (!userData) {
    return jsonResponse({ ok: false, error: '用户名或密码错误' }, 401);
  }
  const salt = hexToBytes(userData.salt);
  const hash = hexToBytes(userData.hash);
  const inputHash = await hashPassword(body.password, salt);
  if (!timingSafeEqual(hash, inputHash)) {
    return jsonResponse({ ok: false, error: '用户名或密码错误' }, 401);
  }
  const token = await createSession(env, body.username, userData.role);
  return jsonResponse({ ok: true, token, username: body.username, role: userData.role });
}

async function handleMe(env, request) {
  const token = extractBearerToken(request);
  if (!token) return jsonResponse({ ok: false, error: 'Unauthorized' }, 401);
  const session = await getSession(env, token);
  if (!session) return jsonResponse({ ok: false, error: 'Invalid or expired session' }, 401);
  return jsonResponse({ ok: true, username: session.u, role: session.role });
}

async function handleLogout(env, request) {
  const token = extractBearerToken(request);
  if (!token) return jsonResponse({ ok: false, error: 'Unauthorized' }, 401);
  await deleteSession(env, token);
  return jsonResponse({ ok: true });
}

function requireAdmin(session) {
  return session && session.role === 'admin';
}

async function handleAdminCodesList(env, session) {
  if (!requireAdmin(session)) return jsonResponse({ ok: false, error: 'Forbidden' }, 403);
  const list = await env.AUTH.list({ prefix: 'code:', limit: 100 });
  const codes = [];
  for (const key of list.keys) {
    const data = await env.AUTH.get(key.name, 'json');
    if (data) {
      codes.push({ code: key.name.slice(5), ...data });
    }
  }
  codes.sort((a, b) => b.createdAt - a.createdAt);
  return jsonResponse({ ok: true, codes });
}

async function handleAdminCodesCreate(env, session, body) {
  if (!requireAdmin(session)) return jsonResponse({ ok: false, error: 'Forbidden' }, 403);
  const count = Math.min(Math.max(parseInt(body.count) || 10, 1), 50);
  const codes = [];
  for (let i = 0; i < count; i++) {
    const code = generateInviteCode();
    const key = `code:${code}`;
    await env.AUTH.put(key, JSON.stringify({
      createdBy: session.u,
      createdAt: Date.now(),
      usedBy: null,
      usedAt: null,
    }));
    codes.push(code);
  }
  return jsonResponse({ ok: true, codes });
}

async function handleAdminCodesDelete(env, session, code) {
  if (!requireAdmin(session)) return jsonResponse({ ok: false, error: 'Forbidden' }, 403);
  const codeUpper = code.toUpperCase();
  if (!validateInviteCode(codeUpper)) {
    return jsonResponse({ ok: false, error: 'Invalid code format' }, 400);
  }
  const key = `code:${codeUpper}`;
  const data = await env.AUTH.get(key, 'json');
  if (!data) {
    return jsonResponse({ ok: false, error: 'Code not found' }, 404);
  }
  if (data.usedBy) {
    return jsonResponse({ ok: false, error: 'Cannot delete used code' }, 400);
  }
  await env.AUTH.delete(key);
  return jsonResponse({ ok: true });
}

async function handleAdminUsersList(env, session) {
  if (!requireAdmin(session)) return jsonResponse({ ok: false, error: 'Forbidden' }, 403);
  const list = await env.AUTH.list({ prefix: 'user:', limit: 100 });
  const users = [];
  for (const key of list.keys) {
    const data = await env.AUTH.get(key.name, 'json');
    if (data) {
      users.push({ username: key.name.slice(5), role: data.role, createdAt: data.createdAt });
    }
  }
  users.sort((a, b) => b.createdAt - a.createdAt);
  return jsonResponse({ ok: true, users });
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return handleOptions();
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const ip = getClientIp(request);

    try {
      if (path === '/api/setup' && request.method === 'POST') {
        const body = await parseJsonBody(request);
        if (!body) return jsonResponse({ ok: false, error: 'Invalid JSON' }, 400);
        return handleSetup(env, body);
      }

      if (path === '/api/register' && request.method === 'POST') {
        const body = await parseJsonBody(request);
        if (!body) return jsonResponse({ ok: false, error: 'Invalid JSON' }, 400);
        return handleRegister(env, body, ip);
      }

      if (path === '/api/login' && request.method === 'POST') {
        const body = await parseJsonBody(request);
        if (!body) return jsonResponse({ ok: false, error: 'Invalid JSON' }, 400);
        return handleLogin(env, body, ip);
      }

      if (path === '/api/me' && request.method === 'GET') {
        return handleMe(env, request);
      }

      if (path === '/api/logout' && request.method === 'POST') {
        return handleLogout(env, request);
      }

      const token = extractBearerToken(request);
      const session = token ? await getSession(env, token) : null;

      if (path === '/api/admin/codes' && request.method === 'GET') {
        return handleAdminCodesList(env, session);
      }

      if (path === '/api/admin/codes' && request.method === 'POST') {
        const body = await parseJsonBody(request);
        if (!body) return jsonResponse({ ok: false, error: 'Invalid JSON' }, 400);
        return handleAdminCodesCreate(env, session, body);
      }

      if (path.startsWith('/api/admin/codes/') && request.method === 'DELETE') {
        const code = path.slice('/api/admin/codes/'.length);
        return handleAdminCodesDelete(env, session, code);
      }

      if (path === '/api/admin/users' && request.method === 'GET') {
        return handleAdminUsersList(env, session);
      }

      return jsonResponse({ ok: false, error: 'Not found' }, 404);
    } catch (e) {
      return jsonResponse({ ok: false, error: 'Internal error' }, 500);
    }
  },
};