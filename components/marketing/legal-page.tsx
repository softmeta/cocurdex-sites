import type { ReactNode } from "react";
import type { SiteLocale } from "@/lib/locales";
import { SiteShell } from "./shell";

export interface LegalSection {
  heading: string;
  body: readonly string[];
  items?: readonly string[];
}

export function LegalSections({
  sections,
}: {
  sections: readonly LegalSection[];
}) {
  return sections.map((section) => (
    <section key={section.heading} className="mt-10">
      <h2 className="mb-3 font-semibold text-xl tracking-tight">
        {section.heading}
      </h2>
      {section.body.map((paragraph) => (
        <p
          key={paragraph}
          className="m-0 mb-3 text-fd-muted-foreground leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
      {section.items ? (
        <ul className="m-0 mb-3 grid list-disc gap-2 pl-5 text-fd-muted-foreground leading-relaxed marker:text-fd-primary">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  ));
}

/** Shared frame for long-form text pages such as privacy and support. */
export function TextPage({
  locale,
  path,
  eyebrowText,
  heading,
  intro,
  children,
}: {
  locale: SiteLocale;
  path: string;
  eyebrowText: string;
  heading: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <SiteShell locale={locale} path={path}>
      <main className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-4 pt-16 pb-24 sm:px-6">
          <p className="m-0 mb-3 font-mono text-[0.75rem] text-fd-primary uppercase tracking-[0.12em]">
            {eyebrowText}
          </p>
          <h1 className="m-0 mb-4 font-semibold text-4xl tracking-[-0.03em]">
            {heading}
          </h1>
          <div className="text-fd-muted-foreground text-lg leading-relaxed">
            {intro}
          </div>
          {children}
        </article>
      </main>
    </SiteShell>
  );
}
