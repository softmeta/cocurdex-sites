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
        body: "Integrated PTY terminal, code editor, PDF reader, and browser preview sit beside chat — not behind it. Annotate a page in Design Mode and send it straight to the agent.",
        tag: "shell",
      },
      {
        title: "Keyboard-first",
        body: "Rebindable shortcuts for every primary action. ⌘P quick open, ⌘J chat dock, ⌘⇧D design mode.",
        tag: "keys",
      },
      {
        title: "Local-first data",
        body: "Notes, issues, and search live in app-owned storage on your machine. No account required.",
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
      "An optional cocurdex-* skill pack teaches agents the note → issue → ship loop, team leadership, and settings against the same data.",
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
};

export type MarketingDict = typeof dict;
