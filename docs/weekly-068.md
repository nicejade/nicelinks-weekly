[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [Markdoc | A powerful, flexible, Markdown-based authoring framework](https://nicelinks.site/post/62989f100f40a860b1599de4)

**标签**：[`Markdown`](https://nicelinks.site/tags/Markdown) · [`网站生成器`](https://nicelinks.site/tags/网站生成器) · [`文档`](https://nicelinks.site/tags/文档)

> From personal blogs to massive documentation sites, Markdoc is a content authoring system that grows with you.

![倾城之链 - Markdoc | A powerful, flexible, Markdown-based authoring framework](https://oss.nicelinks.site/markdoc.io.png?x-oss-process=style/png2jpg)

**推荐语**：[Markdoc](https://nicelinks.site/redirect?url=https://markdoc.io/) 一个强大、灵活、基于 Markdown 的创作框架。它是基于 [Markdown](https://nicelinks.site/tags/Markdown) 的语法和工具链，用于创建自定义文档站点和体验。它具有以下功能特征：

### 完全开源

保持对代码和内容的完全控制。Markdoc 是开源的并且完全可扩展。

### 开发人员和作家友好

Markdoc 提供强大、灵活的开发人员体验 (DX) 和同样强大的创作体验 (AX)。

### 随处采用

使用 Markdoc 创建交互式文档体验、静态内容站点、创作工具等。

### **易于扩展**

Markdoc 允许您自定义系统的所有方面，从 [自定义标签](https://nicelinks.site/redirect?url=https://markdoc.io/docs/tags) 和 [节点](https://nicelinks.site/redirect?url=https://markdoc.io/docs/nodes) 到 [全新的渲染器](https://nicelinks.site/redirect?url=https://markdoc.io/docs/render) 。

[Markdoc 核心](https://nicelinks.site/redirect?url=https://github.com/markdoc/markdoc) 是一个轻量级的包，其中包含您入门所需的一切。如果您想更快地进行，请查看 [Next.js 插件](https://nicelinks.site/redirect?url=https://github.com/markdoc/next.js) 并部署一个零样板的 Markdoc 文档站点。从个人博客到海量文档站点，Markdoc 是一个与您一起成长的内容创作系统。

── 出自[倾城之链 - Markdoc | A powerful, flexible, Markdown-based authoring framework](https://nicelinks.site/post/62989f100f40a860b1599de4)

## [Fast, disk space efficient package manager | pnpm](https://nicelinks.site/post/62989af00f40a860b1599de2)

**标签**：[`npm`](https://nicelinks.site/tags/npm) · [`Web开发`](https://nicelinks.site/tags/Web开发) · [`JavaScript`](https://nicelinks.site/tags/JavaScript)

> Fast, disk space efficient package manager

![倾城之链 - Fast, disk space efficient package manager | pnpm](https://oss.nicelinks.site/pnpm.io.png?x-oss-process=style/png2jpg)

**推荐语**： [PNPM](https://nicelinks.site/redirect?url=https://pnpm.io/) ，快速的，节省磁盘空间的包管理工具；相比于 [npm](https://nicelinks.site/post/6216392f2d17f22050cf1a2b) 或 [yarn](https://nicelinks.site/post/62962d4bf6811e06619d2773) ，pnpm 具有以下功能特色：

- **快速**：pnpm 比其他包管理器快 2 倍；
- **高效**：node_modules 中的文件链接自特定的内容寻址存储库；
- **支持 monorepos**：pnpm 内置支持单仓多包；
- **到处工作**：支持 Windows、Linux 和 macOS；
- **严格**：pnpm 默认创建了一个非平铺的 node_modules，因此代码无法访问任意包；
- **确定性**：有一个名为 `pnpm-lock.yaml`；
- **实战考验**：自 2016 年以来， [各种规模](https://nicelinks.site/redirect?url=https://pnpm.io/users) 的团队都在生产中使用；

**项目背景**：pnpm 使用内容可寻址文件系统，将所有模块目录中的所有文件，存储在磁盘上。使用 npm 或 Yarn 时，如果您有 100 个项目使用 lodash，那么磁盘上将有 100 个 lodash 副本。使用 pnpm，lodash 将存储在内容可寻址存储中，因此：

1.  如果你依赖不同版本的 lodash，只有不同的文件才会被添加到 store。如果 lodash 有 100 个文件，并且新版本仅对其中一个文件进行了更改， `pnpm update` 则只会将 1 个新文件添加到存储中。
2.  所有文件都保存在磁盘上的一个位置。安装软件包时，它们的文件从该单个位置链接，不消耗额外的磁盘空间。使用硬链接或引用链接（写时复制）执行链接。

带来的结果是：您节省了数千兆字节的磁盘空间，并且安装速度大大加快！如果您想了解有关 `node_modules` pnpm 创建的独特结构，以及它为何能在 Node.js 生态系统中正常工作的更多详细信息，请阅读文章： [Flat node_modules is not the only way](https://nicelinks.site/redirect?url=https://pnpm.io/blog/2020/05/27/flat-node-modules-is-not-the-only-way) 。

── 出自[倾城之链 - Fast, disk space efficient package manager | pnpm](https://nicelinks.site/post/62989af00f40a860b1599de2)

## [ZincSearch - A modern search engine](https://nicelinks.site/post/629894090f40a860b1599de0)

**标签**：[`搜索`](https://nicelinks.site/tags/搜索) · [`引擎`](https://nicelinks.site/tags/引擎) · [`开源`](https://nicelinks.site/tags/开源)

**关键字**：ZincSearch, ZincLabs, Zinc, Search, Search Engine, Search System

> ZincSearch is the simplest and easiest search system to get up and running. It's an open source easy-to-use search engine to solves your observability needs.

![倾城之链 - ZincSearch - A modern search engine](https://oss.nicelinks.site/zincsearch.com.png?x-oss-process=style/png2jpg)

**推荐语**： [ZincSearch](https://nicelinks.site/redirect?url=https://zincsearch.com/) ，一个现代化的、简单的、**易用的**、[开源的](https://nicelinks.site/redirect?url=https://github.com/zinclabs/zinc)搜索引擎。可以基于 Zinc 进行全文索引的搜索引擎。它是 Elasticsearch 的轻量级替代品，并且使用一小部分资源运行。它使用 [bluge](https://nicelinks.site/redirect?url=https://github.com/blugelabs/bluge) 作为底层索引库。它提供了许多功能，帮助您在几分钟内启动并运行，可以很好地解决您的搜索诉求。您可以从以下几个特征，来领略 ZincSearch 的强大功能：

- 支持**全文搜索**；
- 具备嵌入式网页用户界面；
- 与 Elasticsearch API 兼容；
- 无需提前定义模式，它会自动发现模式；
- 聚合，支持进行分面搜索并分析您的数据；

ZincSearch **专为全文搜索而构建**；它是一个可用于任何类型文本数据的搜索引擎。它可用于日志、指标、事件等。它允许您进行全文搜索等。例如，将服务器日志发送到 ZincSearch，或者您可以推送您的应用程序数据并提供全文搜索，或者您可以使用 ZincSearch 在您的应用程序中构建搜索栏。

**为什么使用 ZincSearch**？官方给出了以下好处：

### 较低的资源要求（CPU、内存）

降低基础设施成本；每个开发人员，都可以在他们的笔记本电脑上运行它，而不会消耗太多资源。

### 易于操作

降低人力成本；可以更快发布应用。

### 无状态服务器（实验阶段）

- ZincSearch 致力于提供可以水平扩展的无状态服务器。
- 在 S3 和 MinIO 上存储数据允许您根据负载启动和关闭服务器。

### 边缘搜索

- 通常要搜索在边缘生成的日志/数据，由于搜索服务器的资源要求很高，您需要将它们发送到集中式日志系统。
- ZincSearch 允许您在边缘搜索，其占用空间小。

如果您有打造**站内搜索**的诉求，相信 `ZincSearch` 将会是您值得选取的方案。倘若你对它感兴趣，想了解更多，可参见 [ZincSearch 文档](https://nicelinks.site/redirect?url=https://docs.zincsearch.com/)。

── 出自[倾城之链 - ZincSearch - A modern search engine](https://nicelinks.site/post/629894090f40a860b1599de0)

## [泡泡](https://nicelinks.site/post/6296dc83f6811e06619d2775)

**标签**：[`社区`](https://nicelinks.site/tags/社区) · [`开源`](https://nicelinks.site/tags/开源)

> 🔥A artistic "twitter like" community built on gin+zinc+vue+ts 清新文艺微社区

![倾城之链 - 泡泡](https://oss.nicelinks.site/www.paopao.info.png?x-oss-process=style/png2jpg)

**推荐语**： [PaoPao](https://nicelinks.site/redirect?url=https://www.paopao.info/) ，🔥 一个清新文艺的微社区（类似 Twitter）。基于账号密码注册，即可使用（实际体验，需要绑定`手机号`，才能正常发帖——正常操作流程）。主要由以下优秀的开源项目/工具构建：

- [Go](https://nicelinks.site/redirect?url=https://go.dev/) (1.17+)：谷歌开源编程语言，支持大规模构建快速、可靠和高效的软件；
- [Gin](https://nicelinks.site/redirect?url=https://gin-gonic.com/)：是一个用 Golang 编写的全功能 Web 框架，侧重性能和生产力；
- [Node.js](https://nicelinks.site/post/5f376ebe1751843ef894c899) (14+)：是一个免费的、开源的、跨平台的 JavaScript 运行时环境；
- MySQL (5.7+)：是流行的关系型数据库管理系统，广泛地应用在中小型网站中；
- [Redis](https://nicelinks.site/post/603e39560c8e4b046a182003) ：是一个开源（BSD 授权）的内存数据结构存储，用作数据库、缓存和消息中介；
- [Zinc](https://nicelinks.site/redirect?url=https://zincsearch.com/) ：一款轻量级全文搜索引擎，可用于任何类型文本数据；
- [TypeScript](https://nicelinks.site/post/6278fdeaac00ce3f9b11a8ef)：一种开源的程式语言，是 JavaScript 类型的超集；
- [Vue](https://nicelinks.site/post/5b1a221c0526c920d6dfaada)：是一款友好的、多用途且高性能的渐进式  `JavaScript`  框架；
- [Vite.js](<[https://vitejs.dev/](https://nicelinks.site/post/6010e1b10c71de1fb957b64e)>)：  一个基于浏览器原生 ES imports 的开发服务器；
- [TailwindCSS](https://nicelinks.site/post/5fd20cb4c06d6302c1907ec7)：一个实用为先的 CSS 框架，用于快速构建自定义用户界面；
- [Naive UI](https://nicelinks.site/redirect?url=https://www.naiveui.com/)：基于 Vue3 的组件库，完整，主题可调，使用 TypeScript，快；

值得一提的是，该项目有在 [Github 开源](https://nicelinks.site/redirect?url=https://github.com/rocboss/paopao-ce) ，目前支持 Git 克隆源码，以及通过 [宝塔](https://nicelinks.site/post/60a2544b22e2eb43fca1a9eb) （简单好用的服务器运维面板）这两种安装方式，感兴趣的朋友不妨了解下。

── 出自[倾城之链 - 泡泡](https://nicelinks.site/post/6296dc83f6811e06619d2775)

## [Home | Yarn - Package Manager](https://nicelinks.site/post/62962d4bf6811e06619d2773)

**标签**：[`npm`](https://nicelinks.site/tags/npm) · [`JavaScript`](https://nicelinks.site/tags/JavaScript) · [`Web开发`](https://nicelinks.site/tags/Web开发)

**关键字**：package manager, yarn, yarnpkg, configuration, yarnrc

> Fast, reliable, and secure dependency management.

![倾城之链 - Home | Yarn - Package Manager](https://oss.nicelinks.site/yarnpkg.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Yarn](https://nicelinks.site/redirect?url=https://yarnpkg.com/)，对你的代码来说是一个包管理器， 你可以通过它使用全世界开发者的代码，或者分享自己的代码。 Yarn 做这些快捷、安全、可靠，所以你不用担心什么。通过  `Yarn`，你可以使用其他开发者针对不同问题的解决方案，使自己的开发过程更简单。 使用过程中遇到问题，你可以将其上报或者贡献解决方案。一旦问题被修复，Yarn 会更新保持同步。

`Yarn`  是 Facebook, Google, Exponent 和 Tilde 开发的一款新的 JavaScript 包管理工具。它并没有试图完全取代 [npm](https://nicelinks.site/post/6216392f2d17f22050cf1a2b)（Npm Package Manager）。Yarn 同样是一个从 npm 注册源获取模块的新的 CLI 客户端。注册的方式不会有任何变化 —— 你同样可以正常获取与发布包。它存在的目的是解决团队在使用  `npm`  面临的少数问题。当然，在  `Node`  版本断更替中，Npm 本身也在积极更新。

`Yarn`  具有**稳定**、**创新**、**高效**、**开放性**等几大特征，并以很高频率在迭代更新，只为让开发者拥有理想的开发体验，这对于 Web 前端开发者非常友好。我本人作为 Web 开发者这个角色，就更喜欢使用 Yarn，并整理有 [Npm vs Yarn 之备忘详单](https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/) 一文，感兴趣的朋友可以分享下您的看法。

最后：「**工欲善其事，必先利其器**」；不管用何种工具，唯有深入了解其全貌，知其优、晓其劣，方能更好选择更适合自己，并且驾驭它，使之为自己高效、快意的生活增姿添色。

── 出自[倾城之链 - Home | Yarn - Package Manager](https://nicelinks.site/post/62962d4bf6811e06619d2773)

## [Colorfu | Make beautiful but also meaningful wallpapers.](https://nicelinks.site/post/6295f213eefd9b0665f43d72)

**标签**：[`图片编辑器`](https://nicelinks.site/tags/图片编辑器) · [`设计`](https://nicelinks.site/tags/设计) · [`工具`](https://nicelinks.site/tags/工具)

> ColorFu is where people can use words, colors, patterns and images to make unique wallpapers to express their feelings or ideas.

![倾城之链 - Colorfu | Make beautiful but also meaningful wallpapers.](https://oss.nicelinks.site/colorfu.art.png?x-oss-process=style/png2jpg)

**推荐语**：[Colorfu](https://nicelinks.site/redirect?url=https://colorfu.art/) 用来制作美丽、但也有意义的壁纸的网站；在 Colorfu，您可以使用文字、颜色、图案和图像，制作独特的壁纸，来表达您的感受或想法。Colorfu 使用极其简单，打开网站，即可开启制作。它具有以下功能特色：

- 有一些有趣的调色板可以帮助您表达自己的感受；
- 支持从图像中提取颜色；
- 拥有一些表情符号和表情符号，可以激发您的想象力；
- 支持多种设备：PC、手机、pad 等等。

值得一提的是，Colorfu 在 [Github 开源](https://nicelinks.site/redirect?url=https://github.com/pearmini/colorfu)，您如果感兴趣，可以基于源码开发更多您喜欢的功能。

── 出自[倾城之链 - Colorfu | Make beautiful but also meaningful wallpapers.](https://nicelinks.site/post/6295f213eefd9b0665f43d72)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下客服微信），🤲 。

![倾城之链 - 客服微信](https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-%E5%BE%AE%E4%BF%A1-mini.jpeg)

## 本期文末寄语

一别都门三改火，天涯踏尽红尘，依然一笑做春温。无波真古井，有节是秋筠。  
惆怅孤帆连夜发，送行淡月微云，樽前不用翠眉颦。**人生如逆旅，我亦是行人**。  
── 北宋 · 苏轼《临江仙 送钱穆父》

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

![小程序码 - 倾城之链](https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1)

### 您可能感兴趣的文章

- [优质网站同好者周刊（第 66 期）- 倾城之链](https://blog.nicelinks.site/weekly-066/)
- [优质网站同好者周刊（第 65 期）- 倾城之链](https://blog.nicelinks.site/weekly-065/)
- [优质网站同好者周刊（第 64 期）- 倾城之链](https://blog.nicelinks.site/weekly-064/)
- [优质网站同好者周刊（第 63 期）- 倾城之链](https://blog.nicelinks.site/weekly-063/)
- [优质网站同好者周刊（第 62 期）- 倾城之链](https://blog.nicelinks.site/weekly-062/)
- [优质网站同好者周刊（第 61 期）- 倾城之链](https://blog.nicelinks.site/weekly-061/)
- [优质网站同好者周刊（第 60 期）- 倾城之链](https://blog.nicelinks.site/weekly-060/)
- [优质网站同好者周刊（第 59 期）- 倾城之链](https://blog.nicelinks.site/weekly-059/)
- [优质网站同好者周刊（第 58 期）- 倾城之链](https://blog.nicelinks.site/weekly-058/)
- [优质网站同好者周刊（第 57 期）- 倾城之链](https://blog.nicelinks.site/weekly-057/)
- [优质网站同好者周刊（第 56 期）- 倾城之链](https://blog.nicelinks.site/weekly-056/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ "欲问美图何处寻？倾城之链有定音")
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
