const WORKER_URL = 'https://projectpilot-auth.eds22.workers.dev';

const STORAGE_KEY = 'pp_session';

const styles = `
#pp-gate-overlay {
  position: fixed;
  inset: 0;
  background: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2147483647;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif;
}
#pp-gate-overlay.hidden { display: none !important; }
#pp-gate-card {
  background: #fff;
  border-radius: 12px;
  padding: 28px 32px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}
html[data-theme=dark] #pp-gate-card { background: #1f2937; color: #f3f4f6; }
#pp-gate-tabs { display: flex; gap: 0; margin-bottom: 20px; border-bottom: 1px solid #e5e7eb; }
html[data-theme=dark] #pp-gate-tabs { border-color: #374151; }
#pp-gate-tabs button {
  flex: 1;
  background: transparent;
  border: none;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 500;
  color: #9ca3af;
  cursor: pointer;
  position: relative;
}
html[data-theme=dark] #pp-gate-tabs button { color: #9ca3af; }
#pp-gate-tabs button.active { color: #2563eb; }
html[data-theme=dark] #pp-gate-tabs button.active { color: #60a5fa; }
#pp-gate-tabs button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #2563eb;
  border-radius: 1px;
}
html[data-theme=dark] #pp-gate-tabs button.active::after { background: #60a5fa; }
.pp-gate-form { display: none; }
.pp-gate-form.active { display: block; }
.pp-field { margin-bottom: 14px; }
.pp-field label { display: block; font-size: 12px; color: #6b7280; margin-bottom: 4px; }
html[data-theme=dark] .pp-field label { color: #9ca3af; }
.pp-field input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  color: #1f2937;
}
html[data-theme=dark] .pp-field input { background: #374151; border-color: #4b5563; color: #f3f4f6; }
.pp-field input:focus { outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15); }
html[data-theme=dark] .pp-field input:focus { border-color: #60a5fa; box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.15); }
.pp-error { color: #dc2626; font-size: 12px; margin-top: 4px; min-height: 16px; }
html[data-theme=dark] .pp-error { color: #f87171; }
.pp-submit {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: #2563eb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 6px;
}
.pp-submit:hover { background: #1d4ed8; }
.pp-submit:disabled { opacity: 0.6; cursor: not-allowed; }
#pp-user-bar {
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 2147483646;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: saturate(180%) blur(12px);
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-size: 13px;
  cursor: grab;
  touch-action: none;
  user-select: none;
}
#pp-user-bar.dragging { cursor: grabbing; }
html[data-theme=dark] #pp-user-bar {
  background: rgba(31, 41, 55, 0.95);
  border-color: #374151;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}
#pp-user-bar.hidden { display: none !important; }
#pp-user-name { color: #1f2937; font-weight: 500; }
html[data-theme=dark] #pp-user-name { color: #f3f4f6; }
#pp-btn-logout, #pp-btn-admin {
  background: #fff;
  border: 1px solid #d1d5db;
  color: #374151;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
}
html[data-theme=dark] #pp-btn-logout, html[data-theme=dark] #pp-btn-admin {
  background: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
#pp-btn-logout:hover, #pp-btn-admin:hover { background: #f3f4f6; }
#pp-btn-admin.hidden { display: none !important; }
html[data-theme=dark] #pp-btn-logout:hover, html[data-theme=dark] #pp-btn-admin:hover { background: #4b5563; }
#pp-admin-panel {
  position: fixed;
  top: 50px;
  right: 12px;
  z-index: 2147483645;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: saturate(180%) blur(12px);
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
  width: 360px;
  max-height: 500px;
  overflow: auto;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
html[data-theme=dark] #pp-admin-panel {
  background: rgba(31, 41, 55, 0.98);
  border-color: #374151;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}
#pp-admin-panel.hidden { display: none !important; }
#pp-admin-panel h3 { margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #1f2937; }
html[data-theme=dark] #pp-admin-panel h3 { color: #f3f4f6; }
.pp-admin-row { display: flex; gap: 8px; align-items: center; margin-bottom: 10px; }
.pp-admin-row input[type=number] {
  width: 80px;
  padding: 6px 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 13px;
}
html[data-theme=dark] .pp-admin-row input[type=number] { background: #374151; border-color: #4b5563; color: #f3f4f6; }
.pp-admin-row button { padding: 6px 12px; font-size: 12px; border-radius: 6px; cursor: pointer; }
#pp-codes-list { max-height: 300px; overflow: auto; }
.pp-code-item { display: flex; align-items: center; gap: 8px; padding: 8px; background: #f9fafb; border-radius: 6px; margin-bottom: 6px; font-size: 12px; }
html[data-theme=dark] .pp-code-item { background: #374151; }
.pp-code-item code { background: #e5e7eb; padding: 2px 6px; border-radius: 4px; font-family: monospace; flex-shrink: 0; }
html[data-theme=dark] .pp-code-item code { background: #4b5563; }
.pp-code-item .used { color: #9ca3af; font-size: 11px; }
html[data-theme=dark] .pp-code-item .used { color: #6b7280; }
.pp-code-item .revoke { margin-left: auto; padding: 3px 8px; font-size: 11px; background: #fee2e2; color: #dc2626; border: none; border-radius: 4px; cursor: pointer; }
html[data-theme=dark] .pp-code-item .revoke { background: #7f1d1d; color: #fca5a5; }
.pp-code-item .revoke:disabled { opacity: 0.5; cursor: not-allowed; }
#pp-offline-msg {
  text-align: center;
  color: #fbbf24;
  padding: 20px;
  font-size: 14px;
}
#pp-user-bar .pp-bar-actions { display: none; }
#pp-user-name { cursor: pointer; }
#pp-user-name::after { content: ' ▾'; font-size: 10px; }
#pp-user-bar.pp-expanded .pp-bar-actions {
  display: flex; flex-direction: column; position: absolute; top: calc(100% + 6px); right: 0;
  background: rgba(255, 255, 255, 0.98); border: 1px solid #e5e7eb; border-radius: 10px;
  padding: 6px; gap: 6px; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
html[data-theme=dark] #pp-user-bar.pp-expanded .pp-bar-actions {
  background: rgba(31, 41, 55, 0.98); border-color: #374151;
}
#pp-user-bar.pp-expanded .pp-bar-actions button { text-align: left; white-space: nowrap; }
@media (max-width: 640px) {
  #pp-gate-overlay { padding: 16px; box-sizing: border-box; }
  #pp-user-bar { top: 8px; right: 8px; padding: 5px 10px; font-size: 12px; gap: 6px; }
  #pp-admin-panel { width: calc(100vw - 24px); top: 48px; }
}
`;

function injectStyles() {
  const styleEl = document.createElement('style');
  styleEl.id = 'pp-gate-styles';
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
}

function createGateOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'pp-gate-overlay';
  overlay.innerHTML = `
    <div id="pp-gate-card">
      <div id="pp-gate-tabs">
        <button data-tab="login" class="active">登录</button>
        <button data-tab="register">注册</button>
      </div>
      <form id="pp-form-login" class="pp-gate-form active">
        <div class="pp-field">
          <label>用户名</label>
          <input type="text" name="username" autocomplete="username" required placeholder="用户名">
          <div class="pp-error" id="pp-err-login"></div>
        </div>
        <div class="pp-field">
          <label>密码</label>
          <input type="password" name="password" autocomplete="current-password" required placeholder="密码">
          <div class="pp-error" id="pp-err-login-pwd"></div>
        </div>
        <button type="submit" class="pp-submit">登录</button>
      </form>
      <form id="pp-form-register" class="pp-gate-form">
        <div class="pp-field">
          <label>用户名</label>
          <input type="text" name="username" autocomplete="username" required placeholder="用户名 (3-20位，字母数字._-)">
          <div class="pp-error" id="pp-err-reg-user"></div>
        </div>
        <div class="pp-field">
          <label>密码</label>
          <input type="password" name="password" autocomplete="new-password" required placeholder="密码 (6-72位)">
          <div class="pp-error" id="pp-err-reg-pwd"></div>
        </div>
        <div class="pp-field">
          <label>邀请码</label>
          <input type="text" name="code" autocomplete="off" required placeholder="PP-XXXXXXXX" style="text-transform: uppercase;">
          <div class="pp-error" id="pp-err-reg-code"></div>
        </div>
        <button type="submit" class="pp-submit">注册</button>
      </form>
      <div id="pp-offline-msg" style="display: none;">服务暂时不可用，请稍后再试</div>
    </div>
  `;
  document.body.appendChild(overlay);
  return overlay;
}

function createUserBar() {
  const bar = document.createElement('div');
  bar.id = 'pp-user-bar';
  bar.className = 'hidden';
  bar.innerHTML = `
    <span id="pp-user-name"></span>
    <span class="pp-bar-actions">
      <button id="pp-btn-admin" class="hidden">邀请码管理</button>
      <button id="pp-btn-logout">退出</button>
    </span>
  `;
  document.body.appendChild(bar);
  return bar;
}

function createAdminPanel() {
  const panel = document.createElement('div');
  panel.id = 'pp-admin-panel';
  panel.className = 'hidden';
  panel.innerHTML = `
    <h3>邀请码管理</h3>
    <div class="pp-admin-row">
      <label>生成数量:</label>
      <input type="number" id="pp-gen-count" value="10" min="1" max="50">
      <button id="pp-btn-gen">生成</button>
    </div>
    <div id="pp-codes-list"></div>
  `;
  document.body.appendChild(panel);
  return panel;
}

async function apiRequest(path, options = {}) {
  const token = localStorage.getItem(STORAGE_KEY);
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (options.headers) Object.assign(headers, options.headers);

  const res = await fetch(`${WORKER_URL}${path}`, {
    ...options,
    headers,
    credentials: 'omit',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json();
}

async function checkSession() {
  const token = localStorage.getItem(STORAGE_KEY);
  if (!token) return null;
  try {
    const data = await apiRequest('/api/me');
    if (data.ok) return { username: data.username, role: data.role };
  } catch (e) {
    if (e instanceof TypeError || /Failed to fetch|NetworkError|Load failed/.test(e.message || '')) throw e;
    localStorage.removeItem(STORAGE_KEY);
  }
  return null;
}

function showGate(showOffline = false) {
  const overlay = document.getElementById('pp-gate-overlay');
  const offlineMsg = document.getElementById('pp-offline-msg');
  const userBar = document.getElementById('pp-user-bar');
  const adminBtn = document.getElementById('pp-btn-admin');
  const adminPanel = document.getElementById('pp-admin-panel');
  if (overlay) {
    overlay.classList.remove('hidden');
    const tabs = document.getElementById('pp-gate-tabs');
    const loginForm = document.getElementById('pp-form-login');
    const regForm = document.getElementById('pp-form-register');
    if (showOffline) {
      if (tabs) tabs.style.display = 'none';
      if (loginForm) loginForm.style.display = 'none';
      if (regForm) regForm.style.display = 'none';
      if (offlineMsg) offlineMsg.style.display = 'block';
    } else {
      if (tabs) tabs.style.display = '';
      if (loginForm) loginForm.style.display = '';
      if (regForm) regForm.style.display = '';
      if (offlineMsg) offlineMsg.style.display = 'none';
    }
  }
  if (userBar) userBar.classList.add('hidden');
  if (adminBtn) adminBtn.classList.add('hidden');
  if (adminPanel) adminPanel.classList.add('hidden');
}

function hideGate(user, role) {
  const overlay = document.getElementById('pp-gate-overlay');
  const userBar = document.getElementById('pp-user-bar');
  const userName = document.getElementById('pp-user-name');
  const adminBtn = document.getElementById('pp-btn-admin');
  if (overlay) overlay.classList.add('hidden');
  if (userBar) {
    userBar.classList.remove('hidden');
    clampBarToViewport();
    userName.textContent = user;
    if (role === 'admin') adminBtn.classList.remove('hidden');
  }
}

function showError(formId, fieldId, message) {
  const err = document.getElementById(fieldId);
  if (err) err.textContent = message;
}

function clearErrors(formId) {
  const form = document.getElementById(formId);
  if (form) form.querySelectorAll('.pp-error').forEach(e => e.textContent = '');
}

function setSubmitting(formId, submitting) {
  const btn = document.querySelector(`#${formId} .pp-submit`);
  if (btn) btn.disabled = submitting;
}

async function handleLogin(e) {
  e.preventDefault();
  clearErrors('pp-form-login');
  setSubmitting('pp-form-login', true);
  const form = e.target;
  const username = form.username.value.trim();
  const password = form.password.value;
  try {
    const data = await apiRequest('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    if (data.ok) {
      localStorage.setItem(STORAGE_KEY, data.token);
      hideGate(data.username, data.role);
      if (data.role === 'admin') loadAdminCodes();
    } else {
      showError('pp-form-login', 'pp-err-login', data.error || '登录失败');
    }
  } catch (err) {
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError') || err.message.includes('Load failed')) {
      showGate(true);
    } else {
      try { const d = JSON.parse(err.message); showError('pp-form-login', 'pp-err-login', d.error || '登录失败'); }
      catch { showError('pp-form-login', 'pp-err-login', '登录失败'); }
    }
  } finally {
    setSubmitting('pp-form-login', false);
  }
}

async function handleRegister(e) {
  e.preventDefault();
  clearErrors('pp-form-register');
  setSubmitting('pp-form-register', true);
  const form = e.target;
  const username = form.username.value.trim();
  const password = form.password.value;
  const code = form.code.value.trim().toUpperCase();
  try {
    const data = await apiRequest('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, password, code }),
    });
    if (data.ok) {
      localStorage.setItem(STORAGE_KEY, data.token);
      hideGate(data.username, data.role);
    } else {
      const err = data.error || '注册失败';
      if (err.includes('用户名')) showError('pp-form-register', 'pp-err-reg-user', err);
      else if (err.includes('邀请码') || err.includes('码')) showError('pp-form-register', 'pp-err-reg-code', err);
      else if (err.includes('密码')) showError('pp-form-register', 'pp-err-reg-pwd', err);
      else showError('pp-form-register', 'pp-err-reg-user', err);
    }
  } catch (err) {
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError') || err.message.includes('Load failed')) {
      showGate(true);
    } else {
      try { const d = JSON.parse(err.message);
        const msg = d.error || '注册失败';
        if (/用户名|Username/i.test(msg)) showError('pp-form-register', 'pp-err-reg-user', msg);
        else if (/邀请码|invite code/i.test(msg)) showError('pp-form-register', 'pp-err-reg-code', msg);
        else if (/密码|password/i.test(msg)) showError('pp-form-register', 'pp-err-reg-pwd', msg);
        else showError('pp-form-register', 'pp-err-reg-user', msg);
      } catch { showError('pp-form-register', 'pp-err-reg-user', '注册失败'); }
    }
  } finally {
    setSubmitting('pp-form-register', false);
  }
}

async function handleLogout() {
  try {
    await apiRequest('/api/logout', { method: 'POST' });
  } catch {}
  localStorage.removeItem(STORAGE_KEY);
  showGate();
}

let cachedCodes = [];

async function loadAdminCodes() {
  try {
    const data = await apiRequest('/api/admin/codes');
    if (data.ok) { cachedCodes = data.codes; renderAdminCodes(cachedCodes); }
  } catch {}
}

function renderAdminCodes(codes) {
  const list = document.getElementById('pp-codes-list');
  if (!list) return;
  if (!codes.length) {
    list.innerHTML = '<div style="color:#9ca3af;font-size:12px;text-align:center;padding:20px;">暂无邀请码</div>';
    return;
  }
  list.innerHTML = codes.map(c => `
    <div class="pp-code-item">
      <code>${c.code}</code>
      ${c.usedBy ? `<span class="used">已使用 · ${c.usedBy} · ${new Date(c.usedAt).toLocaleString()}</span>` : '<span class="used">未使用</span>'}
      ${!c.usedBy ? `<button class="revoke" data-code="${c.code}">撤销</button>` : '<span style="width:48px"></span>'}
    </div>
  `).join('');
  list.querySelectorAll('.revoke').forEach(btn => {
    btn.addEventListener('click', async () => {
      const code = btn.dataset.code;
      btn.disabled = true;
      try {
        const data = await apiRequest(`/api/admin/codes/${encodeURIComponent(code)}`, { method: 'DELETE' });
        if (data.ok) loadAdminCodes();
      } catch {}
    });
  });
}

async function handleGenCodes() {
  const count = parseInt(document.getElementById('pp-gen-count').value) || 10;
  const btn = document.getElementById('pp-btn-gen');
  btn.disabled = true;
  try {
    const data = await apiRequest('/api/admin/codes', {
      method: 'POST',
      body: JSON.stringify({ count }),
    });
    if (data.ok && data.codes) {
      const now = Date.now();
      const fresh = data.codes.map(code => ({ code, createdBy: '', createdAt: now, usedBy: null, usedAt: null }));
      cachedCodes = [...fresh, ...cachedCodes];
      renderAdminCodes(cachedCodes);
      setTimeout(loadAdminCodes, 1500);
    }
  } catch {}
  btn.disabled = false;
}

function toggleAdminPanel() {
  const panel = document.getElementById('pp-admin-panel');
  if (panel.classList.contains('hidden')) {
    panel.classList.remove('hidden');
    loadAdminCodes();
  } else {
    panel.classList.add('hidden');
  }
}

function initTabs() {
  document.querySelectorAll('#pp-gate-tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#pp-gate-tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.pp-gate-form').forEach(f => f.classList.remove('active'));
      document.getElementById(`pp-form-${btn.dataset.tab}`).classList.add('active');
    });
  });
}

const BAR_POS_KEY = 'pp_bar_pos';
let suppressBarClick = false;

function clampBarToViewport() {
  const bar = document.getElementById('pp-user-bar');
  if (!bar || bar.classList.contains('hidden')) return;
  const r = bar.getBoundingClientRect();
  const left = Math.min(Math.max(r.left, 0), Math.max(window.innerWidth - r.width, 0));
  const top = Math.min(Math.max(r.top, 0), Math.max(window.innerHeight - r.height, 0));
  if (left !== r.left || top !== r.top) {
    bar.style.left = left + 'px';
    bar.style.top = top + 'px';
    bar.style.right = 'auto';
  }
}

function restoreBarPosition() {
  try {
    const saved = JSON.parse(localStorage.getItem(BAR_POS_KEY) || 'null');
    if (!saved) return;
    const bar = document.getElementById('pp-user-bar');
    bar.style.left = saved.left + 'px';
    bar.style.top = saved.top + 'px';
    bar.style.right = 'auto';
  } catch (e) {}
}

function makeBarDraggable() {
  const bar = document.getElementById('pp-user-bar');
  let startX = 0, startY = 0, baseLeft = 0, baseTop = 0, dragging = false;
  bar.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    if (e.button !== undefined && e.button !== 0) return;
    const r = bar.getBoundingClientRect();
    startX = e.clientX; startY = e.clientY;
    baseLeft = r.left; baseTop = r.top;
    dragging = false;
    const onMove = (ev) => {
      const dx = ev.clientX - startX, dy = ev.clientY - startY;
      if (!dragging && Math.hypot(dx, dy) < 5) return;
      if (!dragging) {
        dragging = true;
        bar.classList.add('dragging');
        bar.classList.remove('pp-expanded');
      }
      const w = bar.offsetWidth, h = bar.offsetHeight;
      const left = Math.min(Math.max(baseLeft + dx, 0), Math.max(window.innerWidth - w, 0));
      const top = Math.min(Math.max(baseTop + dy, 0), Math.max(window.innerHeight - h, 0));
      bar.style.left = left + 'px';
      bar.style.top = top + 'px';
      bar.style.right = 'auto';
    };
    const onUp = () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointercancel', onUp);
      if (dragging) {
        bar.classList.remove('dragging');
        suppressBarClick = true;
        try {
          const r2 = bar.getBoundingClientRect();
          localStorage.setItem(BAR_POS_KEY, JSON.stringify({ left: Math.round(r2.left), top: Math.round(r2.top) }));
        } catch (err) {}
      }
    };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
    document.addEventListener('pointercancel', onUp);
  });
  window.addEventListener('resize', clampBarToViewport);
}

function init() {
  if (window.self !== window.top) return; // iframe 内不建门禁/用户栏，由父页面负责
  injectStyles();
  createGateOverlay();
  createUserBar();
  createAdminPanel();
  restoreBarPosition();
  makeBarDraggable();
  initTabs();

  document.getElementById('pp-form-login').addEventListener('submit', handleLogin);
  document.getElementById('pp-form-register').addEventListener('submit', handleRegister);
  document.getElementById('pp-btn-logout').addEventListener('click', handleLogout);
  document.getElementById('pp-btn-admin').addEventListener('click', () => { document.getElementById('pp-user-bar').classList.remove('pp-expanded'); toggleAdminPanel(); });
  document.getElementById('pp-btn-gen').addEventListener('click', handleGenCodes);
  document.getElementById('pp-user-name').addEventListener('click', (e) => { e.stopPropagation(); if (suppressBarClick) { suppressBarClick = false; return; } document.getElementById('pp-user-bar').classList.toggle('pp-expanded'); });

  document.addEventListener('click', (e) => {
    const panel = document.getElementById('pp-admin-panel');
    const adminBtn = document.getElementById('pp-btn-admin');
    if (panel && !panel.classList.contains('hidden') &&
        !panel.contains(e.target) && e.target !== adminBtn) {
      panel.classList.add('hidden');
    }
    const bar = document.getElementById('pp-user-bar');
    if (bar && bar.classList.contains('pp-expanded') && !bar.contains(e.target)) bar.classList.remove('pp-expanded');
  });

  checkSession().then(session => {
    if (session) hideGate(session.username, session.role);
    else showGate();
  }).catch(() => showGate(true));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}