# Change log / 更新记录 / Änderungsprotokoll

## English

- 2026-11-17: Supplier node date rows now show the name first and the date second, matching the customer milestone order.
- 2026-11-04: "Insert customer milestone" can now add custom customer nodes (name + date), inserted at the right position by date, automatically re-sorted when the date changes, and deletable.
- 2026-10-27: When the browser is zoomed (125%–200%), the ribbon no longer wraps into multiple rows and squeezes the table; it scrolls horizontally instead (mouse wheel works), and dropdown menus open normally.
- 2026-10-26: 2027 is tentatively scheduled in the Chinese calendar using statutory holidays (automatically replaced once the State Council notice is published).
- 2026-10-26: Recommended tasks brought in from OEM-Gantt now count durations in working days and shift past statutory holidays (same as the OEM page).
- 2026-10-26: The MPP conversion service address can now be entered under "File → Import → More" (leave empty to use the default server).

## 中文

- 2026-11-17：供应商节点日期行改成名称在前、日期在后，与客户里程碑的顺序一致
- 2026-11-04：「插入客户里程碑」可添加自定义客户节点（名称 + 日期），按日期自动插到合适位置，改日期后自动重新排位，可删除
- 2026-10-27：浏览器放大（125%–200%）后功能区不再折成多行挤乱表格，放不下时横向滚动（滚轮可滚），下拉菜单正常弹出
- 2026-10-26：2027 年先按法定假日暂定排入中国日历（国务院通知发布后自动替换）
- 2026-10-26：从 OEM-Gantt 带入的推荐任务按工作日计工期，遇法定假日顺延（与 OEM 页一致）
- 2026-10-26：「文件 → 导入 → 更多」里可填写 MPP 转换服务地址（留空用默认服务器）

## Deutsch

- 2026-11-17: Bei Lieferantenknoten steht jetzt der Name vor dem Datum, wie bei den Kundenmeilensteinen.
- 2026-11-04: „Kundenmeilenstein einfügen“ kann jetzt benutzerdefinierte Kundenknoten (Name + Datum) hinzufügen, die nach Datum an der richtigen Stelle eingefügt, bei Datumsänderung automatisch neu sortiert und gelöscht werden können.
- 2026-10-27: Bei Browser-Zoom (125 %–200 %) bricht der Funktionsbereich nicht mehr in mehrere Zeilen um und quetscht die Tabelle; er scrollt stattdessen horizontal (Mausrad funktioniert), und Dropdown-Menüs öffnen normal.
- 2026-10-26: Das Jahr 2027 ist vorläufig mit den gesetzlichen Feiertagen im chinesischen Kalender eingetragen (wird nach Veröffentlichung der Mitteilung des Staatsrats automatisch ersetzt).
- 2026-10-26: Aus OEM-Gantt übernommene empfohlene Aufgaben zählen die Dauer jetzt in Arbeitstagen und verschieben sich über gesetzliche Feiertage (wie auf der OEM-Seite).
- 2026-10-26: Die Adresse des MPP-Konvertierungsdienstes kann jetzt unter „Datei → Importieren → Mehr“ eingetragen werden (leer lassen für den Standardserver).

## 历史版本 Tag / Version tags / Versions-Tags

> 注：2026-11-17 删仓重建时全部 tag 已删除；本节按 tag 间提交记录重建各版本内容（提交标题原文），仅供追溯，以代码历史为准。

### v1.2.15（2026-10-26）

- fix: oem/plan.html 执行计划按钮 404（exec.html 改为 ../index.html）
- chore: 删除废弃的 exec.html（327KB，与 index.html 235 个函数体逐字相同，无任何引用）
- perf: save() 500ms防抖与render解耦，localStorage配额告警，基线只保留5套，修复undo/redo栈断引用 (by Pi)
- fix: workcal.js 三份统一为同一文件，日历数据互通
- fix(server): 限流表定期清理防内存泄漏；cgi 换自研 multipart 解析
- fix(tools): build_offline.py 路径不再硬编码本机 /workspace/work
- perf: autoSyncBack 加里程碑签名，日期无变化时跳过 localStorage 读写
- perf: computeResWarn 加输入签名缓存，跳过逐天展开重算
- chore: 删除死代码（约12KB）
- feat: MPP 转换服务地址可在「导入 ▾」菜单配置
- 1.2.15: OEM 页可选考虑节假日（关联 ProjectPilot 日历）；MPP 服务地址入口；README 英中德顺序: index.html
- 1.2.15: OEM 页可选考虑节假日（关联 ProjectPilot 日历）；MPP 服务地址入口；README 英中德顺序: README.md
- 1.2.15: OEM 页可选考虑节假日（关联 ProjectPilot 日历）；MPP 服务地址入口；README 英中德顺序: oem/plan.html
- 1.2.15: OEM 页可选考虑节假日（关联 ProjectPilot 日历）；MPP 服务地址入口；README 英中德顺序: oem/README.md
- offline package 1.2.15: download/ProjectPilot-Offline-HTML.zip

### v1.2.14（2026-10-16）

- 1.2.14: Tesla 节点顺序: index.html
- 1.2.14: Tesla 节点顺序: README.md
- 1.2.14: Tesla 节点顺序: oem/plan.html
- 1.2.14: Tesla 节点顺序: oem/README.md
- offline package 1.2.14: download/ProjectPilot-Offline-HTML.zip

### v1.2.13（2026-10-16）

- 1.2.13: 新增 Tesla 客户里程碑: index.html
- 1.2.13: 新增 Tesla 客户里程碑: README.md
- 1.2.13: 新增 Tesla 客户里程碑: oem/plan.html
- 1.2.13: 新增 Tesla 客户里程碑: oem/README.md
- offline package 1.2.13: download/ProjectPilot-Offline-HTML.zip

### v1.2.12（2026-10-16）

- 1.2.12: 删除旧版功能区: index.html
- 1.2.12: 删除旧版功能区: README.md
- 删除旧版功能区 1.0: v1.0/index.html
- 删除旧版功能区 1.0: v1.0/workcal.js
- 删除旧版功能区 1.0: download/ProjectPilot-Offline-HTML-1.0.zip
- offline package 1.2.12: download/ProjectPilot-Offline-HTML.zip

### v1.2.11（2026-10-16）

- 1.2.11: 旧数据工期列自动显示: index.html
- 1.2.11: 旧数据工期列自动显示: README.md
- offline package 1.2.11: download/ProjectPilot-Offline-HTML.zip

### v1.2.10（2026-10-16）

- 1.2.10: Excel 导出工期公式联动: index.html
- 1.2.10: Excel 导出工期公式联动: README.md
- offline package 1.2.10: download/ProjectPilot-Offline-HTML.zip

### v1.2.9（2026-10-16）

- 1.2.9: 工期按输入单位显示: index.html
- 1.2.9: 工期按输入单位显示: README.md
- offline package 1.2.9: download/ProjectPilot-Offline-HTML.zip

### v1.2.8（2026-10-16）

- 1.2.8: 中国日历内置 2023–2026 节假日与调休: index.html
- 1.2.8: 中国日历内置 2023–2026 节假日与调休: workcal.js
- 1.2.8: 中国日历内置 2023–2026 节假日与调休: README.md
- 1.2.8: 中国日历内置 2023–2026 节假日与调休: oem/workcal.js
- offline package 1.2.8: download/ProjectPilot-Offline-HTML.zip

### v1.2.7（2026-10-16）

- 1.2.7: 工期列默认显示，支持天/周/月；Excel 导入识别周期列: index.html
- 1.2.7: 工期列默认显示，支持天/周/月；Excel 导入识别周期列: README.md
- offline package 1.2.7: download/ProjectPilot-Offline-HTML.zip

### v1.2.6（2026-10-16）

- 1.2.6: Excel 导入默认 FS 前置: index.html
- 1.2.6: Excel 导入默认 FS 前置: README.md
- offline package 1.2.6: download/ProjectPilot-Offline-HTML.zip

### v1.2.5（2026-10-16）

- 1.2.5: Excel 导入识别多工作表/无表头名称列/分级层级: index.html
- 1.2.5: Excel 导入识别多工作表/无表头名称列/分级层级: README.md
- offline package 1.2.5: download/ProjectPilot-Offline-HTML.zip

### v1.2.4（2026-10-16）

- 1.2.4: 导入 Excel（任务名/开始/结束）: index.html
- 1.2.4: 导入 Excel（任务名/开始/结束）: README.md
- offline package 1.2.4: download/ProjectPilot-Offline-HTML.zip

### v1.2.3（2026-10-16）

- 1.2.3: 矢量 PDF；完成百分比可加入快速访问工具栏: index.html
- 1.2.3: 矢量 PDF；完成百分比可加入快速访问工具栏: README.md
- offline package 1.2.3: download/ProjectPilot-Offline-HTML.zip

### v1.2.2（2026-10-16）

- 1.2.2: PDF 分条 600DPI；任务名自动换行；状态日期: index.html
- 1.2.2: PDF 分条 600DPI；任务名自动换行；状态日期: README.md
- offline package 1.2.2: download/ProjectPilot-Offline-HTML.zip

### v1.2.1（2026-10-16）

- 1.2.1: 修复 PDF 结构；文件页默认 JSON、XML 收进更多；Excel 年月行、去掉前置任务列: index.html
- 1.2.1: 修复 PDF 结构；文件页默认 JSON、XML 收进更多；Excel 年月行、去掉前置任务列: README.md
- offline package 1.2.1: download/ProjectPilot-Offline-HTML.zip

### v1.2.0（2026-10-16）

- Excel 导出改为 .xlsx：条件格式甘特色块随日期自动变化 (1.2.0): index.html
- Excel 导出改为 .xlsx：条件格式甘特色块随日期自动变化 (1.2.0): README.md
- offline package 1.2.0: download/ProjectPilot-Offline-HTML.zip

### v1.1.0（2026-10-15）

- Release 1.0 downloads: download/ProjectPilot-Desktop-1.0-Windows.zip
- Release 1.0 downloads: download/ProjectPilot-Offline-HTML.zip
- Default template: APQP 5 phases: index.html
- Default template: APQP 5 phases: README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- Template names follow language: index.html
- Template names follow language: README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM-Gantt: fix PDF structure, date picker, export name: oem/index.html
- OEM-Gantt: fix PDF structure, date picker, export name: oem/plan.html
- OEM-Gantt: fix PDF structure, date picker, export name: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- Full project name in export filenames: oem/index.html
- Full project name in export filenames: oem/plan.html
- Full project name in export filenames: oem/README.md
- Full project name in export filenames: index.html
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM-Gantt: adjustable label width and milestone row height: oem/plan.html
- OEM-Gantt: adjustable label width and milestone row height: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM-Gantt: remove step-1 hint: oem/index.html
- OEM-Gantt: remove step-1 hint: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM-Gantt: undo/redo, remove OEM highlight: oem/index.html
- OEM-Gantt: undo/redo, remove OEM highlight: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- BMW default-unchecked milestones; OEM rec tasks collapsed: oem/plan.html
- BMW default-unchecked milestones; OEM rec tasks collapsed: oem/README.md
- BMW default-unchecked milestones; OEM rec tasks collapsed: index.html
- BMW default-unchecked milestones; OEM rec tasks collapsed: README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM-Gantt: collapse rec tasks on every OEM switch: oem/plan.html
- OEM-Gantt: collapse rec tasks on every OEM switch: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM-Gantt: reorder supplier milestone rows, auto-sort by date: oem/plan.html
- OEM-Gantt: reorder supplier milestone rows, auto-sort by date: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM-Gantt: drop manual row drag, keep auto-sort: oem/plan.html
- OEM-Gantt: drop manual row drag, keep auto-sort: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- Drag diamonds to change dates; export save-location confirm: oem/plan.html
- Drag diamonds to change dates; export save-location confirm: oem/index.html
- Drag diamonds to change dates; export save-location confirm: oem/README.md
- Drag diamonds to change dates; export save-location confirm: index.html
- Drag diamonds to change dates; export save-location confirm: README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM: milestone label angle adapts to row height: oem/plan.html
- OEM: milestone label angle adapts to row height: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM: lower minimum label angle to 10deg: oem/plan.html
- OEM: lower minimum label angle to 10deg: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM: milestone labels never truncated at left or clipped at right edge: oem/plan.html
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- OEM: milestone names always full, never overflow: oem/plan.html
- OEM: milestone names always full, never overflow: oem/README.md
- Offline package update: download/ProjectPilot-Offline-HTML.zip
- ProjectPilot 1.1.0: ribbon reorganized (classic layout toggle; 1.0 kept at /v1.0/): index.html
- ProjectPilot 1.1.0: ribbon reorganized (classic layout toggle; 1.0 kept at /v1.0/): README.md
- ProjectPilot 1.1.0: ribbon reorganized (classic layout toggle; 1.0 kept at /v1.0/): v1.0/index.html
- ProjectPilot 1.1.0: ribbon reorganized (classic layout toggle; 1.0 kept at /v1.0/): v1.0/workcal.js
- Offline package 1.1.0 (+1.0 kept): download/ProjectPilot-Offline-HTML.zip
- Offline package 1.1.0 (+1.0 kept): download/ProjectPilot-Offline-HTML-1.0.zip

### v1.0.0（2026-10-14）

- ProjectPilot: offline .mpp import (local parser): tools/build_offline.py
- ProjectPilot: offline .mpp import (local parser): README.md
- ProjectPilot: offline .mpp import (local parser): index.html
- OEM-Gantt: support offline single-file build: tools/build_offline.py
- OEM-Gantt: support offline single-file build: oem/index.html
- Start dialog, ribbon order, custom customer milestones, trilingual README: oem/README.md
- Start dialog, ribbon order, custom customer milestones, trilingual README: README.md
- Start dialog, ribbon order, custom customer milestones, trilingual README: index.html
- Default: hide task mode column; template starts with customer milestone placeholders: README.md
- Default: hide task mode column; template starts with customer milestone placeholders: index.html
- OEM-Gantt: theme + language switch like ProjectPilot, dark mode: oem/README.md
- OEM-Gantt: theme + language switch like ProjectPilot, dark mode: oem/index.html
- OEM-Gantt: theme + language switch like ProjectPilot, dark mode: oem/plan.html
- Default template: 5 PMBOK process groups: README.md
- Default template: 5 PMBOK process groups: index.html
- Text style dialog fits without scrolling: README.md
- Text style dialog fits without scrolling: index.html
- Center Move dropdown text: README.md
- Center Move dropdown text: index.html
- Clear-all button before Undo; Format tab after Task: README.md
- Clear-all button before Undo; Format tab after Task: index.html
- Name OEM tool OEM-Gantt; redirects: plan.html
- Name OEM tool OEM-Gantt; redirects: v4/README.md
- Name OEM tool OEM-Gantt; redirects: v4/index.html
- Name OEM tool OEM-Gantt; redirects: README.md
- Name OEM tool OEM-Gantt; redirects: index.html
- Name OEM tool OEM-Gantt; redirects: oem/README.md
- Name OEM tool OEM-Gantt; redirects: oem/index.html
- Split by purpose: ProjectPilot at root, OEM plan at /oem/: index.html
- Split by purpose: ProjectPilot at root, OEM plan at /oem/: workcal.js
- Split by purpose: ProjectPilot at root, OEM plan at /oem/: oem/README.md
- Split by purpose: ProjectPilot at root, OEM plan at /oem/: oem/index.html
- Split by purpose: ProjectPilot at root, OEM plan at /oem/: oem/plan.html
- Split by purpose: ProjectPilot at root, OEM plan at /oem/: oem/workcal.js
- Slim READMEs: README.md
- Slim READMEs: v4/README.md
- v4.13: repo renamed to ProjectPilot; relative link to OEM plan: v4/README.md
- v4.13: repo renamed to ProjectPilot; relative link to OEM plan: v4/index.html
- v3.10 fix: keep root title, rename v4 link to ProjectPilot: README.md
- v3.10 fix: keep root title, rename v4 link to ProjectPilot: index.html
- Rename tool to ProjectPilot (fixed, not localized): v4.12 / v3.10: README.md
- Rename tool to ProjectPilot (fixed, not localized): v4.12 / v3.10: index.html
- Rename tool to ProjectPilot (fixed, not localized): v4.12 / v3.10: v4/README.md
- Rename tool to ProjectPilot (fixed, not localized): v4.12 / v3.10: v4/index.html
- v3.9: single-row top bar (preview/export menu/import/more): README.md
- v3.9: single-row top bar (preview/export menu/import/more): index.html
- v3.8: macOS-style UI, unified control fonts, milestone label overlap fix, Esc preview, filenames: README.md
- v3.8: macOS-style UI, unified control fonts, milestone label overlap fix, Esc preview, filenames: plan.html
- v3.8: macOS-style UI, unified control fonts, milestone label overlap fix, Esc preview, filenames: index.html
- v4.11: macOS-style UI, unified control fonts: v4/README.md
- v4.11: macOS-style UI, unified control fonts: v4/index.html
- v4.10: global Esc closes dialogs (bug sweep): v4/README.md
- v4.10: global Esc closes dialogs (bug sweep): v4/index.html
- v4.9: GanttProject .gan import/export, CSV task import, XML hyperlinks: v4/README.md
- v4.9: GanttProject .gan import/export, CSV task import, XML hyperlinks: v4/index.html
- v4.8: task notes, hyperlinks, indicators: v4/README.md
- v4.8: task notes, hyperlinks, indicators: v4/index.html
- v4.7: task right-click menu + mini toolbar: v4/README.md
- v4.7: task right-click menu + mini toolbar: v4/index.html
- v4.5 QAT pin + Alt+1-9; v4.6 highlight filter, outline shortcuts, F1 shortcut list: v4/README.md
- v4.5 QAT pin + Alt+1-9; v4.6 highlight filter, outline shortcuts, F1 shortcut list: v4/index.html
- v4.4: Format tab gets Text Styles + Bar styles (MSP layout): v4/README.md
- v4.4: Format tab gets Text Styles + Bar styles (MSP layout): v4/index.html
- v4.3: MS Project style ribbon (tabs+groups, QAT, collapse): v4/README.md
- v4.3: MS Project style ribbon (tabs+groups, QAT, collapse): v4/index.html
- v4.2: outline numbers, project summary task, custom filter: v4/README.md
- v4.2: outline numbers, project summary task, custom filter: v4/index.html
- v4.1: strikethrough, 50+ fonts + add local font, full language switch, version label: v4/README.md
- v4.1: strikethrough, 50+ fonts + add local font, full language switch, version label: v4/index.html
- v4: MSP round 3 - group by, fill down (Ctrl+D), task form split view: v4/README.md
- v4: MSP round 3 - group by, fill down (Ctrl+D), task form split view: v4/index.html
- root: customer select dark style, same 32px as header controls: index.html
- v4: header controls uniform 32px (match v3 root): v4/index.html
- v4: timeline close button, adaptive ticks, 📅 without selection toggles timeline: v4/index.html
- v4: MSP round 2 (inactive, mark on track, move, timeline, calendar view, late/slack), format painter, % complete column: v4/README.md
- v4: MSP round 2 (inactive, mark on track, move, timeline, calendar view, late/slack), format painter, % complete column: v4/index.html
- v4: light/dark/system theme: v4/README.md
- v4: light/dark/system theme: v4/index.html
- v4: MS Project basics (multi-select, link/unlink, % complete, copy/cut/paste rows, keyboard, drag rows, outline level, scroll to task, zoom): v4/README.md
- v4: MS Project basics (multi-select, link/unlink, % complete, copy/cut/paste rows, keyboard, drag rows, outline level, scroll to task, zoom): v4/index.html
- v4: text styles (font/size/bold/italic/color) + 新建项目: v4/README.md
- v4: text styles (font/size/bold/italic/color) + 新建项目: v4/index.html
- v4: no highlight on 新增任务/客户里程碑 buttons: v4/index.html
- v4: center table header labels: v4/index.html
- v4: colors for timescale header, chart background, weekends; hide weekend shading when zoomed out: v4/index.html
- v4: + 新增任务/里程碑 inserts row inline after selection with inline rename: v4/index.html
- v4: refit 全局 after pane splitter drag: v4/index.html
- v4: 全局 view (zoom entire project, default, auto refit on resize): v4/index.html
- v4: table header 44px = Gantt header, fixes vertical offset: v4/index.html
- v3 root: 48px header like v4, merged plan title row (title/project name/sidebar) into top bar, link back to v4: index.html
- v4: fix table/Gantt row misalignment (fixed 34px rows + phase-band spacer); colors menu item aligned: v4/index.html
- v3 root: drop ① from customer label: index.html
- v4: chart colors on Gantt (显示→颜色), summary bars, per-task color follows default; export follows chart: v4/index.html
- v4: export colors configurable in 导出信息 (task/milestone/summary/progress): v4/index.html
- v4: export milestone diamonds red to match legend: v4/index.html
- v4: MS Project style print/export (A3 landscape table+timescale+footer legend): v4/index.html
- root: remove plan hint bar: index.html
- v4: OEM milestone group named by language only: v4/index.html
- v4: confirming OEM milestones replaces other OEMs' milestones: v4/index.html
- v4: drop grey node subtitles; dedupe 1st VP DV/PV: v4/index.html
- v4: OEM milestone names without parenthetical notes (+migration): v4/index.html
- root: keep only OEM customer-milestone page; remove dev-task tab (use v4): index.html
- v4: project name field, export info (creator/logo), filename name_date; OEM link -> v3: v4/index.html
- v4: dropdown menus stay on screen (export/import): v4/index.html
- v4: fixed-width name column so long names never shift columns: v4/index.html
- v4: align table column lines; name column min width; default pane fits visible columns: v4/index.html
- v4: wider task mode column: v4/index.html
- v4: align table column lines, task name min width: v4/index.html
- v4: toolbar dropdowns; order import -> preview -> export: v4/index.html
- v4: header link to OEM plan tool: v4/index.html
- v4: merge OEM select into milestone button, hide import-sub, default columns, toolbar task mode, net drag-link fix: v4/index.html
- v4: OEM milestone dates - backfill from any anchor, auto-propose when empty: v4/index.html
- v4: toolbar OEM select opens customer-milestone dialog: v4/index.html
- v4: standalone, no recommended tasks, OEM milestones on demand: v4/README.md
- v4: standalone, no recommended tasks, OEM milestones on demand: v4/workcal.js
- v4: standalone, no recommended tasks, OEM milestones on demand: v4/index.html
- v3.7 MPP/XML parity with ProjectLibre: calendars, baselines, splits, rates: server/mpp2xml/server.py
- v3.7 MPP/XML parity with ProjectLibre: calendars, baselines, splits, rates: README.md
- v3.7 MPP/XML parity with ProjectLibre: calendars, baselines, splits, rates: exec.html
- 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/README.md
- 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/docker-compose.yml
- 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/Caddyfile
- 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/Dockerfile
- 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/server.py
- 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: exec.html
- 排程单位可选：按天/按小时（08:00–12:00、13:00–17:00；工期 4h/1.5d/2d4h；开始/完成含时刻；依赖与约束按小时；条形按小时比例；XML 带时刻）: exec.html
- 阶段④⑤：网络图、资源使用视图（日/周/月）、基线0–10、资源平衡/清除平衡、拆分任务、周期性任务、任务日历: exec.html
- 阶段③：跟踪/挣值视图（实际开始/完成、完成%联动、固定成本、状态日期线、BAC/PV/EV/AC/SV/CV/SPI/CPI）、成本列、基线含成本、XML 带实际日期与成本: exec.html
- 阶段②：资源工作表（类型/最大单位/费率/加班费率/每次使用成本）、资源名称列支持 张三[50%]、工时列（改工时反算工期）、按单位计算过度分配、XML 导入导出大纲层级+资源+分配: exec.html
- 阶段①：撤销/重做（Ctrl+Z/Ctrl+Y）、升级/降级（Alt+Shift+←/→，多级分组缩进）、WBS 编号列: exec.html
- 开始/完成日期：自动、手动行统一为 YYYY-MM-DD 居中显示，聚焦时切换为日期控件: exec.html
- 任务模式列（自动/手动计划）；前置任务带动日期（供应商节点自动取消固定）；MS Project 直角依赖线；导出/预览改为客户节点页版式；导出按钮单独一行: exec.html
- 表格内可直接输入/选择开始、完成日期；新增前置任务列、约束列（MS Project 8 种约束）；XML 导入导出约束: exec.html
- 删除按钮/Delete键/行尾删除；菱形与条形垂直居中；甘特图右侧铺满并留出标注空间；同步行改名提示: exec.html
- 时间轴表头：年/月数字、年月/周、年月/日；客户节点页月份改数字: plan.html
- 时间轴表头：年/月数字、年月/周、年月/日；客户节点页月份改数字: exec.html
- 自动清除空的系统分组: exec.html
- 行号ID、分隔条、单击改名、条形标注、移除德国日历: README.md
- 行号ID、分隔条、单击改名、条形标注、移除德国日历: workcal.js
- 行号ID、分隔条、单击改名、条形标注、移除德国日历: exec.html
- 移除 模板: README.md
- 移除 模板: exec.html
- 隐藏模板按钮，分组顺序修复，删除引导: README.md
- 隐藏模板按钮，分组顺序修复，删除引导: exec.html
- v3.1 顶栏三步+VDA阶段样式: README.md
- v3.1 顶栏三步+VDA阶段样式: index.html
- v3.1 顶栏三步+VDA阶段样式: plan.html
- v3.1 顶栏三步+VDA阶段样式: exec.html
- v3 合并版: README.md
- v3 合并版: index.html
- v3 合并版: plan.html
- v3 合并版: exec.html
- v3 合并版: workcal.js
- Initial commit

### 其他 tag（无对应 Release）

- v3.7-20261011（2026-10-11）
- v3-oem-20261011（2026-10-11）
- backup-20261018（2026-10-16）
- backup-20261019（2026-10-18）
