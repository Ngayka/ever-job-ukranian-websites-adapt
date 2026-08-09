# Feature Specification: Official Odoo Jobs Source

## Problem statement

Ever Jobs needs a distinct source plugin for official Odoo vacancies at the Odoo careers site. The package must be discoverable and testable now, while HTML selectors remain deliberately deferred until the live markup has been verified.

## Scope

- Add `@ever-jobs/source-odoo-jobs` with module, service, constants, types, exports, and E2E coverage.
- Register `Site.ODOO_JOBS`, the source module, TypeScript alias, and Jest alias.
- Fetch the official Odoo jobs URL through the shared HTTP client and validate the response body.
- Provide a compiling `parseJobs` scaffold that logs received HTML and returns an empty list.

## Non-goals

- Implementing Cheerio selectors or actual Odoo HTML parsing.
- Modifying Djinni or Ukraine Odoo Companies packages.
- Changing dependencies, workspace patterns, GraphQL, or unrelated source registrations.

## Contracts

`OdooJobsService` implements `IScraper`, is decorated as the `ODOO_JOBS` company source, limits mapped jobs by `resultsWanted`, and converts parsed descriptions according to `DescriptionFormat`. Fetch, validation, or future parsing failures return `new JobResponseDto([])`.

## Test plan

1. Type-check the new package with its package `tsconfig.json` and `--noEmit`.
2. Compile the Nest `TestingModule` and resolve `OdooJobsService` through the public alias.
3. Exercise `scrape` with `Site.ODOO_JOBS`; accept zero jobs while the parser is a scaffold.
4. If jobs are emitted after future parser work, validate required fields, company, and site.

