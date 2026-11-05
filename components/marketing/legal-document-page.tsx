import Link from "next/link";
import { localizedPath, type SiteLocale } from "@/lib/locales";
import { getMarketingDict } from "@/lib/marketing";
import { site } from "@/lib/site";
import { LegalSections, TextPage } from "./legal-page";

export type LegalDocument = "privacy" | "terms";

const linkClass = "text-fd-primary no-underline hover:underline";

function BusinessInformation({ locale }: { locale: SiteLocale }) {
  const t = getMarketingDict(locale).legalEntity;
  const rows = [
    { label: t.legalNameLabel, value: t.legalName },
    { label: t.jurisdictionLabel, value: t.jurisdiction },
    { label: t.productLabel, value: t.product },
    {
      label: t.websiteLabel,
      value: (
        <a href={site.url} className={linkClass}>
          {site.url.replace("https://", "")}
        </a>
      ),
    },
    {
      label: t.emailLabel,
      value: (
        <a href={`mailto:${site.contactEmail}`} className={linkClass}>
          {site.contactEmail}
        </a>
      ),
    },
    ...(site.postalAddress
      ? [{ label: t.addressLabel, value: site.postalAddress }]
      : []),
    {
      label: t.supportLabel,
      value: (
        <Link href={localizedPath(locale, "/support/")} className={linkClass}>
          {t.supportLink}
        </Link>
      ),
    },
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-3 font-semibold text-xl tracking-tight">{t.heading}</h2>
      <dl className="m-0 grid grid-cols-1 gap-x-6 gap-y-2 text-fd-muted-foreground leading-relaxed sm:grid-cols-[max-content_1fr]">
        {rows.map((row) => (
          <div key={row.label} className="contents">
            <dt className="font-medium text-fd-foreground">{row.label}</dt>
            <dd className="m-0 mb-2 sm:mb-0">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function LegalDocumentPage({
  locale,
  document,
}: {
  locale: SiteLocale;
  document: LegalDocument;
}) {
  const t = getMarketingDict(locale)[document];

  return (
    <TextPage
      locale={locale}
      path={localizedPath(locale, `/${document}/`)}
      eyebrowText={`${t.updatedLabel} ${t.updated}`}
      heading={t.heading}
      intro={<p className="m-0">{t.intro}</p>}
    >
      <LegalSections sections={t.sections} />
      <section className="mt-10">
        <h2 className="mb-3 font-semibold text-xl tracking-tight">
          {t.contactHeading}
        </h2>
        <p className="m-0 text-fd-muted-foreground leading-relaxed">
          {t.contactBody}{" "}
          <a href={`mailto:${site.contactEmail}`} className={linkClass}>
            {site.contactEmail}
          </a>
        </p>
      </section>
      <BusinessInformation locale={locale} />
    </TextPage>
  );
}
