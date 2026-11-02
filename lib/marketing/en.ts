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
