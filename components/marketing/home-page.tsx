import Link from "next/link";
import { localizedPath, type SiteLocale } from "@/lib/locales";
import { getMarketingDict } from "@/lib/marketing";
import { site } from "@/lib/site";
import { SiteShell } from "./shell";

const primaryButton =
  "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md bg-fd-foreground px-4 py-2 font-medium text-[0.9375rem] text-fd-background no-underline hover:opacity-90";
const secondaryButton =
  "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md border border-fd-border bg-fd-card px-4 py-2 font-medium text-[0.9375rem] text-fd-foreground no-underline hover:border-fd-foreground/30";

export function HomePage({ locale }: { locale: SiteLocale }) {
  const t = getMarketingDict(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Windows, Linux",
    description: t.meta.description,
    url: site.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
  };

  return (
    <SiteShell locale={locale} path={localizedPath(locale, "/")}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="-z-10 absolute inset-0 bg-[radial-gradient(45rem_22rem_at_50%_-6rem,var(--color-fd-accent),transparent)]"
          />
          <div className="mx-auto max-w-2xl px-4 pt-20 pb-14">
            <p className="mb-3 font-medium text-[0.8125rem] text-fd-primary uppercase tracking-[0.08em]">
              {t.home.eyebrow}
            </p>
            <h1 className="mb-4 font-semibold text-4xl leading-[1.15] tracking-tight sm:text-[2.5rem]">
              {t.home.heading}
            </h1>
            <p className="mb-7 max-w-xl text-fd-muted-foreground text-lg leading-relaxed">
              {t.home.lede}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={localizedPath(locale, "/download/")}
                className={primaryButton}
              >
                {t.home.downloadCta}
              </Link>
              <Link
                href={localizedPath(locale, "/docs/")}
                className={secondaryButton}
              >
                {t.home.docsCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-fd-border border-t py-10">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-2 font-semibold text-lg tracking-tight">
              {t.home.featuresHeading}
            </h2>
            <p className="mb-6 max-w-xl text-fd-muted-foreground">
              {t.home.featuresIntro}
            </p>
            <ul className="grid list-none gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border p-0 sm:grid-cols-2">
              {t.home.features.map((feature) => (
                <li key={feature.title} className="bg-fd-card p-5">
                  <h3 className="mb-1.5 font-semibold text-[0.975rem] tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="m-0 text-[0.9375rem] text-fd-muted-foreground leading-relaxed">
                    {feature.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-fd-border border-t py-10">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-2 font-semibold text-lg tracking-tight">
              {t.home.agentsHeading}
            </h2>
            <p className="mb-6 max-w-xl text-fd-muted-foreground">
              {t.home.agentsIntro}
            </p>
            <div className="overflow-x-auto rounded-xl border border-fd-border">
              <table className="w-full border-collapse bg-fd-card text-[0.9375rem]">
                <thead>
                  <tr>
                    {t.home.agentColumns.map((column) => (
                      <th
                        key={column}
                        className="whitespace-nowrap border-fd-border border-b px-4 py-2.5 text-start font-medium text-fd-muted-foreground"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.home.agentRows.map((agent) => (
                    <tr key={agent.name} className="last:[&>td]:border-b-0">
                      <td className="whitespace-nowrap border-fd-border border-b px-4 py-2.5 font-medium">
                        {agent.name}
                      </td>
                      <td className="whitespace-nowrap border-fd-border border-b px-4 py-2.5">
                        {agent.runtime}
                      </td>
                      <td className="whitespace-nowrap border-fd-border border-b px-4 py-2.5">
                        {agent.plan}
                      </td>
                      <td className="whitespace-nowrap border-fd-border border-b px-4 py-2.5">
                        {agent.steering}
                      </td>
                      <td className="whitespace-nowrap border-fd-border border-b px-4 py-2.5 text-fd-muted-foreground">
                        {agent.permissions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3.5 text-[0.9375rem]">
              <Link
                href={localizedPath(locale, "/docs/agents/")}
                className="text-fd-foreground"
              >
                {t.home.agentsMore}
              </Link>
            </p>
          </div>
        </section>

        <section className="border-fd-border border-t py-10">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-2 font-semibold text-lg tracking-tight">
              {t.home.capabilitiesHeading}
            </h2>
            <p className="mb-6 max-w-xl text-fd-muted-foreground">
              {t.home.capabilitiesIntro}
            </p>
            <ul className="grid list-none gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border p-0 md:grid-cols-3">
              {t.home.capabilities.map((capability) => (
                <li key={capability.title} className="bg-fd-card p-5">
                  <h3 className="mb-1.5 font-semibold text-[0.975rem] tracking-tight">
                    <Link
                      href={capability.href}
                      className="text-fd-foreground no-underline hover:underline"
                    >
                      {capability.title}
                    </Link>
                  </h3>
                  <p className="m-0 text-[0.9375rem] text-fd-muted-foreground leading-relaxed">
                    {capability.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-fd-border border-t py-10">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-2 font-semibold text-lg tracking-tight">
              {t.home.startHeading}
            </h2>
            <p className="mb-6 max-w-xl text-fd-muted-foreground">
              {t.home.startBody}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={localizedPath(locale, "/docs/getting-started/")}
                className={secondaryButton}
              >
                {t.home.gettingStarted}
              </Link>
              <Link
                href={localizedPath(locale, "/docs/desktop/")}
                className={secondaryButton}
              >
                {t.home.desktopOverview}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
