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
        body: "笔记、Issue、演示文稿与搜索索引保存在本机的应用私有存储中，无需注册账号。可在本机浏览器打开同一工作区，或配对另一台设备——在同一网络上，或在离开后通过中继连接。可选的长期记忆留在这台电脑上，直到你打开多设备同步。",
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
  legalEntity: {
    heading: "企业信息",
    legalNameLabel: "法定名称",
    legalName: "softmeta LLC",
    jurisdictionLabel: "注册地",
    jurisdiction: "美国怀俄明州",
    productLabel: "产品",
    product: "Cocurdex",
    websiteLabel: "网站",
    emailLabel: "邮箱",
    addressLabel: "地址",
    supportLabel: "帮助与投诉",
    supportLink: "支持",
  },
  privacy: {
    pageTitle: "隐私政策",
    metaDescription:
      "Cocurdex 桌面端、CLI、iOS 和 Android App、它们连接的服务以及 cocurdex.com 如何处理数据。",
    updatedLabel: "最后更新",
    updated: "2026-11-05",
    heading: "隐私政策",
    intro:
      "Cocurdex 运行在你自己的电脑上，其设计目标是把你的工作数据（如项目、会话、对话记录、笔记、设置和凭据）保存在你自己的设备上。本政策说明这在实际中意味着什么，也说明哪些数据会离开你的设备。本政策适用于 Cocurdex 桌面端、cocurdex CLI、Cocurdex iOS 和 Android App、这些 App 连接的在线服务，以及 cocurdex.com。Cocurdex 由美国怀俄明州有限责任公司 softmeta LLC（下称「我们」）发布。",
    sections: [
      {
        heading: "简要说明",
        body: [],
        items: [
          "App 没有 Cocurdex 用户账号，使用时不需要注册或登录。",
          "我们没有在 App 中加入统计、广告或追踪 SDK，App 也不会向我们上传崩溃报告。",
          "配对的手机或浏览器直接连接你自己的电脑，连接是端到端加密的，经过 Relay 转发时也是如此。",
          "Agent 处理的提示词和文件由你的电脑发送给你选择的 AI 提供商，而不是发给我们。",
          "我们不出售个人信息，也不会为了广告而共享个人信息。",
        ],
      },
      {
        heading: "保存在你设备上的数据",
        body: [
          "桌面端和 CLI 把工作区、会话、Agent 对话记录、记忆、笔记、Issue、Deck、设置、提供商凭据和日志保存在你的电脑上。App 不会把这些数据上传给我们。",
          "手机 App 把已配对的电脑和配对密钥保存在手机上，使用系统提供的安全存储。App 里显示的会话、对话记录等内容都来自你的电脑。",
          "桌面端会在本机记录崩溃信息，方便你排查问题。崩溃报告不会上传。如果你主动把日志发给我们，请先删掉凭据和个人数据。",
        ],
      },
      {
        heading: "你选择的 AI 提供商和 Agent 工具",
        body: [
          "运行 Agent 时，你的电脑会把提示词、Agent 读取的文件和上下文以及工具结果发送给你配置的模型提供商或 Agent CLI，例如 Anthropic、OpenAI 或 Google。这些数据由你的电脑直接发给该提供商，适用该提供商自己的条款和隐私政策，不经过我们。",
        ],
      },
      {
        heading: "App 发出的其他请求",
        body: [
          "部分功能会从第三方服务获取公开信息。这些请求不包含你的工作区内容，但和所有网络请求一样，会让对方看到你的 IP 地址和常规请求信息：",
        ],
        items: [
          "模型和 Agent 目录：桌面端从 models.dev 读取模型信息，从 Agent Client Protocol 注册表（cdn.agentclientprotocol.com）读取 Agent 列表。桌面端和手机 App 会从该注册表加载 Agent 图标。",
          "Skill：搜索 skill 会查询 skills.sh，安装 skill 会从 GitHub 下载。",
          "安装 Agent：从注册表安装 Agent 时，会从注册表列出的来源下载安装包。",
          "代理检测：如果你在设置中运行网络代理检测，App 会向 ipinfo.io 发送一次请求，以显示你的出口地址。",
        ],
      },
      {
        heading: "可选的记忆同步",
        body: [
          "桌面端保存的记忆留在你的电脑上。在你注册或登录 rsrs（rsrs.rs，一项独立服务）的账号之前，多设备同步不会开启。rsrs 表示，记录在到达其服务器之前会在你的设备上加密，密钥保留在你的设备上。该账号和同步的记录由 rsrs 依据其自己的条款和隐私政策处理。",
        ],
      },
      {
        heading: "手机 App 权限",
        body: [
          "iOS 和 Android App 只会在你使用需要某项权限的功能时才请求该权限：",
        ],
        items: [
          "相机：用于扫描电脑上显示的配对二维码。App 不会保存或发送相机画面。",
          "照片：用于把你选择的照片附加到发给 Agent 的消息中。照片只会发送到你的电脑。",
          "本地网络（iOS）：用于连接你在本地网络中配对的电脑。",
          "通知：在 Agent 需要你处理或完成任务时提醒你。此项可选。",
        ],
      },
      {
        heading: "推送通知",
        body: [
          "在你于电脑上设置推送网关（例如运行 cocurdex host push set）之前，手机通知不会开启。推送网关可以由我们运营，也可以由你自己用开源的 cocurdex-push 服务运行。",
          "如果你允许通知，手机会从 Apple 或 Google 获取推送令牌并交给已配对的电脑。你的电脑把令牌发给推送网关，网关将其封装成加密句柄后返回给你的电脑保存。cocurdex-push 网关不存储令牌或句柄。",
          "每条通知都在你的电脑上用手机的密钥加密。推送网关、Apple 推送通知服务和 Firebase Cloud Messaging 只能看到加密后的内容以及投递所需的信息，例如令牌、优先级和过期时间，无法读取 Agent 做了什么。cocurdex-push 网关仅在内存中使用 IP 地址和电脑标识进行限流，不会把它们写入日志。",
          "要停止通知，可以在手机设置中关闭 Cocurdex 的通知、在电脑上撤销该手机，或运行 cocurdex host push off。",
        ],
      },
      {
        heading: "远程访问与 Relay",
        body: [
          "远程访问默认关闭。开启后，配对设备通过本地网络或 Tailscale 连接你的电脑。Tailscale 是一项独立服务，有自己的隐私政策。",
          "你也可以通过 Relay 进行远程访问。设备与电脑之间的流量是端到端加密的，因此 Relay 只负责转发，无法读取或篡改其内容。",
          "我们的官方 Relay 仅限受邀使用。为运营服务和执行限额，它会处理你的电脑以及通过它连接的设备的 IP 地址、路由标识，以及邀请凭据中的账号标识。IP 地址仅在内存中用于限流，不会写入日志。它会按账号保存每日用量汇总（流量、连接次数和最后在线时间），保留 90 天；其日志会记录包含账号标识的连接事件。你自己部署的 Relay 由你自己运营。",
        ],
      },
      {
        heading: "应用更新",
        body: [
          "桌面端会访问 updates.cocurdex.com 检查新版本，并从 GitHub 下载安装包。这些请求包含你的 IP 地址和常规请求信息，例如应用版本、平台和更新渠道。我们只将其用于提供更新。",
        ],
      },
      {
        heading: "本网站",
        body: [
          "cocurdex.com 是托管在 Cloudflare Pages 上的静态网站。我们没有在网站上加入统计脚本，也不设置 Cookie。Cloudflare 会处理你的 IP 地址和请求信息以提供和保护网站，并可能向我们提供汇总的访问统计。",
          "网站会在浏览器的本地存储中记住你的主题选择。文档搜索在本站内完成，不会发送给第三方。下载文件由 GitHub 提供。",
        ],
      },
      {
        heading: "联系我们时",
        body: [
          "如果你给我们发邮件，我们会收到你的邮箱地址和邮件内容，并用于回复你。GitHub Issues 和 Discord 是公开或社区空间，适用其各自的条款。请不要在那里发布凭据、私有代码或个人数据。",
        ],
      },
      {
        heading: "保留期限与你的选择",
        body: [
          "你设备上的数据由你掌控。你可以在 App 中删除工作区或会话、撤销已配对的设备，或卸载 App 来删除其数据。卸载手机 App 会删除手机上的配对信息，请同时在电脑上撤销该手机。",
          "支持邮件只在帮助你所需的时间内保留。官方 Relay 的用量汇总保留 90 天。我们服务的其他技术日志只在运营和保护服务所需的时间内保留。",
          "根据你所在的地区（包括欧洲经济区、英国和加利福尼亚州），你可能有权访问、更正、删除你的个人信息或反对对其进行处理。请发邮件给我们提出请求，我们不会因此对你区别对待。你也可以向当地的数据保护机构投诉。",
        ],
      },
      {
        heading: "安全",
        body: [
          "我们采取了多种措施，例如对远程连接和通知进行端到端加密，并使用安全存储保存配对密钥。但没有任何系统是绝对安全的，我们无法保证数据永远不会被未经授权地访问。",
        ],
      },
      {
        heading: "儿童",
        body: [
          "Cocurdex 是开发者工具，不面向 13 岁以下的儿童（在欧洲经济区和英国为 16 岁以下）。我们不会在知情的情况下收集他们的个人信息。",
        ],
      },
      {
        heading: "跨境传输",
        body: [
          "我们位于美国。当我们的服务处理个人信息时，这些信息可能在美国以及我们的服务提供商运营所在的其他国家处理。",
        ],
      },
      {
        heading: "政策变更",
        body: [
          "如果本政策有变化，我们会在此更新并修改上方的日期。如果变更会实质性影响我们处理你数据的方式，我们会在生效前在本站说明。",
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
      "本条款适用于你使用 Cocurdex 桌面端、cocurdex CLI、Cocurdex iOS 和 Android App、这些 App 连接的在线服务，以及 cocurdex.com。Cocurdex 由美国怀俄明州有限责任公司 softmeta LLC（下称「我们」）发布。使用 Cocurdex 即表示你同意本条款；如果不同意，请不要使用。本条款以英文版为准，中文版仅供参考。",
    sections: [
      {
        heading: "简要说明",
        body: [],
        items: [
          "Cocurdex 是预发布软件，功能可能变化或出错。",
          "你的代码、提示词、对话记录、笔记和其他内容都归你所有。Cocurdex 的设计目标是把它们保存在你的设备上。",
          "你运行的 Agent 会在你授予的权限范围内操作你的电脑，包括你从已配对设备控制它们时。请检查它们做了什么，并做好备份。",
          "你接入的模型提供商和 Agent 工具是独立的服务，适用它们自己的条款和费用。",
          "目前不收取任何费用。如果以后收费，我们会在你付款前告知价格。",
          "如果你是消费者，你所在地法律赋予你的权利不受影响。",
        ],
      },
      {
        heading: "源代码许可",
        body: [
          "Cocurdex 源代码以 Functional Source License 1.1 版、ALv2 Future License（FSL-1.1-ALv2）发布在 GitHub 上的 Cocurdex 仓库中。你使用、复制、修改和再分发源代码的权利由该许可而非本条款规定。第三方组件适用其各自的许可。",
          "在遵守本条款的前提下，我们另外授予你个人的、非独占的许可，在你拥有或控制的设备上安装和使用我们分发的 App。该许可是对源代码许可下你所享有权利的补充，不构成限制。除此之外，本条款适用于我们分发的 App 和我们运营的在线服务。",
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
          "你用 Cocurdex 创建或处理的代码、文件、提示词、对话记录、笔记、Issue、Deck 和其他内容，其全部权利都归你所有。我们不主张对你内容的所有权。App 的设计目标是把这些内容保存在你的设备上，除隐私政策所述情形外，不会上传给我们。",
          "Cocurdex 会启动 AI Agent，它们可以在你设定的权限内读取和修改文件、运行命令、访问网络。使用哪些 Agent、模型、权限和工作区由你选择。Agent 可能出错、执行错误的命令或损坏文件，AI 模型的输出也可能有误、不安全或侵犯他人权利。请检查 Agent 的操作，在依赖其输出前先核对，并备份重要数据。",
        ],
      },
      {
        heading: "远程访问与设备授权",
        body: [
          "远程访问让已配对的手机或浏览器查看和控制你的电脑。请只配对你拥有或有权使用的设备，并且只用 Cocurdex 访问你拥有或有权控制的电脑。",
          "根据你授予的权限，已配对设备可以启动在你电脑上运行命令和修改文件的 Agent、批准它们的请求，以及读取你的文件。请妥善保管配对码、安全码、邀请凭据和已配对的设备。你可以随时在「已配对设备」中，或通过 cocurdex host revoke，限制每台设备的权限或撤销设备。",
          "我们使用端到端加密和设备批准来保护远程连接，但没有任何安全措施是完美的，我们无法保证永远不会发生未经授权的访问。这不限制我们依适用法律对自身过失应承担的责任。",
        ],
      },
      {
        heading: "第三方服务",
        body: [
          "Cocurdex 会与不由我们运营的服务配合使用，例如模型提供商（如 Anthropic、OpenAI 和 Google）、Agent CLI、GitHub、Tailscale、rsrs、Apple 和 Google。其中许多服务需要你自己的账号、API Key 或订阅，并可能单独收费。它们依据各自的条款和隐私政策处理你发送给它们的内容，你在这些服务上的账号、费用和用量限制由你自己负责。",
          "我们无法控制第三方服务，也不保证它们的可用性、准确性或输出。在适用法律允许的范围内，我们不对其负责，但因我们违反本条款或适用法律而造成的损失除外。",
        ],
      },
      {
        heading: "我们的在线服务",
        body: [
          "App 会使用我们运营的一些服务：检查更新；官方 Relay，仅限受邀使用，用于转发端到端加密的远程访问流量；以及在你选择使用我们运营的推送网关时，用于向你的手机发送端到端加密的通知。我们可能设置用量限制，也可能修改、暂停或停止其中任何一项服务。在可行的情况下，我们会在停止服务前给予合理通知。对于违反本条款或危及服务和其他用户的人，我们可以暂停或撤销其访问权限。这些服务会处理哪些数据，请见我们的隐私政策。",
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
          "Cocurdex 及其服务目前免费。如果我们推出付费方案或付费服务，会在收费前展示价格、所含内容以及包括计费、续费、取消和退款在内的附加条款，未经你同意不会收取任何费用。付费服务的价格或条款变更，会按你所在地法律的要求在适用于你之前告知你。",
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
          "在适用法律允许的最大范围内，Cocurdex 和我们的服务按「现状」和「现有」提供，不附带任何明示或默示的保证，包括适销性、特定用途适用性和不侵权的保证。在同样的范围内，我们不保证 Cocurdex 没有错误、不会中断、不会丢失数据，也不保证任何 Agent 或模型的输出准确或安全。",
        ],
      },
      {
        heading: "责任限制",
        body: [
          "在适用法律允许的最大范围内，对于因 Cocurdex 或本条款引起或与之相关的任何间接、附带、特殊、后果性或惩罚性损害，以及数据、代码、利润或收入的损失，即使我们已被告知可能发生，softmeta LLC 也不承担责任。在同样的范围内，我们就与 Cocurdex 或本条款相关的全部索赔承担的总责任，以下列两者中较高者为限：索赔前 12 个月内你为 Cocurdex 向我们支付的金额，或 100 美元。",
          "上述限制仅在你所在地法律允许的范围内适用，可能不适用于你。本条款中的任何内容都不限制或排除依法不得限制或排除的责任或法定消费者权利，包括因过失造成死亡或人身伤害的责任以及欺诈责任。",
        ],
      },
      {
        heading: "欧洲经济区、英国及其他地区的消费者",
        body: [
          "如果你以消费者身份使用 Cocurdex，你所在国家强制性消费者保护法赋予你的所有权利和救济都不受影响。本条款中的任何内容，包括免责声明、责任限制以及法律适用和管辖法院的约定，都不会剥夺这些权利。",
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
          "本条款适用美国怀俄明州法律及适用的美国联邦法律，不考虑冲突法规则。在适用法律允许的范围内，因本条款或 Cocurdex 引起或与之相关的争议，由位于怀俄明州的州法院或联邦法院管辖，你和我们均同意接受其管辖。",
          "如果你是消费者，上述法律选择不会剥夺你居住国强制性法律对你的保护；如该等法律允许，你也可以在你居住地的法院提起诉讼。",
        ],
      },
      {
        heading: "其他",
        body: [
          "本条款连同隐私政策和源代码许可，构成你与我们之间关于 Cocurdex 的完整协议。如果本条款的某一部分被认定无法执行，其余部分仍然有效。我们未立即执行某项条款，不代表放弃日后执行的权利。未经我们同意，你不得转让本条款下的权利；我们可以在合并、收购或资产出售中转让我们的权利，但不得因此减损你作为消费者的权利。",
        ],
      },
      {
        heading: "条款变更",
        body: [
          "当我们调整 Cocurdex 或我们的服务、出于法律、监管或安全原因，或为了让条款更清楚时，我们可能修改本条款。我们会在此发布新条款并修改上方的日期。如果变更是实质性的，我们会在生效前的合理时间内在本站说明。",
          "变更自所述日期起生效，不适用于此前发生的事项。如果你不同意变更，请在变更生效前停止使用并卸载 Cocurdex；生效后继续使用即表示你接受更新后的条款。这不影响你依消费者保护法享有的终止协议或其他救济的权利。",
        ],
      },
    ],
    contactHeading: "联系方式",
    contactBody: "关于本条款或 Cocurdex 的问题或投诉，请联系 softmeta LLC：",
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
