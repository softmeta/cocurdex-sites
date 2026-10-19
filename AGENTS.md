# Agent instructions

Public marketing site and product docs for [cocurdex.com](https://cocurdex.com).
Most pull requests sync user-visible behavior from
[softmeta/cocurdex](https://github.com/softmeta/cocurdex).

Keep this file short. Risk tiers and who must approve:
[docs/REVIEW-POLICY.md](docs/REVIEW-POLICY.md).

## Stack

- Next.js 16 App Router, `output: "export"` (see `next.config.mjs`), deployed from `out/`
- Fumadocs (`fumadocs-ui` + `fumadocs-mdx`) for docs; Tailwind CSS 4
- English routes stay unprefixed. zh-CN lives under `/zh-cn/`
- Package manager: pnpm 10 (`packageManager` in `package.json`)

## Conventions

- English docs: `content/docs`. zh-CN docs: `content/docs-cn`. Same relative paths.
- Sidebar order is the `pages` array in `meta.json`. A `---Label---` entry is a
  group label and may be translated; every other entry must match across languages.
- Marketing copy: `lib/marketing/en.ts` and `lib/marketing/zh-cn.ts` (same keys).
- Static export only. No auth, no team console, no desktop or Electron imports.

## What to document

Document only behavior a person can see: commands, flags, settings names, and UI.
Do not document internal implementation. Do not document the product Workflow
feature; it is deprecated and its code is frozen. Files under `.github/workflows/`
are GitHub Actions, not that feature.

## Before opening a pull request

From a clean tree, run every command below and paste the output into the PR
Testing section. Do not claim success without that output. `pnpm check:links`
reads `out/` and must run after `pnpm build`.

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm check:parity
pnpm build
pnpm check:links
```

`pnpm test` already includes docs parity. Still run `pnpm check:parity` and
paste it, so the EN/zh-CN result is visible on its own.

Visual changes need screenshots in the Testing section.

## Review

Fill in the PR template, including Source (the cocurdex PR or commit), Risk,
and How to revert. After 3 review rounds, stop and reconsider the approach
instead of looping with the reviewer. Re-reviews look at the new diff only,
not comments already posted.
