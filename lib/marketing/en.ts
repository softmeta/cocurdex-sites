import type { BuildId } from "../../lib/site";

export const dict = {
  meta: {
    description:
      "Early beta. Any model and any agent — ACP and native protocols — with memory on your computer. Chat, assistants, and work in one product, on Windows, macOS, Linux, iOS, Android, and Web.",
  },
  nav: {
    docs: "Docs",
    download: "Download",
    primaryAria: "Primary",
    footerAria: "Footer",
  },
  footer: {
    tagline: "Early beta.",
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
    badge: "Early beta · Windows · macOS · Linux · iOS · Android · Web",
    heading: "Any model. Any agent.",
    headingAccent: "Chat, assistants, and work — one product.",
    lede: "Cocurdex is in early beta. Bring the models and providers you already use — Cocurdex does not resell model access — and run any agent over ACP or a native protocol. Chat, Assistants, and work sessions are one product. Try it, and send feedback.",
    pitch: [
      {
        title: "Any model",
        body: "Use the models and providers you already have. Cocurdex does not resell model access.",
      },
      {
        title: "Any agent",
        body: "ACP and native protocols.",
      },
      {
        title: "Consistent memory",
        body: "Memories stay on your computer. Optional multi-device sync is via rsrs (rsrs.rs).",
      },
      {
        title: "Multi-device remote control",
        body: "Self-hosted private deployment, or the official relay.",
      },
      {
        title: "Every platform",
        body: "Windows, macOS, Linux, iOS, Android, and Web.",
      },
      {
        title: "One product",
        body: "Chat, Assistants, and work sessions live together.",
      },
    ],
    downloadCta: "Download",
    docsCta: "Read the docs",
    shots: {
      note: "Real desktop app, opened by the scenario harness. The threads are seeded demonstration data, not a live agent transcript.",
      work: {
        alt: "Cocurdex work session in the acme-shop fixture workspace. The seeded thread Add percentage discount codes shows an edit to src/discount.ts.",
        caption: "Work · acme-shop fixture · Add percentage discount codes",
      },
      chat: {
        alt: "Cocurdex Chat session Debounce vs throttle. The reply is fixture text, and the composer shows the fixture model name E2E Model.",
        caption: "Chat · fixture session · Debounce vs throttle",
      },
      assistants: {
        alt: "Cocurdex Assistants with the Coach persona from the personal-agents scenario. The greeting and reply come from a local stub model, not a live provider.",
        caption:
          "Assistants · personal-agents scenario · Coach, local stub model",
      },
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
        body: "Notes, issues, slide decks, and search live in app-owned storage on your machine. No account required. Open the same workspace in a browser on this computer, or pair another device — on your network, or through a relay when you are away. Optional long-term memory stays on this computer. When you turn on multi-device sync, it goes through rsrs (rsrs.rs).",
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
    ctaHeading: "Try the early beta.",
    ctaBody:
      "Windows, macOS, Linux, iOS, Android, and Web. Feedback is welcome.",
    gettingStarted: "Getting started",
  },
  download: {
    pageTitle: "Download",
    metaDescription:
      "Download the Cocurdex early beta for macOS, Windows, Linux, and Android.",
    eyebrow: "Early beta",
    heading: "Download Cocurdex",
    intro:
      "Early beta builds for macOS, Windows, Linux, and Android. APIs and behavior may change between versions.",
    desktopHeading: "Desktop",
    androidHeading: "Android",
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
      "android-arm64": {
        label: "Android (arm64-v8a)",
        note: "Most phones. Sideload the APK and allow unknown sources.",
      },
      "android-armv7": {
        label: "Android (armeabi-v7a)",
        note: "32-bit devices only.",
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
      "On macOS, open the DMG and drag Cocurdex to Applications. Every public macOS build is signed with Developer ID and notarized by Apple. Windows installers are unsigned. On Android, sideload the APK and allow installation from unknown sources. arm64-v8a is the usual choice.",
    androidNote:
      "Android buttons use the newest published GitHub Release that includes these APKs, including prereleases. Desktop buttons stay on the latest release. If an Android button opens the releases list, choose the newest release that contains the file.",
    devicesNote:
      "There is no iOS package on this page. Pair an iPhone or Android phone with Cocurdex on your computer.",
    devicesLink: "Devices and web",
    sourceHeading: "Run from source",
    sourceBody: "Node.js 24 and pnpm required.",
    readDocs: "Getting started guide",
  },
  legalEntity: {
    heading: "Business information",
    legalNameLabel: "Legal name",
    legalName: "softmeta LLC",
    jurisdictionLabel: "Organized in",
    jurisdiction: "Wyoming, United States",
    productLabel: "Product",
    product: "Cocurdex",
    websiteLabel: "Website",
    emailLabel: "Email",
    addressLabel: "Address",
    supportLabel: "Help and complaints",
    supportLink: "Support",
  },
  privacy: {
    pageTitle: "Privacy Policy",
    metaDescription:
      "How Cocurdex handles data in the desktop app, CLI, iOS and Android apps, the services they connect to, and on cocurdex.com.",
    updatedLabel: "Last updated",
    updated: "2026-11-05",
    heading: "Privacy Policy",
    intro:
      "Cocurdex runs on your own computer and is designed to keep your work data, such as projects, sessions, transcripts, notes, settings, and credentials, on your own devices. This policy explains what that means in practice, including the data that does leave your devices. It covers the Cocurdex desktop app, the cocurdex CLI, the Cocurdex apps for iOS and Android, the online services they connect to, and cocurdex.com. Cocurdex is published by softmeta LLC, a Wyoming limited liability company in the United States (“we”).",
    sections: [
      {
        heading: "The short version",
        body: [],
        items: [
          "The apps have no Cocurdex user accounts. You do not sign up or sign in to use them.",
          "We have not added analytics, advertising, or tracking SDKs to the apps, and the apps do not upload crash reports to us.",
          "A phone or browser you pair talks to your own computer. That connection is end-to-end encrypted, including when it passes through a relay.",
          "Prompts and files that agents work with go from your computer to the AI providers you choose, not to us.",
          "We do not sell personal information or share it for advertising.",
        ],
      },
      {
        heading: "Data stored on your devices",
        body: [
          "The desktop app and CLI store workspaces, sessions, agent transcripts, memories, notes, issues, decks, settings, provider credentials, and logs on your computer. The apps do not upload this data to us.",
          "The mobile app stores the computers you paired and the keys for those pairings on your phone, using the operating system’s secure storage. Sessions, transcripts, and other content it shows come from your computer.",
          "The desktop app records crashes locally to help you troubleshoot. Crash reports are not uploaded. If you choose to send logs to us, remove credentials and personal data first.",
        ],
      },
      {
        heading: "AI providers and agent tools you choose",
        body: [
          "When you run an agent, your computer sends your prompts, the files and context the agent reads, and tool results to the model provider or agent CLI you configured, such as Anthropic, OpenAI, or Google. That data goes from your computer to that provider under the provider’s own terms and privacy policy. It does not pass through us.",
        ],
      },
      {
        heading: "Other requests the apps make",
        body: [
          "Some features fetch public information from third-party services. These requests do not include your workspace content, but like any internet request they reveal your IP address and standard request details to the service:",
        ],
        items: [
          "Model and agent catalogs: the desktop app reads model details from models.dev and the agent list from the Agent Client Protocol registry (cdn.agentclientprotocol.com). The desktop and mobile apps load agent icons from that registry.",
          "Skills: searching for skills queries skills.sh, and installing a skill downloads it from GitHub.",
          "Agent installs: installing an agent from the registry downloads its package from the source the registry lists.",
          "Proxy check: if you run the network proxy check in Settings, the app sends one request to ipinfo.io to report your outbound address.",
        ],
      },
      {
        heading: "Optional memory sync",
        body: [
          "Memories the desktop app saves stay on your computer. Multi-device sync is off until you register or sign in to an account with rsrs (rsrs.rs), a separate service. rsrs states that records are encrypted on your device before they reach its servers, and that the keys stay on your device. rsrs handles that account and your synced records under its own terms and privacy policy.",
        ],
      },
      {
        heading: "Mobile app permissions",
        body: [
          "The iOS and Android app asks for a permission only when you use the feature that needs it:",
        ],
        items: [
          "Camera: to scan the pairing QR code shown on your computer. The app does not store or send the camera images.",
          "Photos: to attach a photo you pick to a message for an agent. The photo goes to your computer only.",
          "Local network (iOS): to reach the computers you paired on your network.",
          "Notifications: to alert you when an agent needs you or finishes. This is optional.",
        ],
      },
      {
        heading: "Push notifications",
        body: [
          "Phone notifications are off until you set a push gateway on your computer, for example with cocurdex host push set. The gateway can be one we operate or one you run yourself from the open-source cocurdex-push service.",
          "If you allow notifications, your phone obtains a push token from Apple or Google and gives it to your paired computer. Your computer sends the token to the gateway, which seals it into an encrypted handle and returns it for your computer to keep. The cocurdex-push gateway does not store tokens or handles.",
          "Each notification is encrypted on your computer with your phone’s key. The gateway, Apple Push Notification service, and Firebase Cloud Messaging see only the encrypted payload and the delivery details they need, such as the token, priority, and expiry. They cannot read what an agent did. The cocurdex-push gateway uses IP addresses and computer identifiers in memory to enforce rate limits and does not write them to its logs.",
          "To stop notifications, turn them off for Cocurdex in your phone’s settings, revoke the phone on your computer, or run cocurdex host push off.",
        ],
      },
      {
        heading: "Remote access and relays",
        body: [
          "Remote access is off by default. When you turn it on, paired devices connect to your computer over your local network or Tailscale. Tailscale is a separate service with its own privacy policy.",
          "You can also route remote access through a relay. Traffic between your devices and your computer is end-to-end encrypted, so a relay forwards it without being able to read or change its content.",
          "Our official relay is available by invitation only. To operate it and enforce limits, it processes the IP addresses of your computer and of the devices that connect through it, a route identifier, and the account identifier in your invite credential. It uses IP addresses in memory for rate limiting and does not write them to its logs. It keeps daily usage totals (traffic volume, number of connections, and last-seen time) per account for 90 days, and its logs record connection events with the account identifier. A relay you host yourself is run by you.",
        ],
      },
      {
        heading: "App updates",
        body: [
          "The desktop app checks updates.cocurdex.com for new versions and downloads releases from GitHub. These requests include your IP address and standard request details, such as the app version, platform, and update channel. We use them only to deliver updates.",
        ],
      },
      {
        heading: "This website",
        body: [
          "cocurdex.com is a static site hosted on Cloudflare Pages. We do not add analytics scripts or set cookies on it. Cloudflare processes your IP address and request details to deliver and protect the site, and may give us aggregated traffic statistics.",
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
          "We keep support email only as long as needed to help you. The official relay keeps usage totals for 90 days. Other technical logs from our services are kept only as long as needed to run and secure them.",
          "Depending on where you live, including the EEA, the UK, and California, you may have rights to access, correct, delete, or object to processing of your personal information. Email us to make a request. We will not discriminate against you for doing so. You may also complain to your local data protection authority.",
        ],
      },
      {
        heading: "Security",
        body: [
          "We use measures such as end-to-end encryption for remote connections and notifications, and secure storage for pairing keys. No system is perfectly secure, and we cannot guarantee that data will never be accessed without authorization.",
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
      "These terms apply when you use the Cocurdex desktop app, the cocurdex CLI, the Cocurdex apps for iOS and Android, the online services they connect to, and cocurdex.com. Cocurdex is published by softmeta LLC, a Wyoming limited liability company (“we”). By using Cocurdex, you agree to these terms. If you do not agree, do not use it.",
    sections: [
      {
        heading: "The short version",
        body: [],
        items: [
          "Cocurdex is pre-release software. Features may change or break.",
          "Your code, prompts, transcripts, notes, and other content stay yours. Cocurdex is designed to keep them on your devices.",
          "Agents you run act on your computer with the access you give them, including when you control them from a paired device. Review what they do and keep backups.",
          "The model providers and agent tools you connect are separate services with their own terms and fees.",
          "There is no charge today. If we ever charge for something, we will tell you the price before you pay.",
          "If you are a consumer, you keep the rights that the law where you live gives you.",
        ],
      },
      {
        heading: "Source code license",
        body: [
          "The Cocurdex source code is available under the Functional Source License, Version 1.1, ALv2 Future License (FSL-1.1-ALv2), published in the Cocurdex repository on GitHub. That license, not these terms, governs your rights to use, copy, modify, and redistribute the source code. Third-party components keep their own licenses.",
          "Subject to these terms, we also give you a personal, non-exclusive license to install and use the apps we distribute on devices you own or control. This license adds to, and does not limit, any rights you have under the source code license. These terms otherwise govern the apps we distribute and the online services we run.",
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
          "You keep all rights to the code, files, prompts, transcripts, notes, issues, decks, and other content you create or process with Cocurdex. We do not claim ownership of your content. The apps are designed to keep it on your devices and do not upload it to us, except as the Privacy Policy describes.",
          "Cocurdex starts AI agents that can read and change files, run commands, and use the network on your computer, within the permissions you set. You choose the agents, models, permissions, and workspaces you use. Agents can make mistakes, run the wrong command, or damage files, and output from an AI model can be wrong, insecure, or infringe someone else’s rights. Review what agents do, check their output before you rely on it, and keep backups of anything that matters.",
        ],
      },
      {
        heading: "Remote access and device authorization",
        body: [
          "Remote access lets a paired phone or browser view and control your computer. Pair only devices you own or are authorized to use, and use Cocurdex only to access computers that you own or are authorized to control.",
          "A paired device can, depending on the access you grant, start agents that run commands and change files on your computer, approve their requests, and read your files. Keep pairing codes, safety codes, invite credentials, and paired devices secure. You can limit what each device may do and revoke a device at any time under Paired devices, or with cocurdex host revoke.",
          "We protect remote connections with end-to-end encryption and device approval, but no security measure is perfect, and we cannot guarantee that unauthorized access will never happen. This does not limit any responsibility we have under applicable law for our own failures.",
        ],
      },
      {
        heading: "Third-party services",
        body: [
          "Cocurdex works with services we do not run, such as model providers (for example Anthropic, OpenAI, and Google), agent CLIs, GitHub, Tailscale, rsrs, Apple, and Google. Many of them need your own account, API key, or subscription and may charge you separately. They process the content you send them under their own terms and privacy policies, and you are responsible for your accounts, fees, and usage limits with them.",
          "We do not control third-party services and do not guarantee their availability, accuracy, or output. To the extent permitted by applicable law, we are not responsible for them, except where a loss is caused by our own breach of these terms or of applicable law.",
        ],
      },
      {
        heading: "Our online services",
        body: [
          "The apps use some services we run: update checks, the official relay, which is available by invitation and forwards end-to-end encrypted remote-access traffic, and, if you choose to use one we operate, a push gateway that delivers end-to-end encrypted notifications to your phone. We may set usage limits, and may change, suspend, or discontinue any of these services. Where we can, we will give reasonable notice before discontinuing a service. We may suspend or revoke access for anyone who breaks these terms or puts the services or other users at risk. Our Privacy Policy explains what these services process.",
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
          "Cocurdex and its services are free of charge today. If we introduce a paid plan or paid service, we will show the price, what it includes, and any additional terms, including billing, renewal, cancellation, and refunds, before you are charged. Nothing will be charged without your agreement. Changes to the price or terms of a paid service will be communicated before they apply to you, as the law where you live requires.",
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
          "To the maximum extent permitted by applicable law, Cocurdex and our services are provided “as is” and “as available”, without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. To the same extent, we do not warrant that Cocurdex will be error-free or uninterrupted, that it will not lose data, or that any agent or model output will be accurate or safe.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the maximum extent permitted by applicable law, softmeta LLC will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost data, code, profits, or revenue, arising from or related to Cocurdex or these terms, even if we were told they were possible. To the same extent, our total liability for all claims related to Cocurdex or these terms is limited to the greater of the amount you paid us for Cocurdex in the 12 months before the claim and US$100.",
          "These limits apply only as far as the law where you live allows, and may not apply to you. Nothing in these terms limits or excludes any liability or statutory consumer rights that cannot lawfully be limited or excluded, including liability for death or personal injury caused by negligence, or for fraud.",
        ],
      },
      {
        heading: "Consumers in the EEA, the UK, and elsewhere",
        body: [
          "If you use Cocurdex as a consumer, you keep every right and remedy that the mandatory consumer protection laws of your country give you. Nothing in these terms, including the disclaimer, the limitation of liability, and the choice of law and courts, takes those rights away.",
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
          "These terms are governed by the laws of the State of Wyoming and applicable United States federal law, without regard to conflict of laws rules. To the extent permitted by applicable law, disputes arising from or related to these terms or Cocurdex will be resolved in the state or federal courts located in Wyoming, and you and we consent to their jurisdiction.",
          "If you are a consumer, this choice of law does not deprive you of the protection of the mandatory laws of the country where you live, and you may bring a claim in the courts where you live if those laws allow it.",
        ],
      },
      {
        heading: "General",
        body: [
          "These terms, together with the Privacy Policy and the source code license, are the whole agreement between you and us about Cocurdex. If any part is found unenforceable, the rest stays in effect. If we do not enforce a term right away, we do not give up the right to enforce it later. You may not transfer your rights under these terms without our consent; we may transfer ours as part of a merger, acquisition, or sale of assets, provided this does not reduce your rights as a consumer.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "We may change these terms when we change Cocurdex or our services, for legal, regulatory, or security reasons, or to make them clearer. We will publish the new terms here and change the date above. If a change is material, we will say so on this site a reasonable time before it takes effect.",
          "Changes take effect on the date stated and do not apply to anything that happened before. If you do not agree to a change, stop using Cocurdex and uninstall it before the change takes effect; continuing to use it afterwards means you accept the updated terms. This does not affect any right you have under consumer protection law to end the agreement or to other remedies.",
        ],
      },
    ],
    contactHeading: "Contact",
    contactBody:
      "Questions or complaints about these terms or Cocurdex: softmeta LLC,",
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
