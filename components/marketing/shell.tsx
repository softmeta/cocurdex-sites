import {
  LanguageSelect,
  LanguageSelectText,
} from "fumadocs-ui/layouts/shared/slots/language-select";
import { ThemeSwitch } from "fumadocs-ui/layouts/shared/slots/theme-switch";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  alternateLocalePath,
  htmlLangs,
  localeLabels,
  locales,
  localizedPath,
  type SiteLocale,
} from "@/lib/locales";
import { getMarketingDict } from "@/lib/marketing";
import { githubLatestReleaseUrl, site } from "@/lib/site";

export const primaryButton =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-fd-foreground px-4 font-medium text-[0.9375rem] text-fd-background no-underline transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-fd-ring focus-visible:outline-offset-2";
export const secondaryButton =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 font-medium text-[0.9375rem] text-fd-foreground no-underline transition-colors hover:border-fd-foreground/30 focus-visible:outline-2 focus-visible:outline-fd-ring focus-visible:outline-offset-2";
/** Mono uppercase section label, e.g. "// 01 agents". */
export const eyebrow =
  "mb-3 font-mono text-[0.75rem] text-fd-primary uppercase tracking-[0.14em]";

interface SiteShellProps {
  locale: SiteLocale;
  /** Locale-prefixed path of the page, e.g. "/" or "/zh-cn/download/". */
  path: string;
  children: ReactNode;
}

const navLink =
  "rounded-md px-2.5 py-1.5 text-[0.875rem] text-fd-muted-foreground no-underline transition-colors hover:text-fd-foreground";
const footLink =
  "text-fd-muted-foreground no-underline transition-colors hover:text-fd-foreground";

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
      <title>GitHub</title>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function SiteShell({ locale, path, children }: SiteShellProps) {
  const dict = getMarketingDict(locale);
  const to = (p: string) => localizedPath(locale, p);

  const footerColumns = [
    {
      title: dict.footer.product,
      links: [
        { label: dict.nav.download, href: to("/download/") },
        { label: dict.footer.releases, href: githubLatestReleaseUrl },
      ],
    },
    {
      title: dict.footer.resources,
      links: [
        {
          label: dict.footer.gettingStarted,
          href: to("/docs/getting-started/"),
        },
        { label: dict.footer.agents, href: to("/docs/agents/") },
        { label: dict.footer.cli, href: to("/docs/cli/") },
      ],
    },
    {
      title: dict.footer.community,
      links: [
        { label: "GitHub", href: site.github },
        { label: "Discord", href: site.discord },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-fd-background text-fd-foreground">
      <header className="sticky top-0 z-20 border-fd-border border-b bg-fd-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href={to("/")}
            className="inline-flex items-center gap-2.5 font-semibold text-fd-foreground tracking-tight no-underline"
          >
            {/* biome-ignore lint/performance/noImgElement: static export, small svg logo */}
            <img src="/cocurdex-mark.svg" alt="" width={24} height={21} />
            <span>{site.name}</span>
          </Link>
          <nav
            className="flex items-center gap-0.5"
            aria-label={dict.nav.primaryAria}
          >
            <Link href={to("/docs/")} className={navLink}>
              {dict.nav.docs}
            </Link>
            <LanguageSelect className="h-8 px-2 text-[0.875rem] text-fd-muted-foreground hover:text-fd-foreground">
              <GlobeIcon />
              <LanguageSelectText className="hidden sm:inline" />
            </LanguageSelect>
            <a href={site.github} className={navLink} aria-label="GitHub">
              <GithubIcon />
            </a>
            <ThemeSwitch className="ml-1 border-fd-border" />
            <Link
              href={to("/download/")}
              className="ml-2 inline-flex h-8 items-center rounded-md bg-fd-foreground px-3 font-medium text-[0.875rem] text-fd-background no-underline transition-opacity hover:opacity-85"
            >
              {dict.nav.download}
            </Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-fd-border border-t">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="grid content-start gap-3">
            <Link
              href={to("/")}
              className="inline-flex items-center gap-2 font-semibold text-fd-foreground no-underline"
            >
              {/* biome-ignore lint/performance/noImgElement: static export, small svg logo */}
              <img src="/cocurdex-mark.svg" alt="" width={21} height={18} />
              {site.name}
            </Link>
            <p className="m-0 max-w-xs text-fd-muted-foreground text-sm">
              {dict.footer.license}
            </p>
            <p className="m-0 flex flex-wrap gap-x-3 gap-y-1 text-sm">
              {locales.map((entry) =>
                entry === locale ? (
                  <span key={entry} className="text-fd-foreground">
                    {localeLabels[entry]}
                  </span>
                ) : (
                  <Link
                    key={entry}
                    href={alternateLocalePath(entry, path)}
                    hrefLang={htmlLangs[entry]}
                    className={footLink}
                  >
                    {localeLabels[entry]}
                  </Link>
                ),
              )}
            </p>
          </div>
          {footerColumns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="grid content-start gap-2.5 text-sm"
            >
              <p className="m-0 font-mono text-[0.75rem] text-fd-foreground uppercase tracking-[0.12em]">
                {column.title}
              </p>
              {column.links.map((link) => (
                <a key={link.label} href={link.href} className={footLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <div className="border-fd-border border-t">
          <p className="mx-auto m-0 w-full max-w-6xl px-4 py-5 font-mono text-[0.75rem] text-fd-muted-foreground sm:px-6">
            © {new Date().getFullYear()} softmeta LLC · {dict.footer.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
}
