# Implementation Plan: Telegram Source Catalog

## Phase 1 — inventory

Extract the first `@SourcePlugin` decorator from every `packages/plugins/source-*` package and inspect package prefixes, constants, URLs, and access requirements.

## Phase 2 — classification

Apply explicit mappings to independent boards and conservative rules to ATS adapters and company career sources. Use `OTHER`/`UNKNOWN` where repository evidence is insufficient, and document confidence.

## Phase 3 — artifacts

Generate `docs/source-catalog.generated.json`, `docs/generated_job_sources.py`, and `docs/source-catalog-review.md`; update the documentation index and append-only log.

## Phase 4 — verification

Validate counts, uniqueness, enum domains, generated Python parity, and Python syntax. Do not run the monorepo build.

## Risks

- Company career feeds often do not encode their full geographic coverage; uncertain regions must remain `OTHER` rather than being inferred from headquarters.
- ATS integrations may support optional public and authenticated modes; they remain generic adapters and disabled for direct bot display.
- Two implementations can expose substantially overlapping vacancies even when their `Site.*` identifiers differ.

