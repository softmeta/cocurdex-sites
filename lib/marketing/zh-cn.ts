import type { MarketingDict } from "./en";

export const dict: MarketingDict = {
  meta: {
    description:
      "面向专业开发者的多 Agent 开发工作台。对话、终端、编辑器和浏览器预览共处于一个桌面工作台中。",
  },
  nav: {
    docs: "文档",
    download: "下载",
    primaryAria: "主导航",
    footerAria: "页脚",
  },
  footer: {
    tagline: "预发布。",
    gettingStarted: "快速上手",
    license: "以 FSL-1.1-ALv2 协议源码可用。",
    product: "产品",
    resources: "资源",
    community: "社区",
    cli: "CLI 参考",
    agents: "Agent",
    releases: "版本发布",
  },
  home: {
    badge: "预发布 · macOS · Windows · Linux",
    heading: "同时驾驭一队编程 Agent，",
    headingAccent: "每一个都清清楚楚。",
    lede: "Cocurdex 是面向多 Agent 开发的桌面工作台。对话、终端、编辑器和浏览器预览共处一个外壳——每个会话都如实告诉你：在干活、在等你，还是已完成。",
    downloadCta: "下载",
    docsCta: "阅读文档",
    mock: {
      title: "cocurdex — web-app",
      sessionsLabel: "会话",
      sessions: [
        {
          name: "auth-refactor",
          agent: "claude-agent",
          state: "wait",
          label: "等待批准",
        },
        {
          name: "fix-flaky-e2e",
          agent: "codex",
          state: "busy",
          label: "正在使用工具",
        },
        {
          name: "pricing-page",
          agent: "acp:cursor",
          state: "busy",
          label: "思考中",
        },
        {
          name: "api-review",
          agent: "acp:grok-build",
          state: "done",
          label: "有未读结果",
        },
        { name: "release-notes", agent: "pi", state: "idle", label: "就绪" },
      ],
      chatTitle: "auth-refactor",
      userMsg: "把会话 token 挪到 httpOnly cookie，并更新中间件。",
      agentMsg: "计划已就绪：3 个文件、1 个迁移。编辑需要你的批准。",
      permission: "编辑 src/middleware.ts",
      allow: "允许",
      deny: "拒绝",
      terminalTitle: "终端",
    },
    statesHeading: "所有会话，状态如实",
    statesIntro:
      "Cocurdex 把运行状态与关注状态合成一个主信号——扫一眼侧边栏，就知道哪里需要你。",
    states: [
      {
        state: "wait",
        title: "需要你",
        body: "有待处理的权限、提问或计划审阅。",
      },
      { state: "busy", title: "忙碌", body: "思考中、使用工具中、连接中。" },
      { state: "done", title: "有结果", body: "已完成，结果尚未查看。" },
      { state: "idle", title: "空闲", body: "已处理完毕，可接收下一条指令。" },
    ],
    featuresHeading: "是工作台，不是聊天窗口",
    featuresIntro:
      "为在功能开发、缺陷修复和设计迭代之间同时驾驭多个 Agent 的开发者打造——一坐几小时、横跨多个项目。",
    features: [
      {
        title: "并行会话",
        body: "多个 Agent 并排运行，对话记录互不混杂。每个会话都有独立的状态、权限和历史。",
        tag: "sessions",
      },
      {
        title: "每个面板都是一等公民",
        body: "集成 PTY 终端、代码编辑器、PDF 阅读器和浏览器预览，与对话并列——而不是藏在它后面。在设计模式里标注页面，一键发给 Agent。",
        tag: "shell",
      },
      {
        title: "键盘优先",
        body: "所有主要操作都有可重绑的快捷键。⌘P 快速打开、⌘J 对话栏、⌘⇧D 设计模式。",
        tag: "keys",
      },
      {
        title: "本地优先的数据",
        body: "笔记、Issue 与搜索索引保存在本机的应用私有存储中，无需注册账号。",
        tag: "data",
      },
    ],
    agentsHeading: "用你已有的 Agent",
    agentsIntro:
      "Cocurdex 驱动你本机已安装并登录的 Agent CLI，也能从 ACP Registry 安装更多 Agent。不转售模型额度。",
    agents: [
      { name: "Claude Agent", cmd: "claude", tags: ["plan", "steer"] },
      { name: "Codex", cmd: "codex", tags: ["plan", "steer"] },
      { name: "OpenCode", cmd: "opencode", tags: ["plan"] },
      { name: "Pi", cmd: "内置", tags: ["steer", "MCP"] },
      { name: "Cursor", cmd: "cursor-agent acp", tags: ["ACP registry"] },
      { name: "Devin", cmd: "devin acp", tags: ["ACP registry"] },
      {
        name: "Grok Build",
        cmd: "grok agent stdio",
        tags: ["plan", "steer", "ACP registry"],
      },
    ],
    agentsMore: "从 ACP Registry 添加更多 Agent →",
    orchestrationHeading: "编排能力，由 daemon 托管",
    orchestrationIntro:
      "超过一个会话，Agent 就需要结构。Cocurdex 提供可持久化的编排原语——重启不丢，始终在你的批准之下。",
    orchestration: [
      {
        title: "Agent 团队",
        body: "主会话派生队友，共享带前置依赖和审阅证据的任务清单。常用阵容可存为团队模板。",
        href: "/docs/teams/",
        code: "cocurdex team spawn-template \\\n  --lead <session> --template reviewers",
      },
      {
        title: "脚本编排",
        body: "Agent 提出一段沙箱脚本，把工作分发给子 Agent。你批准后运行，并限定 Agent 数量上限。",
        href: "/docs/teams/#script-runs",
        code: 'const files = await agent(\n  "list modules", { schema })\nawait pipeline(files, (f) =>\n  agent("add tests for " + f))',
      },
      {
        title: "托管工作树",
        body: "新建会话时勾选 Worktree 即得独立检出。setup 脚本在后台运行，移除检出时执行 cleanup。",
        href: "/docs/cli/#worktrees",
        code: "cocurdex worktree create \\\n  --workspace . --branch feat/cookies",
      },
    ],
    cliHeading: "真正可脚本化的 CLI",
    cliIntro:
      "所有应用数据都经由 daemon。Agent 和脚本使用 cocurdex 命令（支持 --json），而不是直接操作数据库。",
    cliMore: "CLI 参考 →",
    skillsTitle: "产品 Skills",
    skillsBody:
      "可选的 cocurdex-* skill 包，教会 Agent 在同一套数据上执行 笔记 → Issue → 交付 的循环，以及带团队、改设置。",
    ctaHeading: "别再在 Agent 之间来回切标签页。",
    ctaBody: "macOS、Windows 与 Linux 预发布构建。无需账号。",
    gettingStarted: "快速上手",
  },
  download: {
    pageTitle: "下载",
    metaDescription: "下载 macOS、Windows 和 Linux 版 Cocurdex。预发布。",
    eyebrow: "预发布",
    heading: "下载 Cocurdex",
    intro:
      "macOS、Windows 和 Linux 的预发布构建。各版本之间的 API 与行为可能发生变化。",
    recommended: "推荐用于当前设备",
    builds: {
      "mac-arm64": {
        label: "macOS Apple silicon",
        note: "已签名并公证的 DMG。",
      },
      "mac-x64": {
        label: "macOS Intel",
        note: "已签名并公证的 DMG。",
      },
      "win-x64": {
        label: "Windows x64",
        note: "未签名的 NSIS 安装包，SmartScreen 可能提示警告。",
      },
      "linux-x64": {
        label: "Linux x64（AppImage）",
        note: "AppImage。赋予可执行权限后运行。",
      },
      "linux-x64-deb": {
        label: "Linux x64（.deb）",
        note: "Debian / Ubuntu 安装包，用 apt 或 dpkg 安装。",
      },
    },
    releaseNotes: "发布说明",
    afterHeading: "安装之后",
    steps: [
      {
        title: "安装 Agent CLI",
        body: "至少登录 claude、codex、opencode 中的一个，或在 设置 → Agent CLI 中从 ACP Registry 添加 Cursor、Devin、Grok Build 等。",
      },
      {
        title: "安装 CLI 启动器",
        body: "设置 → 常规 → Shell 命令，把 cocurdex 加入 PATH。",
      },
      {
        title: "打开项目",
        body: "在任意仓库里运行 cocurdex .，然后新建会话。",
      },
    ],
    installNote:
      "在 macOS 上，打开 DMG 并将 Cocurdex 拖入「应用程序」。每个公开的 macOS 构建都经过 Developer ID 签名并由 Apple 公证。Windows 安装包未签名。",
    sourceHeading: "从源码运行",
    sourceBody: "需要 Node.js 24 和 pnpm。",
    readDocs: "快速上手指南",
  },
};
