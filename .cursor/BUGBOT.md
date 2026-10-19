# Bugbot review rules

Project conventions: [AGENTS.md](../AGENTS.md).
Who must approve: [REVIEW-POLICY.md](../docs/REVIEW-POLICY.md).

This is a docs and marketing site. The failure mode that matters is **it lies**:
a command, flag, setting name, or UI behavior that does not match the product
in [softmeta/cocurdex](https://github.com/softmeta/cocurdex).

## Flag these

- **Important.** A user-facing claim with no file and line. Cite the line in
  this diff. When the claim is about product behavior, also cite a file and
  line in `softmeta/cocurdex`. If you cannot find that line, say the claim is
  unverified. Never invent a citation from a name.
- **Important.** English and zh-CN copies that disagree on facts (commands,
  flags, settings, UI, or where a link goes). Wording that is only translation
  is fine. A missing counterpart page is Important. In `meta.json`, `pages`
  entries must be the same path in the same order; a `---Label---` separator
  may be translated.
- **Important.** A broken link, nav item, or sidebar entry.
- **Important.** User-facing docs or marketing copy that explain internal
  implementation instead of behavior a person can see.
- **Important.** Any mention of the product Workflow feature. It is deprecated
  and its code is frozen. Do not ask the author to document it. GitHub Actions
  under `.github/workflows/` are not that feature.
- **Pre-existing.** A problem this diff did not introduce. Tag it, and do not
  ask for a fix in this PR.
- **Nit.** Wording or formatting that does not change what the page claims.
  Post at most 3 Nits. Drop the rest.

## How to write the review

- Tag every finding `Important`, `Nit`, or `Pre-existing`.
- Start the summary with the count, for example `2 findings (1 Important, 1 Nit).`
- When there is nothing to fix, write `0 findings. Nothing to fix.`
- In the same summary, name the risk tier of this diff (the highest tier in
  [REVIEW-POLICY.md](../docs/REVIEW-POLICY.md)). That sentence is not a finding.
- Do not repeat a finding already posted on this pull request.
- Re-review only the new diff since the last review. After 3 review rounds,
  stop, and tell the author to step back and reconsider the approach.
- Do not approve the pull request. Approval is a human decision. A bot
  approval must not count as the human this policy asks for.

## Skip

Do not review or comment on:

- `pnpm-lock.yaml`
- `.source/**`
- `out/**`
- `.next/**`
- `next-env.d.ts`
- `*.tsbuildinfo`
