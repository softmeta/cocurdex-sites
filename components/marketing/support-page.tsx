import Link from "next/link";
import { localizedPath, type SiteLocale } from "@/lib/locales";
import { getMarketingDict } from "@/lib/marketing";
import { site } from "@/lib/site";
import { TextPage } from "./legal-page";

const channelHref = {
  email: `mailto:${site.contactEmail}`,
  issues: site.issues,
  discord: site.discord,
  security: site.securityAdvisory,
} as const;

export type SupportChannelId = keyof typeof channelHref;

export function SupportPage({ locale }: { locale: SiteLocale }) {
  const t = getMarketingDict(locale).support;
  const to = (p: string) => localizedPath(locale, p);

  return (
    <TextPage
      locale={locale}
      path={to("/support/")}
      eyebrowText={t.eyebrow}
      heading={t.heading}
      intro={<p className="m-0">{t.intro}</p>}
    >
      <ul className="m-0 mt-10 grid list-none gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border p-0 sm:grid-cols-2">
        {t.channels.map((channel) => (
          <li key={channel.id} className="bg-fd-card p-5">
            <p className="m-0 mb-1.5 font-semibold tracking-tight">
              {channel.title}
            </p>
            <p className="m-0 mb-3 text-fd-muted-foreground text-sm leading-relaxed">
              {channel.body}
            </p>
            <a
              href={channelHref[channel.id]}
              className="break-all text-fd-primary text-sm no-underline hover:underline"
            >
              {channel.id === "email" ? site.contactEmail : channel.linkLabel}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 mb-2 font-semibold text-2xl tracking-tight">
        {t.faqHeading}
      </h2>
      {t.faq.map((entry) => (
        <section key={entry.question} className="mt-6">
          <h3 className="m-0 mb-2 font-semibold text-lg tracking-tight">
            {entry.question}
          </h3>
          <p className="m-0 text-fd-muted-foreground leading-relaxed">
            {entry.answer}{" "}
            {entry.docPath ? (
              <Link
                href={to(entry.docPath)}
                className="text-fd-primary no-underline hover:underline"
              >
                {t.readMore} →
              </Link>
            ) : null}
          </p>
        </section>
      ))}

      <p className="mt-14 text-fd-muted-foreground text-sm">
        {t.privacyNote}{" "}
        <Link
          href={to("/privacy/")}
          className="text-fd-primary no-underline hover:underline"
        >
          {t.privacyLink}
        </Link>
      </p>
    </TextPage>
  );
}
