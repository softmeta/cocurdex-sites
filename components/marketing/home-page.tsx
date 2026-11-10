import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { localizedPath, type SiteLocale } from "@/lib/locales";
import { getMarketingDict } from "@/lib/marketing";
import { site } from "@/lib/site";
import { eyebrow, primaryButton, SiteShell, secondaryButton } from "./shell";

type SessionState = "wait" | "busy" | "done" | "idle";

const stateDot: Record<SessionState, string> = {
  wait: "bg-signal-wait",
  busy: "bg-signal-busy pulse-dot",
  done: "bg-fd-primary",
  idle: "border border-fd-muted-foreground/60",
};

function StateDot({ state }: { state: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-2 shrink-0 rounded-full ${stateDot[state as SessionState]}`}
    />
  );
}

function Section({
  index,
  label,
  heading,
  intro,
  children,
}: {
  index: string;
  label: string;
  heading: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="border-fd-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className={eyebrow}>
          {index} / {label}
        </p>
        <h2 className="mb-3 max-w-2xl text-balance font-semibold text-3xl tracking-tight">
          {heading}
        </h2>
        <p className="mb-10 max-w-2xl text-fd-muted-foreground text-lg leading-relaxed">
          {intro}
        </p>
        {children}
      </div>
    </section>
  );
}

const SHOT_WIDTH = 1423;
const SHOT_HEIGHT = 951;

function ProductShot({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="m-0 overflow-hidden rounded-xl border border-fd-border bg-fd-card text-left shadow-2xl shadow-black/10 dark:shadow-black/50">
      <Image
        src={src}
        alt={alt}
        width={SHOT_WIDTH}
        height={SHOT_HEIGHT}
        priority={priority}
        className="block h-auto w-full"
      />
      <figcaption className="border-fd-border border-t px-4 py-3 text-fd-muted-foreground text-sm leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="m-0 overflow-x-auto rounded-lg border border-fd-border bg-fd-muted/50 p-3.5 font-mono text-[0.75rem] text-fd-muted-foreground leading-relaxed">
      <code>{code}</code>
    </pre>
  );
}

const cliLines = [
  "cocurdex .",
  'cocurdex issue create --title "Fix login" --priority high',
  "cocurdex session list --json",
  "cocurdex team get --lead <session-id>",
  'cocurdex search "rate limit" --kind note',
  "cocurdex skills install --scope project",
];

export function HomePage({ locale }: { locale: SiteLocale }) {
  const t = getMarketingDict(locale);
  const to = (p: string) => localizedPath(locale, p);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows, macOS, Linux, iOS, Android, Web",
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
    <SiteShell locale={locale} path={to("/")}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div aria-hidden className="bg-grid -z-10 absolute inset-0" />
          <div className="mx-auto max-w-6xl px-4 pt-20 pb-20 sm:px-6 sm:pt-28">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href={to("/download/")}
                className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1.5 text-left font-mono text-[0.75rem] text-fd-muted-foreground leading-relaxed no-underline transition-colors hover:text-fd-foreground"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-fd-primary" />
                <span className="min-w-0 text-balance">{t.home.badge}</span>
              </Link>
              <h1 className="mb-6 font-semibold text-[2.5rem] leading-[1.08] tracking-[-0.03em] sm:text-6xl">
                <span className="block break-keep">{t.home.heading}</span>
                <span className="mt-3 block break-keep text-balance text-fd-muted-foreground">
                  {t.home.headingAccent}
                </span>
              </h1>
              <p className="mx-auto mb-9 max-w-2xl text-pretty text-fd-muted-foreground text-lg leading-relaxed">
                {t.home.lede}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href={to("/download/")} className={primaryButton}>
                  {t.home.downloadCta}
                </Link>
                <Link href={to("/docs/")} className={secondaryButton}>
                  {t.home.docsCta}
                </Link>
              </div>
              <p className="mt-6 font-mono text-[0.8125rem] text-fd-muted-foreground">
                <span className="text-fd-primary">$</span> cocurdex .
              </p>
            </div>
            <ul className="mx-auto mt-14 grid max-w-5xl list-none gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border p-0 text-left sm:grid-cols-2 lg:grid-cols-3">
              {t.home.pitch.map((item) => (
                <li key={item.title} className="bg-fd-card p-5">
                  <p className="m-0 mb-2 font-semibold tracking-tight">
                    {item.title}
                  </p>
                  <p className="m-0 text-fd-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-16 grid max-w-5xl gap-4 text-left">
              <p className="m-0 text-fd-muted-foreground text-sm leading-relaxed">
                {t.home.shots.note}
              </p>
              <ProductShot
                src="/media/work.webp"
                alt={t.home.shots.work.alt}
                caption={t.home.shots.work.caption}
                priority
              />
              <div className="grid gap-4 md:grid-cols-2">
                <ProductShot
                  src="/media/chat.webp"
                  alt={t.home.shots.chat.alt}
                  caption={t.home.shots.chat.caption}
                />
                <ProductShot
                  src="/media/assistants.webp"
                  alt={t.home.shots.assistants.alt}
                  caption={t.home.shots.assistants.caption}
                />
              </div>
            </div>
          </div>
        </section>

        <Section
          index="01"
          label="state"
          heading={t.home.statesHeading}
          intro={t.home.statesIntro}
        >
          <ul className="m-0 grid list-none gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border p-0 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.states.map((item) => (
              <li key={item.state} className="bg-fd-card p-6">
                <p className="m-0 mb-3 flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.12em]">
                  <StateDot state={item.state} />
                  {item.title}
                </p>
                <p className="m-0 text-[0.9375rem] text-fd-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          index="02"
          label="workspace"
          heading={t.home.featuresHeading}
          intro={t.home.featuresIntro}
        >
          <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
            {t.home.features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/40"
              >
                <p className="m-0 mb-4 font-mono text-[0.6875rem] text-fd-muted-foreground">
                  &lt;{feature.tag} /&gt;
                </p>
                <h3 className="mb-2 font-semibold text-lg tracking-tight">
                  {feature.title}
                </h3>
                <p className="m-0 text-fd-muted-foreground leading-relaxed">
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          index="03"
          label="agents"
          heading={t.home.agentsHeading}
          intro={t.home.agentsIntro}
        >
          <ul className="m-0 grid list-none grid-cols-2 gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border p-0 sm:grid-cols-3 lg:grid-cols-4">
            {t.home.agents.map((agent) => (
              <li key={agent.name} className="grid gap-3 bg-fd-card p-5">
                <span className="font-semibold tracking-tight">
                  {agent.name}
                </span>
                <code className="font-mono text-[0.75rem] text-fd-muted-foreground">
                  $ {agent.cmd}
                </code>
                <span className="flex flex-wrap gap-1.5">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-fd-border px-1.5 py-0.5 font-mono text-[0.625rem] text-fd-muted-foreground uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </li>
            ))}
            <li className="grid place-content-center bg-fd-card p-5">
              <Link
                href={to("/docs/agents/")}
                className="text-[0.875rem] text-fd-primary no-underline hover:underline"
              >
                {t.home.agentsMore}
              </Link>
            </li>
          </ul>
        </Section>

        <Section
          index="04"
          label="orchestration"
          heading={t.home.orchestrationHeading}
          intro={t.home.orchestrationIntro}
        >
          <ul className="m-0 grid list-none gap-4 p-0 lg:grid-cols-3">
            {t.home.orchestration.map((item) => (
              <li
                key={item.title}
                className="grid content-between gap-5 rounded-xl border border-fd-border bg-fd-card p-6"
              >
                <div>
                  <h3 className="mb-2 font-semibold text-lg tracking-tight">
                    <Link
                      href={to(item.href)}
                      className="text-fd-foreground no-underline hover:text-fd-primary"
                    >
                      {item.title} →
                    </Link>
                  </h3>
                  <p className="m-0 text-fd-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
                <CodeBlock code={item.code} />
              </li>
            ))}
          </ul>
        </Section>

        <Section
          index="05"
          label="cli"
          heading={t.home.cliHeading}
          intro={t.home.cliIntro}
        >
          <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card">
              <div className="flex h-9 items-center border-fd-border border-b bg-fd-muted/50 px-4 font-mono text-[0.6875rem] text-fd-muted-foreground">
                zsh — cocurdex
              </div>
              <pre className="m-0 overflow-x-auto p-5 font-mono text-[0.8125rem] leading-7">
                {cliLines.map((cmd) => (
                  <div key={cmd}>
                    <span className="text-fd-primary">$</span>{" "}
                    <span className="text-fd-foreground">{cmd}</span>
                  </div>
                ))}
              </pre>
            </div>
            <div className="grid gap-4">
              <Link
                href={to("/docs/cli/")}
                className="grid content-between gap-6 rounded-xl border border-fd-border bg-fd-card p-6 text-fd-foreground no-underline transition-colors hover:border-fd-primary/40"
              >
                <code className="font-mono text-2xl">--json</code>
                <span className="text-fd-primary">{t.home.cliMore}</span>
              </Link>
              <Link
                href={to("/docs/skills/")}
                className="grid gap-2 rounded-xl border border-fd-border bg-fd-card p-6 text-fd-foreground no-underline transition-colors hover:border-fd-primary/40"
              >
                <span className="font-semibold tracking-tight">
                  {t.home.skillsTitle} →
                </span>
                <span className="text-fd-muted-foreground text-sm leading-relaxed">
                  {t.home.skillsBody}
                </span>
              </Link>
            </div>
          </div>
        </Section>

        <section className="relative overflow-hidden border-fd-border border-t">
          <div
            aria-hidden
            className="bg-grid -z-10 absolute inset-0 rotate-180"
          />
          <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
            <h2 className="mb-4 text-balance font-semibold text-3xl tracking-tight sm:text-4xl">
              {t.home.ctaHeading}
            </h2>
            <p className="mb-8 text-fd-muted-foreground text-lg">
              {t.home.ctaBody}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={to("/download/")} className={primaryButton}>
                {t.home.downloadCta}
              </Link>
              <Link
                href={to("/docs/getting-started/")}
                className={secondaryButton}
              >
                {t.home.gettingStarted}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
