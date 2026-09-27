import Link from "next/link";
import { localizedPath, type SiteLocale } from "@/lib/locales";
import { getMarketingDict } from "@/lib/marketing";
import { desktopDownloads, githubLatestReleaseUrl, site } from "@/lib/site";
import { DownloadBuilds } from "./download-builds";
import { eyebrow, SiteShell, secondaryButton } from "./shell";

export function DownloadPage({ locale }: { locale: SiteLocale }) {
  const t = getMarketingDict(locale);
  const to = (p: string) => localizedPath(locale, p);

  return (
    <SiteShell locale={locale} path={to("/download/")}>
      <main className="relative flex-1 overflow-hidden">
        <div aria-hidden className="bg-grid -z-10 absolute inset-0" />
        <div className="mx-auto w-full max-w-4xl px-4 pt-20 pb-24 sm:px-6">
          <p className={eyebrow}>{t.download.eyebrow}</p>
          <h1 className="mb-4 font-semibold text-4xl tracking-[-0.03em] sm:text-5xl">
            {t.download.heading}
          </h1>
          <p className="mb-10 max-w-2xl text-fd-muted-foreground text-lg leading-relaxed">
            {t.download.intro}
          </p>

          <DownloadBuilds
            builds={desktopDownloads}
            labels={t.download.builds}
            recommendedLabel={t.download.recommended}
            actionLabel={t.nav.download}
          />

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href={githubLatestReleaseUrl}
              className="text-fd-primary no-underline hover:underline"
            >
              {t.download.releaseNotes} →
            </a>
            <p className="m-0 text-fd-muted-foreground">
              {t.download.installNote}
            </p>
          </div>

          <h2 className="mt-20 mb-6 font-semibold text-2xl tracking-tight">
            {t.download.afterHeading}
          </h2>
          <ol className="m-0 grid list-none gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border p-0 md:grid-cols-3">
            {t.download.steps.map((step, i) => (
              <li key={step.title} className="bg-fd-card p-5">
                <p className="m-0 mb-3 font-mono text-[0.75rem] text-fd-primary">
                  0{i + 1}
                </p>
                <p className="m-0 mb-1.5 font-semibold tracking-tight">
                  {step.title}
                </p>
                <p className="m-0 text-fd-muted-foreground text-sm leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-6 overflow-hidden rounded-xl border border-fd-border bg-fd-card">
            <div className="flex items-center justify-between border-fd-border border-b bg-fd-muted/50 px-4 py-2 text-sm">
              <span className="font-semibold">{t.download.sourceHeading}</span>
              <span className="text-fd-muted-foreground">
                {t.download.sourceBody}
              </span>
            </div>
            <pre className="m-0 overflow-x-auto p-4 font-mono text-[0.8125rem] leading-7">
              <div>
                <span className="text-fd-primary">$</span> git clone{" "}
                {site.github}
              </div>
              <div>
                <span className="text-fd-primary">$</span> cd cocurdex && pnpm
                install
              </div>
              <div>
                <span className="text-fd-primary">$</span> pnpm --filter
                @cocurdex/desktop dev
              </div>
            </pre>
          </div>

          <div className="mt-10">
            <Link
              href={to("/docs/getting-started/")}
              className={secondaryButton}
            >
              {t.download.readDocs} →
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
