# Tasks: Telegram Source Catalog

- [x] T001 Inventory every `source-*` package and extract decorator metadata; acceptance: no package lacks a site, name, or category.
- [x] T002 Check unique `Site.*` ownership; acceptance: no duplicate site identifier.
- [x] T003 Classify all records by region, source type, bot suitability, confidence, and reason; acceptance: all values are from the requested domains.
- [x] T004 Generate the JSON and Python catalogs; acceptance: record counts and sites match exactly.
- [x] T005 Generate the review report and documentation index/log entries; acceptance: all eight requested review sections are present.
- [x] T006 Run catalog invariants and Python syntax verification; acceptance: all checks pass without a monorepo build.
