# Review policy

The change sets the tier, not the author. A mixed diff uses the highest tier.
An agent wrote the patch does not lower the tier. The person who directed the
agent owns the outcome.

`node scripts/classify-risk.mjs` prints the tier for a diff. CI writes the same
summary on pull requests. It does not fail the check.

## Tiers

| Tier | Paths | Human approval |
| --- | --- | --- |
| Low | `content/**`, `lib/marketing/**`, `README.md` | None beyond the author, once CI is green and Bugbot has nothing unresolved |
| Medium | `app/**`, `components/**`, `styles/**`, `lib/**` (except `lib/marketing/**`), `public/**`, `scripts/**`, and any path that matches nothing above | One human besides the author |
| High | `.github/**`, `.cursor/**`, `AGENTS.md`, `docs/REVIEW-POLICY.md`, `CODEOWNERS`, `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `.npmrc`, `next.config.mjs`, `wrangler.toml`, `postcss.config.mjs`, `source.config.ts`, `tsconfig.json`, `biome.json` | Code owner (`@ladieman217`) |

Low is docs and marketing copy. Medium is layout, components, navigation, and
i18n infrastructure. High is CI, deploy and build config, dependencies, and
the review rules themselves.

## What GitHub can enforce

Branch protection is one rule for the whole branch. This repo uses it as:

- Required approving reviews: **0**, so a Low diff can merge with the author
  as the only human after CI and Bugbot are clear.
- **Require review from Code Owners**, so a High path always needs
  `@ladieman217`.
- Medium stays a written rule: the author requests one human reviewer and
  does not merge alone. GitHub cannot require one approval for `app/**` and
  zero for `content/**` on the same branch.

A bot review is not a human approval. Do not put a bot in `CODEOWNERS`.

## Owners

`CODEOWNERS` lists `@ladieman217`. That login is on every human commit in this
repo and on the product repo (`softmeta/cocurdex`).

## Convergence

After 3 review rounds, the author steps back and reconsiders the approach
instead of trading another round of nits with the bot. A re-review covers the
new diff only, and does not restate findings already on the pull request.

## Revert

There is no feature flag. Revert the merge commit on `main`. The Deploy
workflow rebuilds `out/` and republishes the site.
