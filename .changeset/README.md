# Changesets

This directory holds [Changesets](https://github.com/changesets/changesets), which drive
versioning and npm publishing for the public Qeetix packages.

To record a change, run:

```bash
pnpm changeset
```

Pick the affected packages and a bump (patch / minor / major), then commit the generated file
with your PR. On merge to `main`, the release workflow opens a **Version Packages** PR; merging
that PR publishes the changed packages to npm.

Versioning is **independent** per package — `@qeetix/tokens`, `@qeetix/ui`, `@qeetix/brand`,
`@qeetix/tsconfig` and `@qeetix/eslint-config` each version on their own. `@qeetix/docs` is
private and never published.
