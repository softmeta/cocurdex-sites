# cocurdex-sites

Private source for the public **marketing site** and **product documentation**
at [cocurdex.com](https://cocurdex.com) (static, SEO-first).

## Stack

- [Next.js](https://nextjs.org/) 16 App Router, `output: "export"` → `out/`
- [Fumadocs](https://fumadocs.dev/) (`fumadocs-ui` + `fumadocs-mdx`) for `/docs/*`, custom theme tokens in `styles/globals.css` (Geist fonts, Cocurdex teal); zh-CN UI strings via `@fumadocs/language`
- Tailwind CSS 4 (`@tailwindcss/postcss`), sitemap via `app/sitemap.ts`

## Scripts

```bash
pnpm dev        # http://localhost:4321
pnpm build      # emits out/
pnpm test
pnpm typecheck
pnpm lint       # biome check
```

## Layout

Two root layouts, no middleware — English stays unprefixed, zh-CN under
`/zh-cn/`:

| Path | Source |
| --- | --- |
| `/`, `/download/` | `app/(en)/**` |
| `/zh-cn/*` | `app/zh-cn/**` |
| `/docs/*` | `app/(en)/docs/**` over `content/docs` |
| `/zh-cn/docs/*` | `app/zh-cn/docs/**` over `content/docs-cn` |
| `/api/search`, `/api/search-cn` | static zbsearch indexes (client-side search) |

Marketing copy lives in `lib/marketing/{en,zh-cn}.ts`. Sidebar order lives in
`meta.json` files; `---Label---` entries create sidebar groups. Brand marks in
`public/` are copied from the product repo's `brand/` directory.

## Boundaries

- SSG only. No auth, no team console, no desktop/Electron imports.
- User-facing docs only under `content/`; internal engineering documents live
  in the product repo and are not part of this pipeline.
- The product repo may become public under FSL; this repository stays private
  so the site design, copy, and docs source are not trivially forkable.

## Deploy

### Automated (recommended)

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

1. The Cloudflare Pages project is `cocurdex-web`.
2. Create an API token with **Account → Cloudflare Pages → Edit** (and read account if required).
3. In the GitHub repo → Settings → Secrets and variables → Actions, add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Push to `main` / `dev` or run **Deploy** via `workflow_dispatch`.

### Manual

```bash
pnpm install
pnpm build
# requires wrangler auth + same Cloudflare account
npx wrangler pages deploy out --project-name=cocurdex-web
```

### Domain

`cocurdex.com` points at the Cloudflare Pages project. Keep `site.url` in
`lib/site.ts` equal to the public origin so sitemap/canonical URLs stay correct.
