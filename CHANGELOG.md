# Change log / 更新记录 / Änderungsprotokoll

> Version history is rebuilt from commit history; all tags were removed when the repository was recreated on 2026-11-17.
> 版本历史按提交记录整理；全部 tag 已于 2026-11-17 删仓重建时删除。
> Der Versionsverlauf wurde aus der Commit-Historie rekonstruiert; alle Tags wurden beim Neuerstellen des Repositorys am 2026-11-17 entfernt.

## English

- 2026-11-17: Supplier node date rows now show the name first and the date second, matching the customer milestone order.
- 2026-11-04: "Insert customer milestone" can now add custom customer nodes (name + date), inserted at the right position by date, automatically re-sorted when the date changes, and deletable.
- 2026-10-27: When the browser is zoomed (125%–200%), the ribbon no longer wraps into multiple rows and squeezes the table; it scrolls horizontally instead (mouse wheel works), and dropdown menus open normally.
- 2026-10-26: 2027 is tentatively scheduled in the Chinese calendar using statutory holidays (automatically replaced once the State Council notice is published).
- 2026-10-26: Recommended tasks brought in from OEM-Gantt now count durations in working days and shift past statutory holidays (same as the OEM page).
- 2026-10-26: The MPP conversion service address can now be entered under "File → Import → More" (leave empty to use the default server).

### Version history

#### v1.2.15 (2026-10-26)

- The OEM page can optionally account for public holidays (linked to the ProjectPilot calendar).
- The MPP conversion service address can now be configured from the Import menu.
- Fixed the 404 on the OEM execution-plan button; the three calendar files were unified into one, so calendar data is shared.
- Performance: 500 ms save debounce, localStorage quota warnings, baselines capped at 5 sets, undo/redo stack fix, caching for milestone sync and resource warnings.
- MPP conversion service stability improvements.

#### v1.2.14 (2026-10-16)

- Tesla customer milestone node order adjusted; supplier information removed.

#### v1.2.13 (2026-10-16)

- Added Tesla customer milestones.

#### v1.2.12 (2026-10-16)

- Removed the legacy (1.0) ribbon.

#### v1.2.11 (2026-10-16)

- Duration column now shows automatically for older data.

#### v1.2.10 (2026-10-16)

- Excel export: duration formulas now linked.

#### v1.2.9 (2026-10-16)

- Durations display in the entered unit.

#### v1.2.8 (2026-10-16)

- Chinese calendar now includes built-in 2023–2026 public holidays and make-up workdays.

#### v1.2.7 (2026-10-16)

- Duration column shown by default, supporting days/weeks/months; Excel import recognizes period columns.

#### v1.2.6 (2026-10-16)

- Excel import defaults to FS predecessors.

#### v1.2.5 (2026-10-16)

- Excel import recognizes multiple worksheets, headerless name columns, and outline levels.

#### v1.2.4 (2026-10-16)

- Added Excel import (task name/start/finish).

#### v1.2.3 (2026-10-16)

- Vector PDF export; % complete can be added to the Quick Access Toolbar.

#### v1.2.2 (2026-10-16)

- PDF strips at 600 DPI; task names wrap automatically; status date.

#### v1.2.1 (2026-10-16)

- Fixed PDF structure; File page defaults to JSON with XML moved under "More"; Excel gains year-month rows and drops the predecessor column.

#### v1.2.0 (2026-10-16)

- Excel export switched to .xlsx, with conditional-format Gantt blocks updating automatically as dates change.

#### v1.1.0 (2026-10-15)

- Default template changed to the 5 APQP phases; template names follow the UI language.
- Ribbon reorganized (classic layout toggle); version 1.0 kept at /v1.0/.
- OEM-Gantt: supplier milestone rows auto-sort by date (manual dragging removed); drag diamonds to change dates; confirm save location on export.
- OEM-Gantt: milestone label angles adapt to row height and are never truncated; label width and row height adjustable.
- OEM-Gantt: undo/redo, full project names in export filenames, BMW milestones unchecked by default, recommended tasks collapsed by default, PDF structure and date picker fixes.

#### v1.0.0 (2026-10-14)

- MS Project-style scheduling: tasks, outline/WBS, dependencies (FS/SS/FF/SF), constraints, milestones, manual/auto scheduling.
- Ribbon UI (Quick Access Toolbar, collapsible), light/dark/system themes, Chinese/English/German UI.
- Gantt chart, calendar view, network diagram, timeline, task form split view.
- Resources & cost: resource sheet, assignments, work/cost, leveling, baselines 0–10, earned value tracking, critical path.
- Customer milestones (OEM): pick milestones by OEM, recommended tasks; standalone OEM-Gantt page (/oem/).
- Import: MS Project XML, MPP (in-browser offline parser + online conversion service), GanttProject .gan/CSV, JSON.
- Export: PDF/JPG print layouts, XML, .gan, CSV, Excel, JSON; offline single-file build.
- Undo/redo, keyboard shortcuts (press F1), right-click menu, format painter, text/bar styles, Chinese and custom calendars.

*Other tags without a release: v3.7-20261011 (2026-10-11), v3-oem-20261011 (2026-10-11), backup-20261018 (2026-10-16), backup-20261019 (2026-10-18).*

## 中文

- 2026-11-17：供应商节点日期行改成名称在前、日期在后，与客户里程碑的顺序一致
- 2026-11-04：「插入客户里程碑」可添加自定义客户节点（名称 + 日期），按日期自动插到合适位置，改日期后自动重新排位，可删除
- 2026-10-27：浏览器放大（125%–200%）后功能区不再折成多行挤乱表格，放不下时横向滚动（滚轮可滚），下拉菜单正常弹出
- 2026-10-26：2027 年先按法定假日暂定排入中国日历（国务院通知发布后自动替换）
- 2026-10-26：从 OEM-Gantt 带入的推荐任务按工作日计工期，遇法定假日顺延（与 OEM 页一致）
- 2026-10-26：「文件 → 导入 → 更多」里可填写 MPP 转换服务地址（留空用默认服务器）

### 版本历史

#### v1.2.15（2026-10-26）

- OEM 页可选考虑节假日（关联 ProjectPilot 日历）
- MPP 转换服务地址可在「导入」菜单配置
- 修复 OEM 执行计划按钮 404；三份日历文件统一为同一份，日历数据互通
- 性能优化：保存 500ms 防抖、localStorage 配额告警、基线只保留 5 套、撤销/重做栈修复、里程碑同步与资源预警缓存
- MPP 转换服务稳定性改进

#### v1.2.14（2026-10-16）

- Tesla 客户里程碑节点顺序调整

#### v1.2.13（2026-10-16）

- 新增 Tesla 客户里程碑

#### v1.2.12（2026-10-16）

- 删除旧版（1.0）功能区

#### v1.2.11（2026-10-16）

- 旧数据工期列自动显示

#### v1.2.10（2026-10-16）

- Excel 导出工期公式联动

#### v1.2.9（2026-10-16）

- 工期按输入单位显示

#### v1.2.8（2026-10-16）

- 中国日历内置 2023–2026 年节假日与调休

#### v1.2.7（2026-10-16）

- 工期列默认显示，支持天/周/月；Excel 导入识别周期列

#### v1.2.6（2026-10-16）

- Excel 导入默认 FS 前置关系

#### v1.2.5（2026-10-16）

- Excel 导入识别多工作表、无表头名称列和分级层级

#### v1.2.4（2026-10-16）

- 新增 Excel 导入（任务名/开始/结束）

#### v1.2.3（2026-10-16）

- 矢量 PDF 导出；完成百分比可加入快速访问工具栏

#### v1.2.2（2026-10-16）

- PDF 分条 600 DPI；任务名自动换行；状态日期

#### v1.2.1（2026-10-16）

- 修复 PDF 结构；文件页默认 JSON、XML 收进“更多”；Excel 加年月行、去掉前置任务列

#### v1.2.0（2026-10-16）

- Excel 导出改为 .xlsx，条件格式甘特色块随日期自动变化

#### v1.1.0（2026-10-15）

- 默认模板改成 APQP 5 个阶段，模板名称跟随界面语言
- 功能区重新排布（经典布局切换），1.0 版保留在 /v1.0/
- OEM-Gantt：供应商里程碑行按日期自动排序（取消手动拖拽）；可拖动菱形改日期；导出时确认保存位置
- OEM-Gantt：里程碑标签角度随行高自适应、永不截断，标签宽度与行高可调
- OEM-Gantt：撤销/重做，导出文件名用完整项目名，BMW 里程碑默认不勾选，推荐任务默认折叠，PDF 结构与日期选择器修复

#### v1.0.0（2026-10-14）

- MS Project 风格排程：任务、大纲/WBS、依赖关系（FS/SS/FF/SF）、约束、里程碑、手动/自动计划
- 功能区界面（快速访问工具栏、可折叠）、浅色/深色/跟随系统主题、中/英/德三语界面
- 甘特图、日历视图、网络图、时间轴、任务表单拆分视图
- 资源与成本：资源工作表、分配、工时/成本、资源平衡、基线 0–10、挣值跟踪、关键路径
- 客户里程碑（OEM）：按主机厂选里程碑、推荐任务；OEM-Gantt 独立页面（/oem/）
- 导入：MS Project XML、MPP（浏览器内离线解析 + 在线转换服务）、GanttProject .gan/CSV、JSON
- 导出：PDF/JPG 打印版式、XML、.gan、CSV、Excel、JSON；离线单文件版
- 撤销/重做、快捷键（F1 查看）、右键菜单、格式刷、文本/条形样式、中国日历与自定义日历

*其他无对应 Release 的 tag：v3.7-20261011（2026-10-11）、v3-oem-20261011（2026-10-11）、backup-20261018（2026-10-16）、backup-20261019（2026-10-18）。*

## Deutsch

- 2026-11-17: Bei Lieferantenknoten steht jetzt der Name vor dem Datum, wie bei den Kundenmeilensteinen.
- 2026-11-04: „Kundenmeilenstein einfügen“ kann jetzt benutzerdefinierte Kundenknoten (Name + Datum) hinzufügen, die nach Datum an der richtigen Stelle eingefügt, bei Datumsänderung automatisch neu sortiert und gelöscht werden können.
- 2026-10-27: Bei Browser-Zoom (125 %–200 %) bricht der Funktionsbereich nicht mehr in mehrere Zeilen um und quetscht die Tabelle; er scrollt stattdessen horizontal (Mausrad funktioniert), und Dropdown-Menüs öffnen normal.
- 2026-10-26: Das Jahr 2027 ist vorläufig mit den gesetzlichen Feiertagen im chinesischen Kalender eingetragen (wird nach Veröffentlichung der Mitteilung des Staatsrats automatisch ersetzt).
- 2026-10-26: Aus OEM-Gantt übernommene empfohlene Aufgaben zählen die Dauer jetzt in Arbeitstagen und verschieben sich über gesetzliche Feiertage (wie auf der OEM-Seite).
- 2026-10-26: Die Adresse des MPP-Konvertierungsdienstes kann jetzt unter „Datei → Importieren → Mehr“ eingetragen werden (leer lassen für den Standardserver).

### Versionsverlauf

#### v1.2.15 (2026-10-26)

- Die OEM-Seite kann optional Feiertage berücksichtigen (mit dem ProjectPilot-Kalender verknüpft).
- Die Adresse des MPP-Konvertierungsdienstes kann jetzt im Import-Menü konfiguriert werden.
- 404-Fehler bei der OEM-Schaltfläche für den Ausführungsplan behoben; die drei Kalenderdateien wurden zu einer vereint, sodass die Kalenderdaten gemeinsam genutzt werden.
- Leistung: verzögertes Speichern (500 ms), Warnungen bei localStorage-Kontingent, Basispläne auf 5 Sätze begrenzt, Stapel für Rückgängig/Wiederholen korrigiert, Zwischenspeicherung für Meilenstein-Synchronisation und Ressourcenwarnungen.
- Stabilitätsverbesserungen für den MPP-Konvertierungsdienst.

#### v1.2.14 (2026-10-16)

- Reihenfolge der Tesla-Kundenmeilensteinknoten angepasst; Lieferanteninformationen entfernt.

#### v1.2.13 (2026-10-16)

- Tesla-Kundenmeilensteine hinzugefügt.

#### v1.2.12 (2026-10-16)

- Altes Menüband (1.0) entfernt.

#### v1.2.11 (2026-10-16)

- Dauer-Spalte wird jetzt auch bei älteren Daten automatisch angezeigt.

#### v1.2.10 (2026-10-16)

- Excel-Export: Dauerformeln jetzt verknüpft.

#### v1.2.9 (2026-10-16)

- Dauern werden in der eingegebenen Einheit angezeigt.

#### v1.2.8 (2026-10-16)

- Chinesischer Kalender enthält jetzt die gesetzlichen Feiertage und Ersatzarbeitstage 2023–2026.

#### v1.2.7 (2026-10-16)

- Dauer-Spalte standardmäßig sichtbar, mit Tagen/Wochen/Monaten; Excel-Import erkennt Zeitraumspalten.

#### v1.2.6 (2026-10-16)

- Excel-Import verwendet standardmäßig FS-Vorgänger.

#### v1.2.5 (2026-10-16)

- Excel-Import erkennt mehrere Arbeitsblätter, kopflose Namensspalten und Gliederungsebenen.

#### v1.2.4 (2026-10-16)

- Excel-Import hinzugefügt (Aufgabenname/Anfang/Ende).

#### v1.2.3 (2026-10-16)

- Vektor-PDF-Export; „% abgeschlossen“ kann zur Symbolleiste für den Schnellzugriff hinzugefügt werden.

#### v1.2.2 (2026-10-16)

- PDF-Streifen mit 600 DPI; Aufgabennamen umbrechen automatisch; Statusdatum.

#### v1.2.1 (2026-10-16)

- PDF-Struktur korrigiert; Dateiseite standardmäßig JSON, XML unter „Mehr“; Excel mit Jahr-Monat-Zeilen und ohne Vorgängerspalte.

#### v1.2.0 (2026-10-16)

- Excel-Export auf .xlsx umgestellt, Gantt-Blöcke mit bedingter Formatierung ändern sich automatisch mit den Daten.

#### v1.1.0 (2026-10-15)

- Standardvorlage auf die 5 APQP-Phasen umgestellt; Vorlagennamen folgen der Sprache der Benutzeroberfläche.
- Menüband neu angeordnet (Umschalter für klassisches Layout); Version 1.0 bleibt unter /v1.0/ erhalten.
- OEM-Gantt: Lieferanten-Meilensteinzeilen werden automatisch nach Datum sortiert (manuelles Ziehen entfernt); Rauten zum Ändern von Daten ziehbar; Speicherort beim Export bestätigen.
- OEM-Gantt: Meilenstein-Beschriftungswinkel passen sich der Zeilenhöhe an und werden nie abgeschnitten; Beschriftungsbreite und Zeilenhöhe einstellbar.
- OEM-Gantt: Rückgängig/Wiederholen, vollständige Projektnamen in Exportdateinamen, BMW-Meilensteine standardmäßig abgewählt, empfohlene Aufgaben standardmäßig eingeklappt, Korrekturen an PDF-Struktur und Datumsauswahl.

#### v1.0.0 (2026-10-14)

- Terminplanung im MS Project-Stil: Aufgaben, Gliederung/PSP, Abhängigkeiten (FS/SS/FF/SF), Einschränkungen, Meilensteine, manuelle/automatische Planung.
- Menüband-Oberfläche (Symbolleiste für den Schnellzugriff, einklappbar), helle/dunkle/System-Designs, Benutzeroberfläche auf Chinesisch/Englisch/Deutsch.
- Gantt-Diagramm, Kalenderansicht, Netzplan, Zeitachse, geteilte Aufgabenformularansicht.
- Ressourcen & Kosten: Ressourcenblatt, Zuordnungen, Arbeit/Kosten, Kapazitätsabgleich, Basispläne 0–10, Earned-Value-Verfolgung, kritischer Pfad.
- Kundenmeilensteine (OEM): Meilensteine nach OEM wählen, empfohlene Aufgaben; eigenständige OEM-Gantt-Seite (/oem/).
- Import: MS Project XML, MPP (Offline-Parser im Browser + Online-Konvertierungsdienst), GanttProject .gan/CSV, JSON.
- Export: PDF/JPG-Drucklayouts, XML, .gan, CSV, Excel, JSON; Offline-Version als einzelne Datei.
- Rückgängig/Wiederholen, Tastenkürzel (F1 drücken), Rechtsklickmenü, Format übertragen, Text-/Balkendesigns, chinesischer und benutzerdefinierte Kalender.

*Weitere Tags ohne Release: v3.7-20261011 (2026-10-11), v3-oem-20261011 (2026-10-11), backup-20261018 (2026-10-16), backup-20261019 (2026-10-18).*
