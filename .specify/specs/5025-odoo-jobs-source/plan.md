# Implementation Plan: Official Odoo Jobs Source

## Phase 1 — package scaffold

Create the package manifest, compiler configuration, public barrel, module, constants, minimal parsed-job type, service scaffold, and E2E test.

## Phase 2 — integration

Add the enum member, aggregate module import/list entry, TypeScript path alias, and Jest module mapping without reordering unrelated entries.

## Phase 3 — validation

Run the package-only TypeScript check, targeted Jest E2E test, and repository scans for stale copied names or unplanned parser selectors.

## Deferred work

Inspect the live Odoo careers markup, define verified selectors, and implement `parseJobs` in a separate change with parsing fixtures and unit coverage.

