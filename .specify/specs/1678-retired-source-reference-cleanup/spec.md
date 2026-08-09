# Retired Source Reference Cleanup

## Problem statement

Two intentionally retired source packages still have registrations and public catalogue entries after their package directories were removed, preventing a clean build.

## Scope

Remove only the registrations, enum members, tests, catalogue entries, and documentation claims belonging to the two retired sources.

## Non-goals

- Do not change any surviving source plugin implementation.
- Do not add replacement sources.
- Do not change scraper contracts.

## Contracts

The surviving source enum, module registry, CLI module, MCP catalogue, merge defaults, and documentation must remain internally consistent.

## Test plan

- Run the monorepo build.
- Scan the entire working tree for either retired source identifier.
- Confirm protected surviving plugin directories have no diff.
