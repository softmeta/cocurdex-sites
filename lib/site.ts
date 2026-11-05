/** Public marketing/docs site constants (SSG). */
export const site = {
  name: "Cocurdex",
  url: "https://cocurdex.com",
  github: "https://github.com/softmeta/cocurdex",
  discord: "https://discord.gg/JuRyyv5bv",
  issues: "https://github.com/softmeta/cocurdex/issues",
  securityAdvisory:
    "https://github.com/softmeta/cocurdex/security/advisories/new",
  contactEmail: "optimus@softmeta.si",
  company: "softmeta LLC",
  // TODO(legal): set the verified geographic business address shown in
  // Google Play Console and the Google Payments profile. The EU e-Commerce
  // Directive (Art. 5) and UK E-Commerce Regulations 2002 (reg. 6) require it.
  postalAddress: null as string | null,
} as const;

const githubLatestDownload = (fileName: string) =>
  `https://github.com/softmeta/cocurdex/releases/latest/download/${fileName}`;

/** Download build ids and URLs; localized labels live in lib/marketing. */
export const desktopDownloads = [
  {
    id: "mac-arm64",
    href: githubLatestDownload("Cocurdex-mac-arm64.dmg"),
  },
  {
    id: "mac-x64",
    href: githubLatestDownload("Cocurdex-mac-x64.dmg"),
  },
  {
    id: "win-x64",
    href: githubLatestDownload("Cocurdex-win-x64.exe"),
  },
  {
    id: "linux-x64",
    href: githubLatestDownload("Cocurdex-linux-x64.AppImage"),
  },
  {
    id: "linux-x64-deb",
    href: githubLatestDownload("Cocurdex-linux-x64.deb"),
  },
] as const;

export type BuildId = (typeof desktopDownloads)[number]["id"];

export const githubLatestReleaseUrl =
  "https://github.com/softmeta/cocurdex/releases/latest";
