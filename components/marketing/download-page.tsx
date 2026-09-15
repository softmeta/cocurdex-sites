import Link from "next/link";
import { localizedPath, type SiteLocale } from "@/lib/locales";
import { getMarketingDict } from "@/lib/marketing";
import { desktopDownloads, githubLatestReleaseUrl } from "@/lib/site";
import { DownloadBuilds } from "./download-builds";
import { SiteShell } from "./shell";

const secondaryButton =
  "inline-flex min-h-10 items-center justify-center rounded-md border border-fd-border bg-fd-card px-4 py-2 font-medium text-[0.9375rem] text-fd-foreground no-underline hover:border-fd-foreground/30";

export function DownloadPage({ locale }: { locale: SiteLocale }) {
  const t = getMarketingDict(locale);

  return (
    <SiteShell locale={locale} path={localizedPath(locale, "/download/")}>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pt-14 pb-16">
        <p className="mb-3 font-medium text-[0.8125rem] text-fd-primary uppercase tracking-[0.08em]">
          {t.download.eyebrow}
        </p>
        <h1 className="mb-4 font-semibold text-3xl leading-tight tracking-tight sm:text-4xl">
          {t.download.heading}
        </h1>
        <p className="mb-0 text-fd-muted-foreground leading-relaxed">
          {t.download.intro}
        </p>
        <DownloadBuilds builds={desktopDownloads} labels={t.download.builds} />
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={githubLatestReleaseUrl} className={secondaryButton}>
            {t.download.releaseNotes}
          </a>
        </div>
        <div className="mt-6 rounded-xl border border-fd-border bg-fd-card p-4 text-[0.9375rem] text-fd-muted-foreground">
          {t.download.installNote}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={localizedPath(locale, "/docs/")}
            className={secondaryButton}
          >
            {t.download.readDocs}
          </Link>
          <Link href={localizedPath(locale, "/")} className={secondaryButton}>
            {t.download.backHome}
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
