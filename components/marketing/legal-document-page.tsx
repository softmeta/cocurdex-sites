import { localizedPath, type SiteLocale } from "@/lib/locales";
import { getMarketingDict } from "@/lib/marketing";
import { site } from "@/lib/site";
import { LegalSections, TextPage } from "./legal-page";

export type LegalDocument = "privacy" | "terms";

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
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-fd-primary no-underline hover:underline"
          >
            {site.contactEmail}
          </a>
        </p>
      </section>
    </TextPage>
  );
}
