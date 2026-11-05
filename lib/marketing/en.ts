import type { BuildId } from "../../lib/site";

export const dict = {
  meta: {
    description:
      "Multi-agent development workspace for professional developers. Chat, terminal, editor, and browser preview in one desktop shell.",
  },
  nav: {
    docs: "Docs",
    download: "Download",
    primaryAria: "Primary",
    footerAria: "Footer",
  },
  footer: {
    tagline: "Pre-release.",
    gettingStarted: "Getting started",
    license: "Source-available under FSL-1.1-ALv2.",
    product: "Product",
    resources: "Resources",
    community: "Community",
    cli: "CLI reference",
    agents: "Agents",
    releases: "Releases",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
  },
  home: {
    badge: "Pre-release · macOS · Windows · Linux",
    heading: "Run a fleet of coding agents.",
    headingAccent: "Keep every one of them legible.",
    lede: "Cocurdex is a desktop workspace for multi-agent development. Chat, terminal, editor, and browser preview share one shell — and every session tells you honestly whether it is working, waiting, or done.",
    downloadCta: "Download",
    docsCta: "Read the docs",
    mock: {
      title: "cocurdex — web-app",
      sessionsLabel: "Sessions",
      sessions: [
        {
          name: "auth-refactor",
          agent: "claude-agent",
          state: "wait",
          label: "Needs approval",
        },
        {
          name: "fix-flaky-e2e",
          agent: "codex",
          state: "busy",
          label: "Using tools",
        },
        {
          name: "pricing-page",
          agent: "acp:cursor",
          state: "busy",
          label: "Thinking",
        },
        {
          name: "api-review",
          agent: "acp:grok-build",
          state: "done",
          label: "Unread result",
        },
        { name: "release-notes", agent: "pi", state: "idle", label: "Ready" },
      ],
      chatTitle: "auth-refactor",
      userMsg:
        "Move session tokens to httpOnly cookies and update the middleware.",
      agentMsg: "Plan ready: 3 files, 1 migration. Edits need your approval.",
      permission: "Edit src/middleware.ts",
      allow: "Allow",
      deny: "Deny",
      terminalTitle: "Terminal",
    },
    statesHeading: "Honest state, across every session",
    statesIntro:
      "Cocurdex combines runtime and attention into one primary signal, so a glance at the sidebar tells you where you are needed.",
    states: [
      {
        state: "wait",
        title: "Needs you",
        body: "Permission, question, or plan review pending.",
      },
      {
        state: "busy",
        title: "Busy",
        body: "Thinking, using tools, connecting.",
      },
      {
        state: "done",
        title: "Result",
        body: "Finished with an unread result.",
      },
      {
        state: "idle",
        title: "Idle",
        body: "Settled and ready for the next prompt.",
      },
    ],
    featuresHeading: "A workspace, not a chat window",
    featuresIntro:
      "Built for developers who juggle agents across features, fixes, and design loops — for hours, across projects.",
    features: [
      {
        title: "Parallel sessions",
        body: "Run many agents side by side without merging transcripts. Each keeps its own status, permissions, and history.",
        tag: "sessions",
      },
      {
        title: "Every pane is a peer",
        body: "Integrated PTY terminal, code editor, PDF reader, slide decks, and browser preview sit beside chat — not behind it. Review Git diffs by turn, branch, or commit, and undo a turn; fork a session from any prompt; annotate a page in Design Mode and send it straight to the agent.",
        tag: "shell",
      },
      {
        title: "Keyboard-first",
        body: "Rebindable shortcuts for every primary action. ⌘P quick open, ⌘J chat dock, ⌘⇧D design mode.",
        tag: "keys",
      },
      {
        title: "Local-first data",
        body: "Notes, issues, slide decks, and search live in app-owned storage on your machine. No account required. Open the same workspace in a browser on this computer, or pair another device with the permissions you choose.",
        tag: "data",
      },
    ],
    agentsHeading: "Bring the agents you already use",
    agentsIntro:
      "Cocurdex drives the agent CLIs you have installed and authenticated, and installs more from the ACP Registry. It does not resell model access.",
    agents: [
      { name: "Claude Agent", cmd: "claude", tags: ["plan", "steer"] },
      { name: "Codex", cmd: "codex", tags: ["plan", "steer"] },
      { name: "OpenCode", cmd: "opencode", tags: ["plan"] },
      { name: "Pi", cmd: "built in", tags: ["steer", "MCP"] },
      { name: "Cursor", cmd: "cursor-agent acp", tags: ["ACP registry"] },
      { name: "Devin", cmd: "devin acp", tags: ["ACP registry"] },
      {
        name: "Grok Build",
        cmd: "grok agent stdio",
        tags: ["plan", "steer", "ACP registry"],
      },
    ],
    agentsMore: "More agents from the ACP Registry →",
    orchestrationHeading: "Orchestration, owned by the daemon",
    orchestrationIntro:
      "Past one session, agents need structure. Cocurdex gives them durable primitives that survive restarts and stay under your approval.",
    orchestration: [
      {
        title: "Agent teams",
        body: "A lead session spawns teammates that share a task list with prerequisites and review evidence. Save teams as templates.",
        href: "/docs/teams/",
        code: "cocurdex team spawn-template \\\n  --lead <session> --template reviewers",
      },
      {
        title: "Script runs",
        body: "An agent proposes a sandboxed script that fans work out to subagents. You approve it and cap the agent count.",
        href: "/docs/teams/#script-runs",
        code: 'const files = await agent(\n  "list modules", { schema })\nawait pipeline(files, (f) =>\n  agent("add tests for " + f))',
      },
      {
        title: "Managed worktrees",
        body: "Tick Worktree on a new session for an isolated checkout. Setup scripts run in the background; cleanup runs when the checkout is removed.",
        href: "/docs/cli/#worktrees",
        code: "cocurdex worktree create \\\n  --workspace . --branch feat/cookies",
      },
    ],
    cliHeading: "A real CLI for scripts and agents",
    cliIntro:
      "Everything app-owned goes through the daemon. Agents and scripts use cocurdex — with --json — instead of touching the database.",
    cliMore: "CLI reference →",
    skillsTitle: "Product skills",
    skillsBody:
      "An optional cocurdex-* skill pack teaches agents the note → issue → ship loop, team leadership, settings, and slide decks against the same data.",
    ctaHeading: "Stop tab-hopping between agents.",
    ctaBody:
      "Pre-release builds for macOS, Windows, and Linux. No account required.",
    gettingStarted: "Getting started",
  },
  download: {
    pageTitle: "Download",
    metaDescription:
      "Download Cocurdex for macOS, Windows, and Linux. Pre-release.",
    eyebrow: "Pre-release",
    heading: "Download Cocurdex",
    intro:
      "Pre-release builds for macOS, Windows, and Linux. APIs and behavior may change between versions.",
    recommended: "Recommended for this device",
    builds: {
      "mac-arm64": {
        label: "macOS Apple silicon",
        note: "Signed and notarized DMG.",
      },
      "mac-x64": {
        label: "macOS Intel",
        note: "Signed and notarized DMG.",
      },
      "win-x64": {
        label: "Windows x64",
        note: "Unsigned NSIS installer. SmartScreen may warn.",
      },
      "linux-x64": {
        label: "Linux x64 (AppImage)",
        note: "AppImage. Mark it executable, then run it.",
      },
      "linux-x64-deb": {
        label: "Linux x64 (.deb)",
        note: "Debian / Ubuntu package. Install with apt or dpkg.",
      },
    } satisfies Record<BuildId, { label: string; note: string }>,
    releaseNotes: "Release notes",
    afterHeading: "After you install",
    steps: [
      {
        title: "Install an agent CLI",
        body: "Authenticate at least one of claude, codex, or opencode, or add Cursor, Devin, Grok Build, and more from the ACP Registry in Settings → Agent CLIs.",
      },
      {
        title: "Add the CLI launcher",
        body: "Settings → General → Shell command puts cocurdex on your PATH.",
      },
      {
        title: "Open a project",
        body: "Run cocurdex . in any repository, then start a session.",
      },
    ],
    installNote:
      "On macOS, open the DMG and drag Cocurdex to Applications. Every public macOS build is signed with Developer ID and notarized by Apple. Windows installers are unsigned.",
    sourceHeading: "Run from source",
    sourceBody: "Node.js 24 and pnpm required.",
    readDocs: "Getting started guide",
  },
  privacy: {
    pageTitle: "Privacy Policy",
    metaDescription:
      "How Cocurdex handles data in the desktop app, CLI, iOS and Android apps, and on cocurdex.com.",
    updatedLabel: "Last updated",
    updated: "2026-11-02",
    heading: "Privacy Policy",
    intro:
      "Cocurdex runs on your own computer. Your projects, sessions, transcripts, notes, settings, and credentials stay on your devices. This policy covers the Cocurdex desktop app, the cocurdex CLI, the Cocurdex apps for iOS and Android, and cocurdex.com. Cocurdex is published by softmeta LLC, a company based in the United States (“we”).",
    sections: [
      {
        heading: "The short version",
        body: [],
        items: [
          "There are no Cocurdex accounts. You do not sign up or sign in to use the apps.",
          "The apps do not contain analytics, advertising, or tracking SDKs, and they do not upload crash reports.",
          "A phone or browser you pair talks to your own computer. That connection is end-to-end encrypted.",
          "We do not sell personal information or share it for advertising.",
        ],
      },
      {
        heading: "Data that stays on your devices",
        body: [
          "The desktop app and CLI store workspaces, sessions, agent transcripts, memories, notes, issues, decks, settings, provider credentials, and logs on your computer. We do not receive a copy.",
          "The mobile app stores the computers you paired and the keys for those pairings on your phone, using the operating system’s secure storage. Everything it shows comes from your computer.",
          "The desktop app records crashes locally to help you troubleshoot. These reports are not uploaded. If you choose to send logs to us, remove credentials and personal data first.",
        ],
      },
      {
        heading: "Optional memory sync",
        body: [
          "Memories the desktop app saves stay on your computer. Multi-device sync is off by default. If you turn it on, memories sync through an account you create with rsrs (rsrs.rs), a separate service. Records are encrypted before they reach the rsrs servers, and the keys stay on your device. rsrs handles that account under its own terms and privacy policy.",
        ],
      },
      {
        heading: "AI providers and agent tools you choose",
        body: [
          "When you run an agent, your computer sends your prompts, the files and context the agent reads, and tool results directly to the model provider or agent CLI you configured, such as Anthropic, OpenAI, or Google. That data goes from your computer to that provider under the provider’s own terms and privacy policy. It does not pass through us.",
        ],
      },
      {
        heading: "Mobile app permissions",
        body: [
          "The iOS and Android app asks for a permission only when you use the feature that needs it:",
        ],
        items: [
          "Camera: to scan the pairing QR code shown on your computer. Images are not stored or sent anywhere.",
          "Photos: to attach a photo you pick to a message for an agent. The photo goes to your computer only.",
          "Local network (iOS): to reach the computers you paired on your network.",
          "Notifications: to alert you when an agent needs you or finishes. This is optional.",
        ],
      },
      {
        heading: "Push notifications",
        body: [
          "If you allow notifications, your phone obtains a push token from Apple or Google and gives it to your paired computer. Your computer registers that token with a Cocurdex push gateway, which returns an encrypted handle for your computer to keep. The gateway does not keep a database of tokens.",
          "Each notification is encrypted on your computer with your phone’s key. Our push gateway, Apple Push Notification service, and Firebase Cloud Messaging see only the encrypted payload and the delivery details they need, such as the token and timing. They cannot read what an agent did.",
          "To stop notifications, turn them off for Cocurdex in your phone’s settings, revoke the phone on your computer, or run cocurdex host push off.",
        ],
      },
      {
        heading: "Remote access and relays",
        body: [
          "Remote access is off by default. When you turn it on, paired devices connect to your computer over your local network or Tailscale. Tailscale is a separate service with its own privacy policy.",
          "You can also route remote access through a relay. A relay forwards only encrypted traffic and cannot read or change it. Our official relay is available by invitation only. If you use it, it processes your computer’s IP address, a route identifier, the account identifier in your invite credential, and the amount of traffic, to operate the service and enforce limits. A relay you host yourself is run by you.",
        ],
      },
      {
        heading: "App updates",
        body: [
          "The desktop app checks updates.cocurdex.com for new versions and downloads releases from GitHub. These requests include your IP address and standard request details such as the app version, platform, and update channel. We use them only to deliver updates.",
        ],
      },
      {
        heading: "This website",
        body: [
          "cocurdex.com is a static site hosted on Cloudflare Pages. We use Cloudflare Web Analytics to count page views. It does not use cookies or track you across sites. Cloudflare processes your IP address to deliver and protect the site.",
          "The site remembers your theme choice in your browser’s local storage. Docs search runs on this site and is not sent to a third party. Downloads are served from GitHub.",
        ],
      },
      {
        heading: "When you contact us",
        body: [
          "If you email us, we receive your email address and what you write, and use them to reply. GitHub Issues and Discord are public or community spaces run under their own terms. Do not post credentials, private code, or personal data there.",
        ],
      },
      {
        heading: "Retention and your choices",
        body: [
          "Data on your devices is under your control. Delete a workspace or session in the app, revoke a paired device, or uninstall the app to remove its data. Uninstalling the mobile app removes its pairings from the phone; revoke the phone on your computer as well.",
          "We keep support email only as long as needed to help you. Push gateway and relay technical logs are kept only as long as needed to run and secure those services.",
          "Depending on where you live, including the EEA, the UK, and California, you may have rights to access, correct, delete, or object to processing of your personal information. Email us to make a request. We will not discriminate against you for doing so. You may also complain to your local data protection authority.",
        ],
      },
      {
        heading: "Children",
        body: [
          "Cocurdex is a developer tool and is not directed to children under 13, or under 16 in the EEA and UK. We do not knowingly collect their personal information.",
        ],
      },
      {
        heading: "International transfers",
        body: [
          "We are based in the United States. Where our services process personal information, it may be processed in the United States and in other countries where our service providers operate.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "If this policy changes, we will update it here and change the date above. If a change materially affects how we handle your data, we will say so on this site before it takes effect.",
        ],
      },
    ],
    contactHeading: "Contact",
    contactBody: "Questions or requests about privacy: softmeta LLC,",
  },
  terms: {
    pageTitle: "Terms of Service",
    metaDescription:
      "Terms for using the Cocurdex desktop app, CLI, iOS and Android apps, their online services, and cocurdex.com.",
    updatedLabel: "Last updated",
    updated: "2026-11-05",
    heading: "Terms of Service",
    intro:
      "These terms apply when you use the Cocurdex desktop app, the cocurdex CLI, the Cocurdex apps for iOS and Android, the online services they connect to (updates, the push gateway, and the official relay), and cocurdex.com. Cocurdex is published by softmeta LLC, a Wyoming limited liability company (“we”). By using Cocurdex, you agree to these terms. If you do not agree, do not use it.",
    sections: [
      {
        heading: "The short version",
        body: [],
        items: [
          "Cocurdex is pre-release software, provided as is. Features may change or break.",
          "Your code, prompts, transcripts, notes, and other content stay yours and stay on your devices.",
          "Agents you run act on your computer with the access you give them. Review what they do and keep backups.",
          "The model providers and agent tools you connect are separate services with their own terms.",
          "There is no charge today. If we ever charge for something, we will tell you the price before you pay.",
        ],
      },
      {
        heading: "Source code license",
        body: [
          "The Cocurdex source code is available under the Functional Source License, Version 1.1, ALv2 Future License (FSL-1.1-ALv2), published in the Cocurdex repository on GitHub. That license governs copying, modifying, and redistributing the code. These terms govern your use of the apps we distribute and the services we run. If these terms and the license conflict for the code itself, the license controls.",
          "Subject to these terms, we give you a personal, non-exclusive, non-transferable, revocable license to install and use the apps we distribute on devices you own or control.",
        ],
      },
      {
        heading: "Pre-release software",
        body: [
          "Cocurdex is under active development. We may add, change, or remove features, and an update may change how something works. Some builds are labeled beta. We do not promise that any feature, platform, or service will remain available.",
        ],
      },
      {
        heading: "Your content and your responsibility",
        body: [
          "You keep all rights to the code, files, prompts, transcripts, notes, issues, decks, and other content you create or process with Cocurdex. We do not receive a copy, and we claim no rights in it.",
          "Cocurdex starts AI agents that can read and change files, run commands, and use the network on your computer, within the permissions you set. You are responsible for choosing the agents, models, permissions, and workspaces you use, for reviewing what agents do, and for keeping backups of anything that matters. Output from an AI model can be wrong, insecure, or infringe someone else’s rights; check it before you rely on it.",
          "You are responsible for keeping your devices, pairing codes, invite credentials, and provider credentials secure. Anyone you pair a device with, or give edit access to, can act on your computer within that access.",
        ],
      },
      {
        heading: "Third-party services",
        body: [
          "Cocurdex works with services we do not run, such as model providers (for example Anthropic, OpenAI, and Google), agent CLIs, GitHub, Tailscale, rsrs, Apple, and Google. Your use of them is governed by their own terms and privacy policies, and you are responsible for any accounts, fees, and usage limits with them. We are not responsible for their availability, output, or conduct.",
        ],
      },
      {
        heading: "Our online services",
        body: [
          "The apps use a few services we run: update checks, a push gateway that delivers end-to-end encrypted notifications to your phone, and an official relay, available by invitation, that forwards encrypted remote-access traffic. We may set usage limits, and may change, suspend, or discontinue any of these services. We may suspend or revoke access for anyone who breaks these terms or puts the services or other users at risk. Our Privacy Policy explains what these services process.",
        ],
      },
      {
        heading: "Acceptable use",
        body: ["You may not use Cocurdex or our services to:"],
        items: [
          "break the law or infringe anyone else’s rights;",
          "access computers, accounts, or data without permission;",
          "probe, overload, or disrupt our services, or get around their limits or access controls;",
          "send spam, malware, or harmful content through our services;",
          "share, sell, or resell an invite credential or access to our relay without our permission.",
        ],
      },
      {
        heading: "Fees",
        body: [
          "Cocurdex and its services are free of charge today. If we introduce a paid plan or paid service, we will show the price and any additional terms before you are charged, and nothing will be charged without your agreement.",
        ],
      },
      {
        heading: "Trademarks and feedback",
        body: [
          "Cocurdex, its logos, and its icons are trademarks of softmeta LLC. The Trademark Policy in the Cocurdex repository explains how you may refer to them. These terms do not give you any right to use them otherwise.",
          "If you send us feedback or suggestions, we may use them without any obligation to you. Code contributions are covered by the contribution terms in the repository.",
        ],
      },
      {
        heading: "Apps from the App Store and Google Play",
        body: [
          "If you got the mobile app from the Apple App Store or Google Play, these terms are between you and softmeta LLC, not Apple or Google. We, not Apple or Google, are responsible for the app and its support. Your use must also follow the store’s usage rules.",
          "For the iOS app: Apple has no obligation to provide maintenance or support. If the app fails to conform to an applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any; to the extent permitted by law, Apple has no other warranty obligation. Apple is not responsible for addressing claims relating to the app, including product liability claims, claims that the app fails to meet legal or regulatory requirements, consumer protection claims, or claims that the app infringes third-party intellectual property. Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.",
        ],
      },
      {
        heading: "Disclaimer",
        body: [
          "To the extent permitted by law, Cocurdex and our services are provided “as is” and “as available”, without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that Cocurdex will be error-free or uninterrupted, that it will not lose data, or that any agent or model output will be accurate or safe.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the extent permitted by law, softmeta LLC will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost data, code, profits, or revenue, arising from or related to Cocurdex or these terms, even if we were told they were possible. Our total liability for all claims related to Cocurdex or these terms is limited to the greater of the amount you paid us for Cocurdex in the 12 months before the claim and US$100.",
          "Some places do not allow these exclusions or limits. Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot be limited by law.",
        ],
      },
      {
        heading: "Consumers in the EEA, the UK, and elsewhere",
        body: [
          "If you use Cocurdex as a consumer, you keep every right that the mandatory consumer protection laws of your country give you. Nothing in these terms, including the disclaimer, the limitation of liability, and the choice of law and courts, takes those rights away.",
        ],
      },
      {
        heading: "Ending use",
        body: [
          "You can stop using Cocurdex at any time by uninstalling it and revoking your paired devices. We may end your access to our services if you break these terms. The sections on your content, trademarks and feedback, the disclaimer, limitation of liability, and governing law continue to apply after you stop.",
        ],
      },
      {
        heading: "Export and sanctions",
        body: [
          "You may not use Cocurdex or our services in violation of United States export control or sanctions laws, or if you are a person those laws prohibit from receiving them.",
        ],
      },
      {
        heading: "Governing law and disputes",
        body: [
          "These terms are governed by the laws of the State of Wyoming and applicable United States federal law, without regard to conflict of laws rules. Any dispute arising from or related to these terms or Cocurdex will be resolved exclusively in the state or federal courts located in Wyoming, and you and we consent to their jurisdiction. If you are a consumer in the EEA, the UK, or another country whose laws give you the right, you may also bring a claim in the courts where you live.",
        ],
      },
      {
        heading: "General",
        body: [
          "These terms, together with the Privacy Policy and the source code license, are the whole agreement between you and us about Cocurdex. If any part is found unenforceable, the rest stays in effect. If we do not enforce a term right away, we do not give up the right to enforce it later. You may not transfer your rights under these terms without our consent; we may transfer ours as part of a merger, acquisition, or sale of assets.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "If these terms change, we will update them here and change the date above. If a change is material, we will say so on this site before it takes effect. Continuing to use Cocurdex after a change takes effect means you accept the updated terms.",
        ],
      },
    ],
    contactHeading: "Contact",
    contactBody: "Questions about these terms: softmeta LLC,",
  },
  support: {
    pageTitle: "Support",
    metaDescription:
      "Get help with Cocurdex on desktop, CLI, iOS, and Android.",
    eyebrow: "Support",
    heading: "Get help with Cocurdex",
    intro:
      "Cocurdex is pre-release and has no support SLA. These channels reach the people who build it.",
    channels: [
      {
        id: "email" as const,
        title: "Email",
        body: "Questions about the desktop, iOS, or Android app, privacy requests, and anything you would rather not post in public.",
        linkLabel: "Email",
      },
      {
        id: "issues" as const,
        title: "Bug reports and feature requests",
        body: "Include the Cocurdex version, operating system, agent, and steps to reproduce. Do not attach credentials, private code, or transcripts.",
        linkLabel: "GitHub Issues",
      },
      {
        id: "discord" as const,
        title: "Community",
        body: "Usage questions, quick feedback, and discussion.",
        linkLabel: "Join Discord",
      },
      {
        id: "security" as const,
        title: "Security vulnerabilities",
        body: "Report privately through a GitHub Security Advisory. Do not open a public issue.",
        linkLabel: "Report a vulnerability",
      },
    ],
    faqHeading: "Common questions",
    faq: [
      {
        question: "How do I connect the phone app to my computer?",
        answer:
          "On the computer, open Settings → Devices → Pair a device and choose Create pairing code. In the iOS or Android app, choose Pair a Computer, then Scan to Pair or Paste Pairing Link.",
        docPath: "/docs/devices-and-web/",
      },
      {
        question: "The app says it can’t reach my computer.",
        answer:
          "Check that the computer is awake, the Cocurdex desktop app is running, remote access is on, and both devices are on the same network or Tailscale tailnet.",
        docPath: "/docs/devices-and-web/",
      },
      {
        question: "How do I remove a phone or delete my data?",
        answer:
          "There is no Cocurdex account to delete. Revoke the phone under Paired devices on your computer, then uninstall the app. Your sessions and settings live on your computer, and you can delete them there.",
        docPath: "/docs/concepts/workspaces-and-data/",
      },
    ],
    readMore: "Docs",
    privacyNote: "How we handle data:",
    privacyLink: "Privacy Policy",
  },
};

export type MarketingDict = typeof dict;
