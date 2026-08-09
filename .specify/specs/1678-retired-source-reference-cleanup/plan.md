# Plan

1. Inventory all live and generated references to the two retired sources.
2. Remove only their enum, registry, CLI, test, catalogue, merge-default, and documentation entries.
3. Rebuild generated output and clear stale generated cache records.
4. Verify a successful build, an empty repository-wide identifier scan, and no protected-plugin changes.

## Risks

- Generated output or cache files may preserve old source text after live references are removed.
- Broad list edits could affect adjacent plugins; diffs must be reviewed line by line.
