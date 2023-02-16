[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [Bun — fast all-in-one JavaScript runtime](https://nicelinks.site/post/63ee1d1d3ca14e0315d81b2f)

**标签**：[`runtime`](https://nicelinks.site/tags/runtime) · [`JavaScript`](https://nicelinks.site/tags/JavaScript) · [`平台`](https://nicelinks.site/tags/平台)

> Bundle, transpile, install, and run JavaScript & TypeScript — all in Bun. Bun is a new JavaScript runtime with a native bundler, transpiler, task runner, and npm client built-in.

![倾城之链 - Bun — fast all-in-one JavaScript runtime](https://oss.nicelinks.site/bun.sh.png?x-oss-process=style/png2jpg)

**推荐语**：[Bun](https://nicelinks.site/redirect?url=https://bun.sh/) （馒头）是一个快速的一体化 [JavaScript](https://nicelinks.site/tags/JavaScript) 运行时；捆绑、转译、安装和运行 JavaScript 和 TypeScript 项目——全部在 Bun 中。Bun 是一个新的 JavaScript 运行时，内置了原生的打包器、转译器、任务运行器和 [npm](https://nicelinks.site/tags/npm) 客户端。

### 什么是 Bun？

[Bun](https://nicelinks.site/redirect?url=https://bun.sh/) 是像 [Node](https://nicelinks.site/post/5f376ebe1751843ef894c899) 或 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 一样的现代 JavaScript 运行时。它是从头开始构建的，专注于三个主要方面：

- 快速开始（考虑到优势）。
- 新的性能水平（扩展 JavaScriptCore，引擎）。
- 成为一个伟大而完整的工具（捆绑器、转译器、包管理器）。

Bun 旨在替代您当前的 JavaScript 和 TypeScript 应用程序或脚本——在您的本地计算机、服务器或边缘。Bun 原生实现了数百个 Node.js 和 Web API，包括约 90% 的 [Node API](https://nodejs.org/api/n-api.html) functions (native modules), fs, path, Buffer 等等。

Bun 的目标是在浏览器之外运行世界上大部分的 JavaScript，为您未来的基础架构带来性能和复杂性增强，并通过更好、更简单的工具提高开发人员的生产力。

### Bun 是如何工作的？

Bun 使用 [JavaScriptCore](https://github.com/WebKit/WebKit/tree/main/Source/JavaScriptCore) 引擎，它的启动和执行速度往往比 [V8](https://nicelinks.site/post/63986e3ce524a8432ed1d256) 等更传统的选择要快一些。Bun 是用一种具有手动内存管理功能的低级编程语言编写的。Bun 的大部分内容都是从头开始编写的，包括 JSX/TypeScript 转译器、npm 客户端、捆绑器、SQLite 客户端、HTTP 客户端、WebSocket 客户端等。

### Bun 为什么快？

大量时间花在分析、基准测试和优化上。Bun 的每个部分的答案都不同，但有一个普遍的主题：Bun 对内存的低级控制，和隐藏控制流的缺乏使得编写快速软件变得更加简单。

Bun 是  Jarred Sumner 在 2022 年 3 月开启的 [开源项目](https://github.com/oven-sh/bun) ，主打高性能、工具链；对标的是 [Node](https://nicelinks.site/post/5f376ebe1751843ef894c899) （基于 C++）或 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) （基于 Rust）；Node 和 Deno 用的 JS 引擎是 V8 (Chromium)；而 Bun 使用了新兴的系统编程语言 [Zig](https://ziglang.org/) （相当于加强版 C 语言），所使用的引擎是 JavaScriptCore (Safari)；Deno 于 2017 创立，尚未看到更多用于生产环境，可以预见 Bun 还有很长的路要走。截止目前（2023 年 02 月 16 日），版本更新至 `0.5.6`（beta）；如果你对其感兴趣，可移步 [Bun Blog](https://bun.sh/blog) 以了解更多。

── 出自[倾城之链 - Bun — fast all-in-one JavaScript runtime](https://nicelinks.site/post/63ee1d1d3ca14e0315d81b2f)

## [WasmEdge ｜ A lightweight, high-performance, and extensible WebAssembly runtime](https://nicelinks.site/post/63ee15303ca14e0315d819ec)

**标签**：[`WebAssembly`](https://nicelinks.site/tags/WebAssembly) · [`跨平台`](https://nicelinks.site/tags/跨平台) · [`runtime`](https://nicelinks.site/tags/runtime)

> WasmEdge is a lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. It powers serverless apps, embedded functions, microservices, smart contracts, and IoT devices.

![倾城之链 - WasmEdge ｜ A lightweight, high-performance, and extensible WebAssembly runtime](https://oss.nicelinks.site/wasmedge.org.png?x-oss-process=style/png2jpg)

**推荐语**：[WasmEdge](https://nicelinks.site/redirect?url=https://wasmedge.org/) ：**是一种轻量级、高性能且可扩展的 WebAssembly 运行时**，适用于云原生、边缘和去中心化应用程序。它为无服务器应用程序、嵌入式功能、微服务、智能合约和物联网设备提供支持。它具有如下功能特征：

### 高性能

与 Linux 容器相比，WasmEdge 在启动时可以快 100 倍，在运行时可以快 20%。WasmEdge 应用程序的大小可能是类似 Linux 容器应用程序的 1/100。

### JavaScript 支持

- ES6 模块和标准 API 支持；
- 节点和 NPM 模块 API 支持；
- React SSR 流式传输；
- 在 Rust 中实现 JS API；
- 比容器化的 v8 轻得多；

### 跨平台支持

WasmEdge 支持 Linux、苹果操作系统、Windows、微内核和实时操作系统、Intel x86、ARM 和 M1 CPU 等。

### 易于扩展

在 C++ 中构建 WasmEdge 扩展。使用 C、Go 和 Rust 中的本机主机函数构建自定义的 WasmEdge 运行时。

### 易于嵌入主机程序

在 C、Go、Rust、Node.js 和 Python 主机应用程序中嵌入 WasmEdge 函数。在云和边缘原生应用程序平台和框架中嵌入功能。

WasmEdge Runtime 为其包含的 [WebAssembly](https://nicelinks.site/tags/WebAssembly) 字节码程序提供了一个定义良好的执行沙箱。运行时为操作系统资源（例如，文件系统、套接字、环境变量、进程）和内存空间提供隔离和保护。WasmEdge 最重要的用例是安全地执行用户定义或社区贡献的代码作为软件产品（例如，SaaS、软件定义车辆、边缘节点，甚至区块链节点）的插件。它使第三方开发人员、供应商、供应商和社区成员能够扩展和定制软件产品。

WasmEdge 可以运行从 C/C++、Rust、Swift、AssemblyScript 或 Kotlin 源代码编译的标准 WebAssembly 字节码程序。它在安全、快速、轻量级、可移植和容器化的沙箱中运行 JavaScript，包括第 3 方 ES6、CJS 和 [NPM](https://nicelinks.site/tags/npm) 模块。它还支持混合使用这些语言（例如，使用 Rust 来实现 JavaScript API）、Fetch API 和边缘服务器（edge servers）上的服务器端渲染 (SSR)功能。

WasmEdge 支持所有标准的 WebAssembly 功能和许多建议的扩展。它还支持许多为云原生和边缘计算用途量身定制的扩展（例如，WasmEdge 网络套接字和 WasmEdge [Tensorflow](https://nicelinks.site/tags/TensorFlow) 扩展）。详细了解 WasmEdge 的 [技术亮点](https://wasmedge.org/book/en/intro/features.html) 。

── 出自[倾城之链 - WasmEdge ｜ A lightweight, high-performance, and extensible WebAssembly runtime](https://nicelinks.site/post/63ee15303ca14e0315d819ec)

## [Graphy | Slick, interactive charts that make you stand out](https://nicelinks.site/post/63ecca0c3ca14e0315d80fc1)

**标签**：[`数据`](https://nicelinks.site/tags/数据) · [`可视化`](https://nicelinks.site/tags/可视化) · [`图表`](https://nicelinks.site/tags/图表)

> Make slick, interactive data visualisations with our free chart-maker tool — no log-in required. Easily embed into Notion or wherever you like!

![倾城之链 - Graphy | Slick, interactive charts that make you stand out](https://oss.nicelinks.site/graphy.new.png?x-oss-process=style/png2jpg)

**推荐语**：[Graphy](https://nicelinks.site/redirect?url=https://graphy.new/) ，一款免费图表制作工具，可用来制作光滑的、互动的数据 [可视化](https://nicelinks.site/tags/可视化) ，打开即可使用，不需要登录。支持下载、拷贝图片，也可以轻松地嵌入 Notion 或任何你喜欢的地方。而且支持各种定制，如图表类型、图标配色、配色横纵比（Aspect Ratio）、详情及主题。

更精确地说明， [Graphy](https://nicelinks.site/redirect?url=https://graphy.new/) 是一款独立开发项目，可以创建好看的 [表格](https://nicelinks.site/tags/表格) **图片**；如果您有基于 PPT、Excel 创建可视化表格相关诉求，完全可以基于 `graphy` 替代之；相比 Excel、PPT，基于 [Graphy](https://nicelinks.site/redirect?url=https://graphy.new/) 创建数据、打造样式、导入数据、生成图片、调整背景（配色），都更为高效且人性化。

── 出自[倾城之链 - Graphy | Slick, interactive charts that make you stand out](https://nicelinks.site/post/63ecca0c3ca14e0315d80fc1)

## [Retool | Build internal tools, remarkably fast.](https://nicelinks.site/post/63eb6bffdfb7f255c25dbcb0)

**标签**：[`低代码`](https://nicelinks.site/tags/低代码) · [`平台`](https://nicelinks.site/tags/平台) · [`Web开发`](https://nicelinks.site/tags/Web开发)

> Retool is the fast way to build internal tools. Drag-and-drop our building blocks and connect them to your databases and APIs to build your own tools, instantly. Connects with Postgres, REST APIs, GraphQL, Firebase, Google Sheets, and more. Built by developers, for developers. Trusted by startups and Fortune 500s. Sign up for free.

![倾城之链 - Retool | Build internal tools, remarkably fast.](https://oss.nicelinks.site/retool.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Retool](https://nicelinks.site/redirect?url=https://retool.com/) ，是一个面向企业的 [低代码](https://nicelinks.site/tags/低代码) 开发平台，它于 2017 年在美国著名创业孵化器 Y Combinator 中诞生，旨在为企业提供一个工具开发平台，让企业能够使用有限的编程语言，构建自定义业务工具。

作为优先探索低代码开发的平台之一，Retool 为开发者们提供了许多方便：无需任何前端编程基础的可拖拽的 UI 组件、与各种数据库和 API 的连接、安全且灵活的个性化开发模式。更详细介绍，它具有如下功能特征：

### 一整套强大的构建块

所有内部工具都由相同的构建块组成：表格、列表、图表、表单、向导、地图等。Retool 提供开箱即用的这些块，因此您可以花时间组装您的 UI，而不是从头开始发发它。无需寻找最好的 React 表库，您可以通过拖放在几分钟内将您的应用程序组合在一起。

### 连接到任何东西

使用 REST、GraphQL 或 gRPC API 连接到大多数数据库或任何东西。Retool 使您能够在一个应用程序中无缝地处理所有数据源。

**如何存储数据取决于您**。默认情况下，Retool 中不存储任何内容。运行查询时，Retool 后端会将请求代理到您的后端。没有更多的 ETL 数据。

### 专为开发人员打造

Retool 是高度可破解的，因此您永远不会受到开箱即用的限制。如果您可以使用 JavaScript 和 API 编写它，则可以在 Retool 中构建它。

**您几乎可以在 Retool 中的任何地方编写 JavaScript。**  只需用双括号包裹一个表达式 `{{ Math.max(select1.value, 10) }}` ，它就会作为沙盒 JS 执行。使用 Transformers，您可以编写更大的、可重用的代码块来处理数据。还有一个本机 API，用于通过 JS 直接与组件和查询进行交互。

### 安全地部署和共享

Retool 具有内置的安全性、可靠性和权限。您可以在本地、在您自己的 VPN 后面以及在您自己的 VPC 中托管 Retool。通过 Docker 或 Kubernetes 部署。此外，Retool 支持基于 [Git](https://nicelinks.site/tags/Git) 进行代码管理。

搭建软件的过程是颇为繁杂，但这却是许多公司不可避免的一项工作。`低代码` 应运而生，且迅速打入了市场。作为首先进军低代码平台之一的 Retool 一直占据着大众视野，其多样的 UI 组件、大量的数据源连接器以及多种个性化使用功能为程序开发者带来了许多便利。

总体来说，Retool 通过「**搭建程序界面**」「**建立查询连接数据源**」「**构建组件间的逻辑顺序**」为基本框架来快速搭建应用程序。在 UI 组件方面，Retool 不仅不断的在添加新的选择，他们还推出了开发者自定义设计组件的功能。Retool 还充分考虑到了应用的权限问题，开发者可以自行分组并规定每个分组对应用所享有的权限。

低代码并不意味着完全 [无代码](https://nicelinks.site/tags/无代码) ，根据低代码工具的属性和应用场景不同，对代码能力的要求也有区别。例如以 Airtable 和 [飞书](https://nicelinks.site/post/6199f84c60f6c5569db65f20) 多维表格这类以表格为主体，可以用来存放、统计、分析数据的平台，基本属于零代码。而 Bubble、Retool 等网页应用开发工具，则需要具备基本的编程思维和代码开发能力。

── 出自[倾城之链 - Retool | Build internal tools, remarkably fast.](https://nicelinks.site/post/63eb6bffdfb7f255c25dbcb0)

## [Build optimized websites quickly, focus on your content | Docusaurus](https://nicelinks.site/post/63ea2b08dfb7f255c25db67c)

**标签**：[`文档`](https://nicelinks.site/tags/文档) · [`网站生成器`](https://nicelinks.site/tags/网站生成器) · [`React`](https://nicelinks.site/tags/React)

> An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.

![倾城之链 - Build optimized websites quickly, focus on your content | Docusaurus](https://oss.nicelinks.site/docusaurus.io.png?x-oss-process=style/png2jpg)

**推荐语**：[Docusaurus](https://nicelinks.site/redirect?url=https://docusaurus.io/) ，基于 [React](https://nicelinks.site/post/5b1294b5e93ed2618cfac134) 的一个优化的、易于维护的 [网站生成器](https://nicelinks.site/tags/网站生成器) 。Docusaurus 帮助你快速移动和编写内容：建立文档网站、博客、营销页面等，使您可以专注于内容。它具有如下功能特征：

### 由 MDX 提供支持

节省时间并专注于文本文档。只需使用 MDX 编写文档和博客文章，Docusaurus 就会将它们构建成静态 HTML 文件，随时可供使用。多亏了 [MDX](https://nicelinks.site/post/63e4e3eee63ccd089dee6686)，你甚至可以在你的 Markdown 中嵌入 React 组件。

### 使用 React 构建

通过编写 React 组件来扩展和自定义项目的布局。利用可插入架构，设计您自己的站点，同时重用由 Docusaurus 插件创建的相同数据。

### 准备翻译

本地化是开箱即用的。使用 git、Crowdin 或任何其他翻译管理器来翻译您的文档并单独部署它们。

### 文档版本控制

支持用户使用您项目的所有版本。文档版本控制可帮助您使文档与项目发布保持同步。

### 内容搜索

让您的社区可以轻松地在您的文档中找到他们需要的内容。Docusaurus 支持 [Algolia](https://nicelinks.site/post/5b141444ca049846c6ee6f91) 文档搜索、Typesense 文档搜索、本地搜索、自定义搜索。

[Docusaurus](https://nicelinks.site/redirect?url=https://docusaurus.io/) 在 [Github 开源](https://github.com/facebook/docusaurus)，目前共获得 42K+ Star；在 [倾城之链](https://nicelinks.site) 收录了蛮多 [文档](https://nicelinks.site/tags/文档) 型工具库， [Docusaurus](https://nicelinks.site/redirect?url=https://docusaurus.io/) 是功能相对最为完善之一，而且界面美观、性能优越，无需额外做更多处理，如果您有搭建文档类诉求，推荐优先考虑。

── 出自[倾城之链 - Build optimized websites quickly, focus on your content | Docusaurus](https://nicelinks.site/post/63ea2b08dfb7f255c25db67c)

## [The Most Advanced WYSIWYG Editor | Trusted Rich Text Editor](https://nicelinks.site/post/63ea26ebdfb7f255c25db5b8)

**标签**：[`编辑器`](https://nicelinks.site/tags/编辑器) · [`Markdown`](https://nicelinks.site/tags/Markdown) · [`工具`](https://nicelinks.site/tags/工具)

> TinyMCE is the most advanced WYSIWYG HTML editor designed to simplify website content creation. The rich text editing platform that helped launched Atlassian, Medium, Evernote and more.

![倾城之链 - The Most Advanced WYSIWYG Editor | Trusted Rich Text Editor](https://oss.nicelinks.site/www.tiny.cloud.png?x-oss-process=style/png2jpg)

**推荐语**：[TinyMCE](https://nicelinks.site/redirect?url=https://www.tiny.cloud/) 是先进的 [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) （**What You See Is What You Get**，所见即所得） HTML 编辑器，适用于 [React](https://nicelinks.site/post/5b1294b5e93ed2618cfac134) 、 [Vue](https://nicelinks.site/post/5b1a221c0526c920d6dfaada) 和 [Angular](https://nicelinks.site/post/5b2b7f663bd7ef3847a3fadf) ；它旨在简化网站内容创建，让它们能够为用户创造卓越的内容和体验；TinyMCE 帮助推出 Atlassian、Medium、Evernote 等的富文本编辑平台，并受到数百万开发人员的使用和信赖，是世界上最可定制、可扩展和灵活的富文本编辑器。它具有如下功能特征：

### 一体化

借助官方组件，TinyMCE 可以轻松集成到您的项目中；拥有超过 29 个集成和 400 多个 API，请参阅 TinyMCE 文档以获取完整的编辑器集成列表。

### 可定制化

可以轻松配置富文本编辑器的 UI 以匹配您的站点、产品或应用程序的设计。由于其灵活性，您可以根据需要为编辑器配置尽可能多或尽可能少的功能。

凭借 50 多个可用的强大插件，以及作为 TinyMCE 基础的可编辑内容，添加额外功能就像添加一行代码一样简单。实现大多数插件的全部功能只需要多几行代码。

### 可扩展性

有时您的编辑要求可能非常独特，您需要自由灵活地进行创新。由于 TinyMCE 是开源的，您可以查看源代码并开发自己的自定义功能扩展以满足您自己的要求。公开 TinyMCE API 使您更容易编写适合现有 TinyMCE UI 组件框架的自定义功能。

### 扩展功能和支持

对于需要更深入的效率、合规性或按照企业级标准构建的协作功能的专业软件团队，请与他们的团队联系。Tiny 还为专业开发团队提供专门的 SLA 和支持。

TinyMCE 富文本编辑器的入门非常简单，简单的配置可以在不到 5 分钟的时间内完成。该项目在 [Github 开源](https://github.com/tinymce/tinymce) ，目前拥有 13K Star，有对富文本编辑器感兴趣或有需要的朋友，可前往以了解更多。

── 出自[倾城之链 - The Most Advanced WYSIWYG Editor | Trusted Rich Text Editor](https://nicelinks.site/post/63ea26ebdfb7f255c25db5b8)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下客服微信），🤲 。

![倾城之链 - 客服微信](https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-%E5%BE%AE%E4%BF%A1-mini.jpeg)

## 本期文末寄语

“我以为，最美的日子，当是晨起侍花，闲来煮茶，阳光下打盹，细雨中漫步，夜灯下读书，在这清浅时光里，一手烟火一手诗意，任窗外花开花落，云来云往，自是余味无尽，万般惬意。”── 中国当代作家、散文家、戏剧家 · 汪曾祺

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

![小程序码 - 倾城之链](https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1)

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 104 期）- 倾城之链](https://blog.nicelinks.site/weekly-104/)
- [优质网站同好者周刊（第 103 期）- 倾城之链](https://blog.nicelinks.site/weekly-103/)
- [优质网站同好者周刊（第 102 期）- 倾城之链](https://blog.nicelinks.site/weekly-102/)
- [优质网站同好者周刊（第 101 期）- 倾城之链](https://blog.nicelinks.site/weekly-101/)
- [优质网站同好者周刊（第 100 期）- 倾城之链](https://blog.nicelinks.site/weekly-100/)
- [优质网站同好者周刊（第 99 期）- 倾城之链](https://blog.nicelinks.site/weekly-099/)
- [优质网站同好者周刊（第 98 期）- 倾城之链](https://blog.nicelinks.site/weekly-098/)
- [优质网站同好者周刊（第 96 期）- 倾城之链](https://blog.nicelinks.site/weekly-096/)
- [优质网站同好者周刊（第 95 期）- 倾城之链](https://blog.nicelinks.site/weekly-095/)
- [优质网站同好者周刊（第 94 期）- 倾城之链](https://blog.nicelinks.site/weekly-094/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ '欲问美图何处寻？倾城之链有定音')
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
