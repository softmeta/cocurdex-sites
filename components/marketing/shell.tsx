import Link from "next/link";
import type { ReactNode } from "react";
import {
  alternateLocalePath,
  localeLabels,
  locales,
  localizedPath,
  type SiteLocale,
} from "@/lib/locales";
import { getMarketingDict } from "@/lib/marketing";
import { site } from "@/lib/site";

interface SiteShellProps {
  locale: SiteLocale;
  /** Locale-prefixed path of the page, e.g. "/" or "/zh-cn/download/". */
  path: string;
  children: ReactNode;
}

export function SiteShell({ locale, path, children }: SiteShellProps) {
  const dict = getMarketingDict(locale);
  const other = locales.find((entry) => entry !== locale) ?? "zh-cn";

  return (
    <div className="flex min-h-screen flex-col bg-fd-background text-fd-foreground">
      <header className="sticky top-0 z-10 border-fd-border border-b bg-fd-background/90 backdrop-blur">
        <div className="mx-auto flex min-h-14 w-full max-w-4xl items-center justify-between gap-4 px-4">
          <Link
            href={localizedPath(locale, "/")}
            className="inline-flex items-center gap-2.5 font-semibold text-fd-foreground tracking-tight no-underline"
          >
            {/* biome-ignore lint/performance/noImgElement: static export, small svg logo */}
            <img src="/cocurdex-icon.svg" alt="" width={24} height={24} />
            <span>{site.name}</span>
          </Link>
          <nav
            className="flex flex-wrap items-center gap-x-4 gap-y-1"
            aria-label={dict.nav.primaryAria}
          >
            <Link
              href={localizedPath(locale, "/docs/")}
              className="text-[0.9375rem] text-fd-muted-foreground no-underline hover:text-fd-foreground"
            >
              {dict.nav.docs}
            </Link>
            <Link
              href={localizedPath(locale, "/download/")}
              className="rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-[0.9375rem] text-fd-foreground no-underline hover:border-fd-foreground/30"
            >
              {dict.nav.download}
            </Link>
            <Link
              href={alternateLocalePath(other, path)}
              hrefLang={other === "zh-cn" ? "zh-CN" : "en"}
              className="text-[0.9375rem] text-fd-muted-foreground no-underline hover:text-fd-foreground"
            >
              {localeLabels[other]}
            </Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="mt-8 border-fd-border border-t px-4 pt-6 pb-10">
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-baseline justify-between gap-x-6 gap-y-3 text-fd-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} {site.name}. {dict.footer.tagline}
          </p>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-3"
            aria-label={dict.nav.footerAria}
          >
            <Link
              href={localizedPath(locale, "/docs/")}
              className="text-fd-muted-foreground no-underline hover:text-fd-foreground"
            >
              {dict.nav.docs}
            </Link>
            <Link
              href={localizedPath(locale, "/download/")}
              className="text-fd-muted-foreground no-underline hover:text-fd-foreground"
            >
              {dict.nav.download}
            </Link>
            <Link
              href={localizedPath(locale, "/docs/getting-started/")}
              className="text-fd-muted-foreground no-underline hover:text-fd-foreground"
            >
              {dict.footer.gettingStarted}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
