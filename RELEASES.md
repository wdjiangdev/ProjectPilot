# ProjectPilot Release 更新记录（存档）

> 2026-11-17 删除全部 GitHub Releases 后，按 tag 之间的提交记录重建。原 Release 正文删除前未保存，以下为各版本区间的提交标题原文（按版本倒序），仅供追溯，以代码历史为准。

## v1.2.15（2026-10-26）

- `11ca85f` fix: oem/plan.html 执行计划按钮 404（exec.html 改为 ../index.html）
- `98ea88e` chore: 删除废弃的 exec.html（327KB，与 index.html 235 个函数体逐字相同，无任何引用）
- `ff38135` perf: save() 500ms防抖与render解耦，localStorage配额告警，基线只保留5套，修复undo/redo栈断引用 (by Pi)
- `e81f526` fix: workcal.js 三份统一为同一文件，日历数据互通
- `7c67562` fix(server): 限流表定期清理防内存泄漏；cgi 换自研 multipart 解析
- `e9ef843` fix(tools): build_offline.py 路径不再硬编码本机 /workspace/work
- `14dddc6` perf: autoSyncBack 加里程碑签名，日期无变化时跳过 localStorage 读写
- `ebe05b2` perf: computeResWarn 加输入签名缓存，跳过逐天展开重算
- `f2525aa` chore: 删除死代码（约12KB）
- `33c0cbe` feat: MPP 转换服务地址可在「导入 ▾」菜单配置
- `31b2613` 1.2.15: OEM 页可选考虑节假日（关联 ProjectPilot 日历）；MPP 服务地址入口；README 英中德顺序: index.html
- `efff8f1` 1.2.15: OEM 页可选考虑节假日（关联 ProjectPilot 日历）；MPP 服务地址入口；README 英中德顺序: README.md
- `3d39db3` 1.2.15: OEM 页可选考虑节假日（关联 ProjectPilot 日历）；MPP 服务地址入口；README 英中德顺序: oem/plan.html
- `0812633` 1.2.15: OEM 页可选考虑节假日（关联 ProjectPilot 日历）；MPP 服务地址入口；README 英中德顺序: oem/README.md
- `297e20b` offline package 1.2.15: download/ProjectPilot-Offline-HTML.zip

## v1.2.14（2026-10-16）

- `833d1e2` 1.2.14: Tesla 节点顺序: index.html
- `444e704` 1.2.14: Tesla 节点顺序: README.md
- `305ae07` 1.2.14: Tesla 节点顺序: oem/plan.html
- `02fdabc` 1.2.14: Tesla 节点顺序: oem/README.md
- `7cb3570` offline package 1.2.14: download/ProjectPilot-Offline-HTML.zip

## v1.2.13（2026-10-16）

- `08c88cf` 1.2.13: 新增 Tesla 客户里程碑: index.html
- `dd98654` 1.2.13: 新增 Tesla 客户里程碑: README.md
- `65a3920` 1.2.13: 新增 Tesla 客户里程碑: oem/plan.html
- `e4e5810` 1.2.13: 新增 Tesla 客户里程碑: oem/README.md
- `41a3abb` offline package 1.2.13: download/ProjectPilot-Offline-HTML.zip

## v1.2.12（2026-10-16）

- `be4f98e` 1.2.12: 删除旧版功能区: index.html
- `a6a9a40` 1.2.12: 删除旧版功能区: README.md
- `f2f17b7` 删除旧版功能区 1.0: v1.0/index.html
- `27374eb` 删除旧版功能区 1.0: v1.0/workcal.js
- `1fef565` 删除旧版功能区 1.0: download/ProjectPilot-Offline-HTML-1.0.zip
- `41d674d` offline package 1.2.12: download/ProjectPilot-Offline-HTML.zip

## v1.2.11（2026-10-16）

- `b1d7daa` 1.2.11: 旧数据工期列自动显示: index.html
- `0518fab` 1.2.11: 旧数据工期列自动显示: README.md
- `2fd55ea` offline package 1.2.11: download/ProjectPilot-Offline-HTML.zip

## v1.2.10（2026-10-16）

- `f767199` 1.2.10: Excel 导出工期公式联动: index.html
- `7b98805` 1.2.10: Excel 导出工期公式联动: README.md
- `2ac5a0d` offline package 1.2.10: download/ProjectPilot-Offline-HTML.zip

## v1.2.9（2026-10-16）

- `b6059ed` 1.2.9: 工期按输入单位显示: index.html
- `17bcd9e` 1.2.9: 工期按输入单位显示: README.md
- `c062c86` offline package 1.2.9: download/ProjectPilot-Offline-HTML.zip

## v1.2.8（2026-10-16）

- `a114939` 1.2.8: 中国日历内置 2023–2026 节假日与调休: index.html
- `50cc8fd` 1.2.8: 中国日历内置 2023–2026 节假日与调休: workcal.js
- `09412e5` 1.2.8: 中国日历内置 2023–2026 节假日与调休: README.md
- `1e35d73` 1.2.8: 中国日历内置 2023–2026 节假日与调休: oem/workcal.js
- `977f8e7` offline package 1.2.8: download/ProjectPilot-Offline-HTML.zip

## v1.2.7（2026-10-16）

- `6761fcf` 1.2.7: 工期列默认显示，支持天/周/月；Excel 导入识别周期列: index.html
- `864b70c` 1.2.7: 工期列默认显示，支持天/周/月；Excel 导入识别周期列: README.md
- `65449b5` offline package 1.2.7: download/ProjectPilot-Offline-HTML.zip

## v1.2.6（2026-10-16）

- `b58867b` 1.2.6: Excel 导入默认 FS 前置: index.html
- `114f56f` 1.2.6: Excel 导入默认 FS 前置: README.md
- `d1cf0f9` offline package 1.2.6: download/ProjectPilot-Offline-HTML.zip

## v1.2.5（2026-10-16）

- `85d3277` 1.2.5: Excel 导入识别多工作表/无表头名称列/分级层级: index.html
- `f40fef6` 1.2.5: Excel 导入识别多工作表/无表头名称列/分级层级: README.md
- `1d775d8` offline package 1.2.5: download/ProjectPilot-Offline-HTML.zip

## v1.2.4（2026-10-16）

- `e6a9497` 1.2.4: 导入 Excel（任务名/开始/结束）: index.html
- `6e67e16` 1.2.4: 导入 Excel（任务名/开始/结束）: README.md
- `11f7a7d` offline package 1.2.4: download/ProjectPilot-Offline-HTML.zip

## v1.2.3（2026-10-16）

- `efc5f27` 1.2.3: 矢量 PDF；完成百分比可加入快速访问工具栏: index.html
- `feae561` 1.2.3: 矢量 PDF；完成百分比可加入快速访问工具栏: README.md
- `a763afb` offline package 1.2.3: download/ProjectPilot-Offline-HTML.zip

## v1.2.2（2026-10-16）

- `8f0df62` 1.2.2: PDF 分条 600DPI；任务名自动换行；状态日期: index.html
- `5092030` 1.2.2: PDF 分条 600DPI；任务名自动换行；状态日期: README.md
- `0a4859f` offline package 1.2.2: download/ProjectPilot-Offline-HTML.zip

## v1.2.1（2026-10-16）

- `0153336` 1.2.1: 修复 PDF 结构；文件页默认 JSON、XML 收进更多；Excel 年月行、去掉前置任务列: index.html
- `09d19c8` 1.2.1: 修复 PDF 结构；文件页默认 JSON、XML 收进更多；Excel 年月行、去掉前置任务列: README.md
- `73f25e7` offline package 1.2.1: download/ProjectPilot-Offline-HTML.zip

## v1.2.0（2026-10-16）

- `744a9e5` Excel 导出改为 .xlsx：条件格式甘特色块随日期自动变化 (1.2.0): index.html
- `b99ebb4` Excel 导出改为 .xlsx：条件格式甘特色块随日期自动变化 (1.2.0): README.md
- `c731cdb` offline package 1.2.0: download/ProjectPilot-Offline-HTML.zip

## v1.1.0（2026-10-15）

- `ae75d60` Release 1.0 downloads: download/ProjectPilot-Desktop-1.0-Windows.zip
- `eabcd4e` Release 1.0 downloads: download/ProjectPilot-Offline-HTML.zip
- `b6f1e97` Default template: APQP 5 phases: index.html
- `153df6b` Default template: APQP 5 phases: README.md
- `9bcdbef` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `22ba19f` Template names follow language: index.html
- `55c4dd5` Template names follow language: README.md
- `39e0b08` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `5b31f11` OEM-Gantt: fix PDF structure, date picker, export name: oem/index.html
- `01d1c6d` OEM-Gantt: fix PDF structure, date picker, export name: oem/plan.html
- `eafe8ab` OEM-Gantt: fix PDF structure, date picker, export name: oem/README.md
- `62af40b` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `b2dc4e8` Full project name in export filenames: oem/index.html
- `69df2a1` Full project name in export filenames: oem/plan.html
- `1c2426d` Full project name in export filenames: oem/README.md
- `a528f22` Full project name in export filenames: index.html
- `de4e031` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `5226095` OEM-Gantt: adjustable label width and milestone row height: oem/plan.html
- `b18b005` OEM-Gantt: adjustable label width and milestone row height: oem/README.md
- `97770b1` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `e9cd3f3` OEM-Gantt: remove step-1 hint: oem/index.html
- `664ed35` OEM-Gantt: remove step-1 hint: oem/README.md
- `5d0e293` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `86a38d5` OEM-Gantt: undo/redo, remove OEM highlight: oem/index.html
- `3268dac` OEM-Gantt: undo/redo, remove OEM highlight: oem/README.md
- `9ae084d` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `0a679b7` BMW default-unchecked milestones; OEM rec tasks collapsed: oem/plan.html
- `41adf2a` BMW default-unchecked milestones; OEM rec tasks collapsed: oem/README.md
- `a63c104` BMW default-unchecked milestones; OEM rec tasks collapsed: index.html
- `4ad952b` BMW default-unchecked milestones; OEM rec tasks collapsed: README.md
- `91e09f8` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `e0755ca` OEM-Gantt: collapse rec tasks on every OEM switch: oem/plan.html
- `83954b4` OEM-Gantt: collapse rec tasks on every OEM switch: oem/README.md
- `1cfc23c` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `3f9af1e` OEM-Gantt: reorder supplier milestone rows, auto-sort by date: oem/plan.html
- `59a4874` OEM-Gantt: reorder supplier milestone rows, auto-sort by date: oem/README.md
- `156e1b9` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `e38c4a9` OEM-Gantt: drop manual row drag, keep auto-sort: oem/plan.html
- `43f4a9d` OEM-Gantt: drop manual row drag, keep auto-sort: oem/README.md
- `1494619` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `22bb6a3` Drag diamonds to change dates; export save-location confirm: oem/plan.html
- `18ba62e` Drag diamonds to change dates; export save-location confirm: oem/index.html
- `5425f8a` Drag diamonds to change dates; export save-location confirm: oem/README.md
- `17baab4` Drag diamonds to change dates; export save-location confirm: index.html
- `3c7f2a4` Drag diamonds to change dates; export save-location confirm: README.md
- `725d67f` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `e7ed156` OEM: milestone label angle adapts to row height: oem/plan.html
- `a29ddb2` OEM: milestone label angle adapts to row height: oem/README.md
- `fc30673` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `b5484b8` OEM: lower minimum label angle to 10deg: oem/plan.html
- `46b5e5f` OEM: lower minimum label angle to 10deg: oem/README.md
- `b73024d` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `85fb5ae` OEM: milestone labels never truncated at left or clipped at right edge: oem/plan.html
- `dc822f7` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `b01520a` OEM: milestone names always full, never overflow: oem/plan.html
- `9cbeb76` OEM: milestone names always full, never overflow: oem/README.md
- `155d8d9` Offline package update: download/ProjectPilot-Offline-HTML.zip
- `5f0a6a0` ProjectPilot 1.1.0: ribbon reorganized (classic layout toggle; 1.0 kept at /v1.0/): index.html
- `8a83248` ProjectPilot 1.1.0: ribbon reorganized (classic layout toggle; 1.0 kept at /v1.0/): README.md
- `8946a91` ProjectPilot 1.1.0: ribbon reorganized (classic layout toggle; 1.0 kept at /v1.0/): v1.0/index.html
- `3b96730` ProjectPilot 1.1.0: ribbon reorganized (classic layout toggle; 1.0 kept at /v1.0/): v1.0/workcal.js
- `72ba167` Offline package 1.1.0 (+1.0 kept): download/ProjectPilot-Offline-HTML.zip
- `2f4597a` Offline package 1.1.0 (+1.0 kept): download/ProjectPilot-Offline-HTML-1.0.zip

## v1.0.0（2026-10-14）

- `c305e68` ProjectPilot: offline .mpp import (local parser): tools/build_offline.py
- `59c0aea` ProjectPilot: offline .mpp import (local parser): README.md
- `3d64022` ProjectPilot: offline .mpp import (local parser): index.html
- `ff20302` OEM-Gantt: support offline single-file build: tools/build_offline.py
- `4e53ab8` OEM-Gantt: support offline single-file build: oem/index.html
- `68917bb` Start dialog, ribbon order, custom customer milestones, trilingual README: oem/README.md
- `35dcecd` Start dialog, ribbon order, custom customer milestones, trilingual README: README.md
- `5e05063` Start dialog, ribbon order, custom customer milestones, trilingual README: index.html
- `fe86053` Default: hide task mode column; template starts with customer milestone placeholders: README.md
- `fd6a96d` Default: hide task mode column; template starts with customer milestone placeholders: index.html
- `d5d67d1` OEM-Gantt: theme + language switch like ProjectPilot, dark mode: oem/README.md
- `2e4e372` OEM-Gantt: theme + language switch like ProjectPilot, dark mode: oem/index.html
- `0205722` OEM-Gantt: theme + language switch like ProjectPilot, dark mode: oem/plan.html
- `074515f` Default template: 5 PMBOK process groups: README.md
- `32c1f7d` Default template: 5 PMBOK process groups: index.html
- `7f73b47` Text style dialog fits without scrolling: README.md
- `b1ddd98` Text style dialog fits without scrolling: index.html
- `b2d0d54` Center Move dropdown text: README.md
- `f31823e` Center Move dropdown text: index.html
- `2325447` Clear-all button before Undo; Format tab after Task: README.md
- `4d65086` Clear-all button before Undo; Format tab after Task: index.html
- `7ca4fe8` Name OEM tool OEM-Gantt; redirects: plan.html
- `699b726` Name OEM tool OEM-Gantt; redirects: v4/README.md
- `43102a5` Name OEM tool OEM-Gantt; redirects: v4/index.html
- `8c0708d` Name OEM tool OEM-Gantt; redirects: README.md
- `6ed745f` Name OEM tool OEM-Gantt; redirects: index.html
- `42f3d86` Name OEM tool OEM-Gantt; redirects: oem/README.md
- `c343ff1` Name OEM tool OEM-Gantt; redirects: oem/index.html
- `4237138` Split by purpose: ProjectPilot at root, OEM plan at /oem/: index.html
- `bc8be6c` Split by purpose: ProjectPilot at root, OEM plan at /oem/: workcal.js
- `8244dfe` Split by purpose: ProjectPilot at root, OEM plan at /oem/: oem/README.md
- `3ab7568` Split by purpose: ProjectPilot at root, OEM plan at /oem/: oem/index.html
- `66b1270` Split by purpose: ProjectPilot at root, OEM plan at /oem/: oem/plan.html
- `cb59736` Split by purpose: ProjectPilot at root, OEM plan at /oem/: oem/workcal.js
- `a54acbb` Slim READMEs: README.md
- `bb91ad9` Slim READMEs: v4/README.md
- `131112f` v4.13: repo renamed to ProjectPilot; relative link to OEM plan: v4/README.md
- `23bc2aa` v4.13: repo renamed to ProjectPilot; relative link to OEM plan: v4/index.html
- `ca988f0` v3.10 fix: keep root title, rename v4 link to ProjectPilot: README.md
- `1082616` v3.10 fix: keep root title, rename v4 link to ProjectPilot: index.html
- `7bdba2d` Rename tool to ProjectPilot (fixed, not localized): v4.12 / v3.10: README.md
- `a6c61e4` Rename tool to ProjectPilot (fixed, not localized): v4.12 / v3.10: index.html
- `5820b1e` Rename tool to ProjectPilot (fixed, not localized): v4.12 / v3.10: v4/README.md
- `9e74538` Rename tool to ProjectPilot (fixed, not localized): v4.12 / v3.10: v4/index.html
- `f49e385` v3.9: single-row top bar (preview/export menu/import/more): README.md
- `408c339` v3.9: single-row top bar (preview/export menu/import/more): index.html
- `1326e48` v3.8: macOS-style UI, unified control fonts, milestone label overlap fix, Esc preview, filenames: README.md
- `4a95718` v3.8: macOS-style UI, unified control fonts, milestone label overlap fix, Esc preview, filenames: plan.html
- `5325c59` v3.8: macOS-style UI, unified control fonts, milestone label overlap fix, Esc preview, filenames: index.html
- `6dbe350` v4.11: macOS-style UI, unified control fonts: v4/README.md
- `057f099` v4.11: macOS-style UI, unified control fonts: v4/index.html
- `9ca4600` v4.10: global Esc closes dialogs (bug sweep): v4/README.md
- `d5d5e39` v4.10: global Esc closes dialogs (bug sweep): v4/index.html
- `a41cf1f` v4.9: GanttProject .gan import/export, CSV task import, XML hyperlinks: v4/README.md
- `a1cb46e` v4.9: GanttProject .gan import/export, CSV task import, XML hyperlinks: v4/index.html
- `8730150` v4.8: task notes, hyperlinks, indicators: v4/README.md
- `20e0a01` v4.8: task notes, hyperlinks, indicators: v4/index.html
- `633a9d2` v4.7: task right-click menu + mini toolbar: v4/README.md
- `e6ccc96` v4.7: task right-click menu + mini toolbar: v4/index.html
- `c6037a6` v4.5 QAT pin + Alt+1-9; v4.6 highlight filter, outline shortcuts, F1 shortcut list: v4/README.md
- `e6a41cf` v4.5 QAT pin + Alt+1-9; v4.6 highlight filter, outline shortcuts, F1 shortcut list: v4/index.html
- `b9ed0e8` v4.4: Format tab gets Text Styles + Bar styles (MSP layout): v4/README.md
- `5dae74b` v4.4: Format tab gets Text Styles + Bar styles (MSP layout): v4/index.html
- `5296aa3` v4.3: MS Project style ribbon (tabs+groups, QAT, collapse): v4/README.md
- `3aeeee3` v4.3: MS Project style ribbon (tabs+groups, QAT, collapse): v4/index.html
- `6fb5c66` v4.2: outline numbers, project summary task, custom filter: v4/README.md
- `95c0dec` v4.2: outline numbers, project summary task, custom filter: v4/index.html
- `5e14521` v4.1: strikethrough, 50+ fonts + add local font, full language switch, version label: v4/README.md
- `6c0b838` v4.1: strikethrough, 50+ fonts + add local font, full language switch, version label: v4/index.html
- `a0899c6` v4: MSP round 3 - group by, fill down (Ctrl+D), task form split view: v4/README.md
- `0ffa6ed` v4: MSP round 3 - group by, fill down (Ctrl+D), task form split view: v4/index.html
- `4022962` root: customer select dark style, same 32px as header controls: index.html
- `51e3db9` v4: header controls uniform 32px (match v3 root): v4/index.html
- `59d861b` v4: timeline close button, adaptive ticks, 📅 without selection toggles timeline: v4/index.html
- `0bcdcfd` v4: MSP round 2 (inactive, mark on track, move, timeline, calendar view, late/slack), format painter, % complete column: v4/README.md
- `92364e1` v4: MSP round 2 (inactive, mark on track, move, timeline, calendar view, late/slack), format painter, % complete column: v4/index.html
- `0bdabce` v4: light/dark/system theme: v4/README.md
- `9079935` v4: light/dark/system theme: v4/index.html
- `ce4020e` v4: MS Project basics (multi-select, link/unlink, % complete, copy/cut/paste rows, keyboard, drag rows, outline level, scroll to task, zoom): v4/README.md
- `bc325ee` v4: MS Project basics (multi-select, link/unlink, % complete, copy/cut/paste rows, keyboard, drag rows, outline level, scroll to task, zoom): v4/index.html
- `f0836c3` v4: text styles (font/size/bold/italic/color) + 新建项目: v4/README.md
- `3650774` v4: text styles (font/size/bold/italic/color) + 新建项目: v4/index.html
- `1273c6f` v4: no highlight on 新增任务/客户里程碑 buttons: v4/index.html
- `42bd8a2` v4: center table header labels: v4/index.html
- `c04c5da` v4: colors for timescale header, chart background, weekends; hide weekend shading when zoomed out: v4/index.html
- `606d08e` v4: + 新增任务/里程碑 inserts row inline after selection with inline rename: v4/index.html
- `4739750` v4: refit 全局 after pane splitter drag: v4/index.html
- `f7a4f3d` v4: 全局 view (zoom entire project, default, auto refit on resize): v4/index.html
- `8871f7e` v4: table header 44px = Gantt header, fixes vertical offset: v4/index.html
- `fbf0439` v3 root: 48px header like v4, merged plan title row (title/project name/sidebar) into top bar, link back to v4: index.html
- `15a44cc` v4: fix table/Gantt row misalignment (fixed 34px rows + phase-band spacer); colors menu item aligned: v4/index.html
- `ff23f8c` v3 root: drop ① from customer label: index.html
- `9e997ea` v4: chart colors on Gantt (显示→颜色), summary bars, per-task color follows default; export follows chart: v4/index.html
- `eb71334` v4: export colors configurable in 导出信息 (task/milestone/summary/progress): v4/index.html
- `367703f` v4: export milestone diamonds red to match legend: v4/index.html
- `3a3674b` v4: MS Project style print/export (A3 landscape table+timescale+footer legend): v4/index.html
- `2bc71eb` root: remove plan hint bar: index.html
- `65240ec` v4: OEM milestone group named by language only: v4/index.html
- `68f580c` v4: confirming OEM milestones replaces other OEMs' milestones: v4/index.html
- `69012a2` v4: drop grey node subtitles; dedupe 1st VP DV/PV: v4/index.html
- `223b765` v4: OEM milestone names without parenthetical notes (+migration): v4/index.html
- `7a1a5d7` root: keep only OEM customer-milestone page; remove dev-task tab (use v4): index.html
- `7bb9573` v4: project name field, export info (creator/logo), filename name_date; OEM link -> v3: v4/index.html
- `cd655b9` v4: dropdown menus stay on screen (export/import): v4/index.html
- `21d4e2d` v4: fixed-width name column so long names never shift columns: v4/index.html
- `a0c2d1c` v4: align table column lines; name column min width; default pane fits visible columns: v4/index.html
- `ccd1c39` v4: wider task mode column: v4/index.html
- `a03610a` v4: align table column lines, task name min width: v4/index.html
- `bb5b9cb` v4: toolbar dropdowns; order import -> preview -> export: v4/index.html
- `45f998a` v4: header link to OEM plan tool: v4/index.html
- `fb72320` v4: merge OEM select into milestone button, hide import-sub, default columns, toolbar task mode, net drag-link fix: v4/index.html
- `16bb3d3` v4: OEM milestone dates - backfill from any anchor, auto-propose when empty: v4/index.html
- `2ee19bc` v4: toolbar OEM select opens customer-milestone dialog: v4/index.html
- `f79ce69` v4: standalone, no recommended tasks, OEM milestones on demand: v4/README.md
- `6b3bf35` v4: standalone, no recommended tasks, OEM milestones on demand: v4/workcal.js
- `59e7795` v4: standalone, no recommended tasks, OEM milestones on demand: v4/index.html
- `52123c8` v3.7 MPP/XML parity with ProjectLibre: calendars, baselines, splits, rates: server/mpp2xml/server.py
- `67b6f7d` v3.7 MPP/XML parity with ProjectLibre: calendars, baselines, splits, rates: README.md
- `e2f2731` v3.7 MPP/XML parity with ProjectLibre: calendars, baselines, splits, rates: exec.html
- `c39fdff` 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/README.md
- `7b68aad` 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/docker-compose.yml
- `feeaaa5` 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/Caddyfile
- `83877fa` 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/Dockerfile
- `c2c085f` 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: server/mpp2xml/server.py
- `a3df6d8` 补齐 ProjectLibre：任务类型/投入比导向、资源日历与休假、实际工时/实际成本/剩余工时、分时费率与成本累算、优先级平衡、筛选/排序/搜索、自定义字段、任务分配状况、资源图表、WBS 图、报表与项目信息、进度线、网络图拖拽链接、插入子项目、导出画拆分；MPP 在线导入（Docker 服务 server/mpp2xml）: exec.html
- `79b7039` 排程单位可选：按天/按小时（08:00–12:00、13:00–17:00；工期 4h/1.5d/2d4h；开始/完成含时刻；依赖与约束按小时；条形按小时比例；XML 带时刻）: exec.html
- `d21d527` 阶段④⑤：网络图、资源使用视图（日/周/月）、基线0–10、资源平衡/清除平衡、拆分任务、周期性任务、任务日历: exec.html
- `8d98164` 阶段③：跟踪/挣值视图（实际开始/完成、完成%联动、固定成本、状态日期线、BAC/PV/EV/AC/SV/CV/SPI/CPI）、成本列、基线含成本、XML 带实际日期与成本: exec.html
- `a95c6cd` 阶段②：资源工作表（类型/最大单位/费率/加班费率/每次使用成本）、资源名称列支持 张三[50%]、工时列（改工时反算工期）、按单位计算过度分配、XML 导入导出大纲层级+资源+分配: exec.html
- `b0e627f` 阶段①：撤销/重做（Ctrl+Z/Ctrl+Y）、升级/降级（Alt+Shift+←/→，多级分组缩进）、WBS 编号列: exec.html
- `d33d099` 开始/完成日期：自动、手动行统一为 YYYY-MM-DD 居中显示，聚焦时切换为日期控件: exec.html
- `6e88745` 任务模式列（自动/手动计划）；前置任务带动日期（供应商节点自动取消固定）；MS Project 直角依赖线；导出/预览改为客户节点页版式；导出按钮单独一行: exec.html
- `e1b792a` 表格内可直接输入/选择开始、完成日期；新增前置任务列、约束列（MS Project 8 种约束）；XML 导入导出约束: exec.html
- `eadbf54` 删除按钮/Delete键/行尾删除；菱形与条形垂直居中；甘特图右侧铺满并留出标注空间；同步行改名提示: exec.html
- `59e3604` 时间轴表头：年/月数字、年月/周、年月/日；客户节点页月份改数字: plan.html
- `61b5014` 时间轴表头：年/月数字、年月/周、年月/日；客户节点页月份改数字: exec.html
- `4888ceb` 自动清除空的系统分组: exec.html
- `4218c75` 行号ID、分隔条、单击改名、条形标注、移除德国日历: README.md
- `d32d617` 行号ID、分隔条、单击改名、条形标注、移除德国日历: workcal.js
- `73da66f` 行号ID、分隔条、单击改名、条形标注、移除德国日历: exec.html
- `60aa090` 移除 模板: README.md
- `8894cd8` 移除 模板: exec.html
- `1e69c20` 隐藏模板按钮，分组顺序修复，删除引导: README.md
- `7632cb7` 隐藏模板按钮，分组顺序修复，删除引导: exec.html
- `2bc0fca` v3.1 顶栏三步+VDA阶段样式: README.md
- `df90b7d` v3.1 顶栏三步+VDA阶段样式: index.html
- `2fddfc4` v3.1 顶栏三步+VDA阶段样式: plan.html
- `32341c6` v3.1 顶栏三步+VDA阶段样式: exec.html
- `823fb26` v3 合并版: README.md
- `5d11d05` v3 合并版: index.html
- `620360e` v3 合并版: plan.html
- `56284d3` v3 合并版: exec.html
- `484cef5` v3 合并版: workcal.js
- `7c73cf4` Initial commit

说明：`v3.7-20261011`、`v3-oem-20261011`、`backup-20261018`、`backup-20261019` 四个 tag 未对应 Release，不在上列。

## 附：README「最近更新」原文

- 2026-11-17：供应商节点日期行改成名称在前、日期在后，与客户里程碑的顺序一致
- 2026-11-04：「插入客户里程碑」可添加自定义客户节点（名称 + 日期），按日期自动插到合适位置，改日期后自动重新排位，可删除
- 2026-10-27：浏览器放大（125%–200%）后功能区不再折成多行挤乱表格，放不下时横向滚动（滚轮可滚），下拉菜单正常弹出
- 2026-10-26：2027 年先按法定假日暂定排入中国日历（国务院通知发布后自动替换）
- 2026-10-26：从 OEM-Gantt 带入的推荐任务按工作日计工期，遇法定假日顺延（与 OEM 页一致）
- 2026-10-26：「文件 → 导入 → 更多」里可填写 MPP 转换服务地址（留空用默认服务器）

数据只保存在本机浏览器，与 OEM-Gantt 互不影响。
