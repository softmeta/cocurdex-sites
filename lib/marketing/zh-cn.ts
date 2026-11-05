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
    support: "支持",
    privacy: "隐私政策",
    terms: "服务条款",
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
        body: "集成 PTY 终端、代码编辑器、PDF 阅读器、演示文稿和浏览器预览与对话并列，而不是藏在后面。Git 面板可按回合、分支或提交查看差异，也能撤销某个回合；可以从任意提示分叉会话；还可以在设计模式里标注页面并直接发给 Agent。",
        tag: "shell",
      },
      {
        title: "键盘优先",
        body: "所有主要操作都有可重绑的快捷键。⌘P 快速打开、⌘J 对话栏、⌘⇧D 设计模式。",
        tag: "keys",
      },
      {
        title: "本地优先的数据",
        body: "笔记、Issue、演示文稿与搜索索引保存在本机的应用私有存储中，无需注册账号。可在本机浏览器打开同一工作区，或按你选择的权限配对另一台设备。",
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
        href: "/docs/teams/#脚本编排",
        code: 'const files = await agent(\n  "list modules", { schema })\nawait pipeline(files, (f) =>\n  agent("add tests for " + f))',
      },
      {
        title: "托管工作树",
        body: "新建会话时勾选 Worktree 即得独立检出。setup 脚本在后台运行，移除检出时执行 cleanup。",
        href: "/docs/cli/#工作树",
        code: "cocurdex worktree create \\\n  --workspace . --branch feat/cookies",
      },
    ],
    cliHeading: "真正可脚本化的 CLI",
    cliIntro:
      "所有应用数据都经由 daemon。Agent 和脚本使用 cocurdex 命令（支持 --json），而不是直接操作数据库。",
    cliMore: "CLI 参考 →",
    skillsTitle: "产品 Skills",
    skillsBody:
      "可选的 cocurdex-* skill 包，教会 Agent 在同一套数据上执行 笔记 → Issue → 交付 的循环，以及带团队、改设置、做演示文稿。",
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
  privacy: {
    pageTitle: "隐私政策",
    metaDescription:
      "Cocurdex 桌面端、CLI、iOS 和 Android App 以及 cocurdex.com 如何处理数据。",
    updatedLabel: "最后更新",
    updated: "2026-11-02",
    heading: "隐私政策",
    intro:
      "Cocurdex 运行在你自己的电脑上。你的项目、会话、对话记录、笔记、设置和凭据都留在你自己的设备上。本政策适用于 Cocurdex 桌面端、cocurdex CLI、Cocurdex iOS 和 Android App，以及 cocurdex.com。Cocurdex 由美国公司 softmeta LLC（下称「我们」）发布。",
    sections: [
      {
        heading: "简要说明",
        body: [],
        items: [
          "Cocurdex 没有账号体系，使用 App 不需要注册或登录。",
          "App 里没有统计、广告或追踪 SDK，也不上传崩溃报告。",
          "配对的手机或浏览器直接连接你自己的电脑，连接是端到端加密的。",
          "我们不出售个人信息，也不会为了广告而共享个人信息。",
        ],
      },
      {
        heading: "保存在你设备上的数据",
        body: [
          "桌面端和 CLI 把工作区、会话、Agent 对话记录、记忆、笔记、Issue、Deck、设置、提供商凭据和日志保存在你的电脑上，我们不会收到副本。",
          "手机 App 把已配对的电脑和配对密钥保存在手机上，使用系统提供的安全存储。App 里显示的所有内容都来自你的电脑。",
          "桌面端会在本机记录崩溃信息，方便你排查问题。这些报告不会上传。如果你主动把日志发给我们，请先删掉凭据和个人数据。",
        ],
      },
      {
        heading: "可选的记忆同步",
        body: [
          "桌面端保存的记忆留在你的电脑上。多设备同步默认关闭。打开后，记忆会通过你在 rsrs（rsrs.rs）创建的账号同步，rsrs 是独立的第三方服务。记录在到达 rsrs 服务器前已经加密，密钥留在你的设备上。该账号适用 rsrs 自己的条款和隐私政策。",
        ],
      },
      {
        heading: "你选择的 AI 提供商和 Agent 工具",
        body: [
          "运行 Agent 时，你的电脑会把提示词、Agent 读取的文件和上下文以及工具结果，直接发给你配置的模型提供商或 Agent CLI，例如 Anthropic、OpenAI 或 Google。这些数据从你的电脑直接发往该提供商，适用该提供商自己的条款和隐私政策，不经过我们。",
        ],
      },
      {
        heading: "手机 App 的权限",
        body: ["iOS 和 Android App 只在你用到相关功能时才申请对应权限："],
        items: [
          "相机：扫描电脑上显示的配对二维码。画面不会被保存或发送。",
          "相册：把你选中的照片附到发给 Agent 的消息里。照片只发到你的电脑。",
          "本地网络（iOS）：连接你在局域网里配对的电脑。",
          "通知：在 Agent 需要你处理或任务完成时提醒你。可选。",
        ],
      },
      {
        heading: "推送通知",
        body: [
          "如果你允许通知，手机会从 Apple 或 Google 获取一个推送 token 并交给已配对的电脑。电脑把这个 token 注册到 Cocurdex 推送网关，网关返回一个加密的 handle，由你的电脑保存。网关不保存 token 数据库。",
          "每条通知都在你的电脑上用手机的密钥加密。我们的推送网关、Apple 推送通知服务（APNs）和 Firebase 云消息（FCM）只能看到加密内容，以及投递所需的信息，比如 token 和时间，看不到 Agent 做了什么。",
          "要停止通知，可以在手机设置里关闭 Cocurdex 的通知、在电脑上撤销这台手机，或者运行 cocurdex host push off。",
        ],
      },
      {
        heading: "远程访问和 Relay",
        body: [
          "远程访问默认关闭。打开后，配对设备通过局域网或 Tailscale 连接你的电脑。Tailscale 是独立的服务，有自己的隐私政策。",
          "你也可以让远程访问经过 Relay 转发。Relay 只转发加密流量，无法读取或篡改。官方 Relay 目前仅限邀请使用。如果你使用官方 Relay，它会处理你电脑的 IP 地址、路由标识、邀请凭证里的账号标识和流量大小，用于运行服务和执行用量限制。自己部署的 Relay 由你自己运营。",
        ],
      },
      {
        heading: "应用更新",
        body: [
          "桌面端会访问 updates.cocurdex.com 检查新版本，并从 GitHub 下载安装包。这些请求会带上你的 IP 地址和常规请求信息，比如 App 版本、平台和更新通道。我们只用它们来提供更新。",
        ],
      },
      {
        heading: "本网站",
        body: [
          "cocurdex.com 是托管在 Cloudflare Pages 上的静态网站。我们用 Cloudflare Web Analytics 统计页面访问量，它不使用 cookie，也不跨站追踪你。Cloudflare 会处理你的 IP 地址，用于提供和保护网站。",
          "网站会在浏览器的本地存储里记住你选的主题。文档搜索在本站完成，不会发给第三方。下载文件由 GitHub 提供。",
        ],
      },
      {
        heading: "联系我们时",
        body: [
          "你给我们发邮件时，我们会收到你的邮箱地址和邮件内容，并用来回复你。GitHub Issues 和 Discord 是公开或社区空间，适用它们自己的条款。请不要在那里发布凭据、私有代码或个人数据。",
        ],
      },
      {
        heading: "保留期限和你的选择",
        body: [
          "你设备上的数据由你掌控。你可以在 App 里删除工作区或会话、撤销已配对的设备，或者卸载 App 来删除数据。卸载手机 App 会删除手机上的配对信息，同时也请在电脑上撤销这台手机。",
          "支持邮件只在帮助你所需的期限内保留。推送网关和 Relay 的技术日志只在运行和保护这些服务所需的期限内保留。",
          "根据你所在的地区（包括欧洲经济区、英国和加州），你可能有权访问、更正、删除你的个人信息，或反对我们处理这些信息。发邮件给我们即可提出请求，我们不会因此区别对待你。你也可以向当地的数据保护机构投诉。",
        ],
      },
      {
        heading: "儿童",
        body: [
          "Cocurdex 是开发者工具，不面向 13 岁以下（欧洲经济区和英国为 16 岁以下）的儿童，我们不会有意收集他们的个人信息。",
        ],
      },
      {
        heading: "跨境传输",
        body: [
          "我们位于美国。我们的服务处理个人信息时，这些信息可能在美国以及我们的服务提供商所在的其他国家处理。",
        ],
      },
      {
        heading: "政策变更",
        body: [
          "本政策如有变更，我们会在本页更新并修改上方的日期。如果变更对我们处理你数据的方式有重大影响，我们会在生效前在本站说明。",
        ],
      },
    ],
    contactHeading: "联系方式",
    contactBody: "关于隐私的问题或请求，请联系 softmeta LLC：",
  },
  terms: {
    pageTitle: "服务条款",
    metaDescription:
      "使用 Cocurdex 桌面端、CLI、iOS 和 Android App、相关在线服务以及 cocurdex.com 的条款。",
    updatedLabel: "最后更新",
    updated: "2026-11-05",
    heading: "服务条款",
    intro:
      "本条款适用于你使用 Cocurdex 桌面端、cocurdex CLI、Cocurdex iOS 和 Android App、这些 App 连接的在线服务（更新、推送网关和官方 Relay），以及 cocurdex.com。Cocurdex 由美国怀俄明州有限责任公司 softmeta LLC（下称「我们」）发布。使用 Cocurdex 即表示你同意本条款；如果不同意，请不要使用。本条款以英文版为准，中文版仅供参考。",
    sections: [
      {
        heading: "简要说明",
        body: [],
        items: [
          "Cocurdex 是预发布软件，按现状提供，功能可能变化或出错。",
          "你的代码、提示词、对话记录、笔记和其他内容都归你所有，并保存在你自己的设备上。",
          "你运行的 Agent 会在你授予的权限范围内操作你的电脑。请检查它们做了什么，并做好备份。",
          "你接入的模型提供商和 Agent 工具是独立的服务，适用它们自己的条款。",
          "目前不收取任何费用。如果以后收费，我们会在你付款前告知价格。",
        ],
      },
      {
        heading: "源代码许可",
        body: [
          "Cocurdex 源代码以 Functional Source License 1.1 版、ALv2 Future License（FSL-1.1-ALv2）发布在 GitHub 上的 Cocurdex 仓库中。复制、修改和再分发代码适用该许可；使用我们分发的 App 和我们运营的服务适用本条款。就代码本身而言，本条款与该许可冲突时，以该许可为准。",
          "在遵守本条款的前提下，我们授予你个人的、非独占的、不可转让的、可撤销的许可，在你拥有或控制的设备上安装和使用我们分发的 App。",
        ],
      },
      {
        heading: "预发布软件",
        body: [
          "Cocurdex 仍在积极开发中。我们可能增加、修改或移除功能，某次更新也可能改变某项功能的行为。部分版本会标注为 Beta。我们不承诺任何功能、平台或服务会一直可用。",
        ],
      },
      {
        heading: "你的内容和你的责任",
        body: [
          "你用 Cocurdex 创建或处理的代码、文件、提示词、对话记录、笔记、Issue、Deck 和其他内容，其全部权利都归你所有。我们不会收到副本，也不主张任何权利。",
          "Cocurdex 会启动 AI Agent，它们可以在你设定的权限内读取和修改文件、运行命令、访问网络。选择使用哪些 Agent、模型、权限和工作区，检查 Agent 的操作，以及备份重要数据，都是你的责任。AI 模型的输出可能有误、不安全或侵犯他人权利，依赖之前请先检查。",
          "你有责任保护好你的设备、配对码、邀请凭据和提供商凭据。你与之配对设备或授予编辑权限的人，可以在该权限范围内操作你的电脑。",
        ],
      },
      {
        heading: "第三方服务",
        body: [
          "Cocurdex 会与不由我们运营的服务配合使用，例如模型提供商（如 Anthropic、OpenAI 和 Google）、Agent CLI、GitHub、Tailscale、rsrs、Apple 和 Google。你对这些服务的使用适用它们各自的条款和隐私政策，你在这些服务上的账号、费用和用量限制由你自己负责。我们不对它们的可用性、输出或行为负责。",
        ],
      },
      {
        heading: "我们的在线服务",
        body: [
          "App 会使用我们运营的几项服务：检查更新；推送网关，用于向你的手机发送端到端加密的通知；以及官方 Relay，仅限受邀使用，用于转发加密的远程访问流量。我们可能设置用量限制，也可能修改、暂停或停止其中任何一项服务。对于违反本条款或危及服务和其他用户的人，我们可以暂停或撤销其访问权限。这些服务会处理哪些数据，请见我们的隐私政策。",
        ],
      },
      {
        heading: "使用规范",
        body: ["你不得利用 Cocurdex 或我们的服务："],
        items: [
          "违反法律或侵犯他人权利；",
          "未经许可访问他人的计算机、账号或数据；",
          "探测、过载或干扰我们的服务，或绕过它们的限制和访问控制；",
          "通过我们的服务发送垃圾信息、恶意软件或有害内容；",
          "未经我们许可，分享、出售或转售邀请凭据或 Relay 访问权限。",
        ],
      },
      {
        heading: "费用",
        body: [
          "Cocurdex 及其服务目前免费。如果我们推出付费方案或付费服务，会在收费前展示价格和附加条款，未经你同意不会收取任何费用。",
        ],
      },
      {
        heading: "商标与反馈",
        body: [
          "Cocurdex 及其标志和图标是 softmeta LLC 的商标。Cocurdex 仓库中的商标政策说明了你可以如何提及它们；除此之外，本条款不授予你使用它们的任何权利。",
          "如果你向我们提供反馈或建议，我们可以使用，且对你不负任何义务。代码贡献适用仓库中的贡献条款。",
        ],
      },
      {
        heading: "通过 App Store 和 Google Play 获取的 App",
        body: [
          "如果你从 Apple App Store 或 Google Play 获取手机 App，本条款是你与 softmeta LLC 之间的协议，而不是与 Apple 或 Google 之间的协议。对 App 及其支持负责的是我们，而不是 Apple 或 Google。你的使用还须遵守应用商店的使用规则。",
          "对于 iOS App：Apple 没有义务提供维护或支持。如果 App 不符合适用的保证，你可以通知 Apple，Apple 会退还购买价格（如有）；在法律允许的范围内，Apple 不承担其他保证义务。Apple 不负责处理与 App 有关的索赔，包括产品责任索赔、App 不符合法律或监管要求的索赔、消费者保护索赔，以及 App 侵犯第三方知识产权的索赔。Apple 及其子公司是本条款的第三方受益人，可以向你执行本条款。",
        ],
      },
      {
        heading: "免责声明",
        body: [
          "在法律允许的范围内，Cocurdex 和我们的服务按「现状」和「现有」提供，不附带任何明示或默示的保证，包括适销性、特定用途适用性和不侵权的保证。我们不保证 Cocurdex 没有错误、不会中断、不会丢失数据，也不保证任何 Agent 或模型的输出准确或安全。",
        ],
      },
      {
        heading: "责任限制",
        body: [
          "在法律允许的范围内，对于因 Cocurdex 或本条款引起或与之相关的任何间接、附带、特殊、后果性或惩罚性损害，以及数据、代码、利润或收入的损失，即使我们已被告知可能发生，softmeta LLC 也不承担责任。我们就与 Cocurdex 或本条款相关的全部索赔承担的总责任，以下列两者中较高者为限：索赔前 12 个月内你为 Cocurdex 向我们支付的金额，或 100 美元。",
          "有些地区不允许上述排除或限制。本条款中的任何内容都不限制因过失造成死亡或人身伤害的责任、欺诈责任，以及其他依法不得限制的责任。",
        ],
      },
      {
        heading: "欧洲经济区、英国及其他地区的消费者",
        body: [
          "如果你以消费者身份使用 Cocurdex，你所在国家强制性消费者保护法赋予你的所有权利都不受影响。本条款中的任何内容，包括免责声明、责任限制以及法律适用和管辖法院的约定，都不会剥夺这些权利。",
        ],
      },
      {
        heading: "停止使用",
        body: [
          "你可以随时卸载 Cocurdex 并撤销已配对的设备，以停止使用。如果你违反本条款，我们可以终止你对我们服务的访问。关于你的内容、商标与反馈、免责声明、责任限制以及适用法律的条款，在你停止使用后继续有效。",
        ],
      },
      {
        heading: "出口管制与制裁",
        body: [
          "你不得在违反美国出口管制或制裁法律的情况下使用 Cocurdex 或我们的服务；如果这些法律禁止你获得它们，你也不得使用。",
        ],
      },
      {
        heading: "适用法律与争议解决",
        body: [
          "本条款适用美国怀俄明州法律及适用的美国联邦法律，不考虑冲突法规则。因本条款或 Cocurdex 引起或与之相关的任何争议，专属由位于怀俄明州的州法院或联邦法院管辖，你和我们均同意接受其管辖。如果你是欧洲经济区、英国或其他依法享有此项权利的国家的消费者，你也可以在你居住地的法院提起诉讼。",
        ],
      },
      {
        heading: "其他",
        body: [
          "本条款连同隐私政策和源代码许可，构成你与我们之间关于 Cocurdex 的完整协议。如果本条款的某一部分被认定无法执行，其余部分仍然有效。我们未立即执行某项条款，不代表放弃日后执行的权利。未经我们同意，你不得转让本条款下的权利；我们可以在合并、收购或资产出售中转让我们的权利。",
        ],
      },
      {
        heading: "条款变更",
        body: [
          "如果本条款有变化，我们会在此更新并修改上方的日期。如果变更是实质性的，我们会在生效前在本站说明。变更生效后继续使用 Cocurdex，即表示你接受更新后的条款。",
        ],
      },
    ],
    contactHeading: "联系方式",
    contactBody: "关于本条款的问题，请联系 softmeta LLC：",
  },
  support: {
    pageTitle: "支持",
    metaDescription: "获取 Cocurdex 桌面端、CLI、iOS 和 Android 的帮助。",
    eyebrow: "支持",
    heading: "获取 Cocurdex 帮助",
    intro:
      "Cocurdex 处于预发布阶段，不提供支持 SLA。通过以下渠道可以直接联系到开发团队。",
    channels: [
      {
        id: "email" as const,
        title: "邮件",
        body: "桌面端、iOS 或 Android App 的问题、隐私请求，以及不方便公开发的内容。",
        linkLabel: "邮件",
      },
      {
        id: "issues" as const,
        title: "Bug 反馈和功能建议",
        body: "请附上 Cocurdex 版本、操作系统、所用 Agent 和复现步骤。不要附带凭据、私有代码或对话记录。",
        linkLabel: "GitHub Issues",
      },
      {
        id: "discord" as const,
        title: "社区",
        body: "使用问题、快速反馈和讨论。",
        linkLabel: "加入 Discord",
      },
      {
        id: "security" as const,
        title: "安全漏洞",
        body: "请通过 GitHub Security Advisory 私下报告，不要开公开 issue。",
        linkLabel: "报告漏洞",
      },
    ],
    faqHeading: "常见问题",
    faq: [
      {
        question: "怎么把手机 App 连到电脑？",
        answer:
          "在电脑上打开 设置 → 设备 → 配对设备，点生成配对码。在 iOS 或 Android App 里选择配对电脑，然后点扫码配对或粘贴配对链接。",
        docPath: "/docs/devices-and-web/",
      },
      {
        question: "App 提示连不上我的电脑。",
        answer:
          "请确认电脑没有休眠、Cocurdex 桌面端正在运行、远程访问已打开，并且两台设备在同一个网络或同一个 Tailscale tailnet 里。",
        docPath: "/docs/devices-and-web/",
      },
      {
        question: "怎么移除手机或删除我的数据？",
        answer:
          "Cocurdex 没有需要删除的账号。在电脑的 Paired devices 里撤销这台手机，然后卸载 App。你的会话和设置都在电脑上，可以在电脑上删除。",
        docPath: "/docs/concepts/workspaces-and-data/",
      },
    ],
    readMore: "文档",
    privacyNote: "我们如何处理数据：",
    privacyLink: "隐私政策",
  },
};
