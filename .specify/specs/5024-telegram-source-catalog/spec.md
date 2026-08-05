# Feature Specification: Telegram Source Catalog

## Problem statement

The monorepo contains a large, heterogeneous set of source plugins, but a separate Telegram bot cannot safely infer user-facing source type and geographic coverage from the existing `SourcePlugin.category` value alone.

## Scope

- Inventory every `packages/plugins/source-*` package and its `@SourcePlugin` metadata.
- Classify each unique `Site.*` by `Region` and `SourceType` using package identity, decorator metadata, constants, endpoints, and scraper behavior.
- Generate a machine-readable JSON catalog, a self-contained Python catalog, and a human review report.
- Disable generic adapters and unclear non-user-facing sources for bot selection.
- Validate one-record-per-site coverage and Python syntax.

## Non-goals

- Changing scraper implementations, categories, registration, enums, APIs, dependencies, tests, or build configuration.
- Proving live availability of every external endpoint.
- Running the monorepo build.

## Contracts

Each JSON record contains `site`, `package`, `name`, `originalCategory`, `region`, `sourceType`, `enabledForBot`, `confidence`, and `reason`. `site` is unique. The Python module defines matching string enums, a source mapping, and `get_sources(region, source_types)` that returns only enabled matching sites.

## Test plan

1. Compare the number of `source-*` packages, extracted decorators, unique sites, JSON records, and Python mapping entries.
2. Assert no duplicate or blank `site` values.
3. Assert all enum-like classification values belong to the requested sets.
4. Compile only `docs/generated_job_sources.py` with `python -m py_compile`.

