[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [Frontend developer tools, all-in-one place!](https://nicelinks.site/post/626144f296c4c82f728e8434)

**标签**：[`前端开发`](https://nicelinks.site/tags/前端开发) · [`开发者`](https://nicelinks.site/tags/开发者) · [`聚合`](https://nicelinks.site/tags/聚合)

**关键字**：web developer, developer, website design, web designer, webdev tools, indie maker

> A directory of tools organized by category for frontend developers

![倾城之链 - Frontend developer tools, all-in-one place!](https://oss.nicelinks.site/devtooly.com.png?x-oss-process=style/png2jpg)

**推荐语**：[devtooly.com](https://nicelinks.site/redirect?url=https://devtooly.com/)（为开发者而生），一个面向**前端开发人员**的工具目录，按**类别**组织以方便使用。其中聚合类别（方向）很多，诸如：CSS 效果生成器、渐变调色板 🎨、图标、插图、动画库、产品模型、学习资源、设计理念、无代码（No Code）、Chrome 扩展等等；每个方向，也都收录了很多业界较好的产品（看起来都是以英文为主）；对网站地址、描述，收录日期，推荐人等信息，也做了说明。如果您从事 Web 前端开发，或收藏下，在相关方向工具选取上，以做参考。

── 出自[倾城之链 - Frontend developer tools, all-in-one place!](https://nicelinks.site/post/626144f296c4c82f728e8434)

## [Uptime Kuma](https://nicelinks.site/post/625eb42bac29ce06470af87d)

**标签**：[`自动化`](https://nicelinks.site/tags/自动化) · [`工具`](https://nicelinks.site/tags/工具) · [`开源`](https://nicelinks.site/tags/开源)

> A self-hosted monitoring tool.

![倾城之链 - Uptime Kuma](https://oss.nicelinks.site/uptime.kuma.pet.png?x-oss-process=style/png2jpg)

**推荐语**：[Uptime Kuma](https://nicelinks.site/redirect?url=https://uptime.kuma.pet/)，是一个类似于“Uptime Robot”的自托管监控工具（开源项目）。它支持灵活配置，拥有漂亮的界面，支持任何人托管部署，针对监控 Web 网站或者后台接口，有非常高的价值。它具有以下功能特征：

- 监控 HTTP(s) / TCP / HTTP(s) 关键字 / Ping / DNS 记录 / 推送 / Steam 游戏服务器的正常运行时间。
- 花哨的、反应式的、快速的 UI/UX。
- 通过 Telegram、Discord、Gotify、Slack、Pushover、电子邮件 (SMTP) 和 [70 多种通知服务发送通知，请单击此处查看完整列表](https://nicelinks.site/redirect?url=https://github.com/louislam/uptime-kuma/tree/master/src/components/notifications)。
- 默认 20 秒间隔；
- 支持多种语言；
- 简单状态页面；
- Ping 图（Ping Chart）；
- 证书信息（Certificate Info）；

### 如何安装？

[Uptime Kuma](https://nicelinks.site/redirect?url=https://uptime.kuma.pet/) 支持 Docker、基于 Node.js 工具链（外加 Git、 pm2）等方式部署，以下是基于 Docker（目前最近版本：[louislam/uptime-kuma](https://nicelinks.site/redirect?url=https://hub.docker.com/r/louislam/uptime-kuma/tags) 为 `v1.14.1`） 的安装方式：

```bash
docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1
```

当然，您如果喜欢，也可以基于 Docker Compose 来安装，详情可参见文章：[如何基于 Docker 部署 Uptime Kuma 服务？](https://forum.lovejade.cn/d/166-docker-uptime-kuma)。

[Uptime Kuma](https://nicelinks.site/redirect?url=https://uptime.kuma.pet/) 服务，在我来看非常有价值；可将其部署起来，监控正在维护的各种服务（如[倾城之链](https://nicelinks.site/)、[曼妙句子](https://read.lovejade.cn/)）；倘若应用出现问题，使得我能在第一时间知道，从而快速排查并修复，从而最大限度降低损失。

── 出自[倾城之链 - Uptime Kuma](https://nicelinks.site/post/625eb42bac29ce06470af87d)

## [Puppeteer | Headless Chrome Node.js API](https://nicelinks.site/post/625c3735ac29ce06470af877)

**标签**：[`自动化`](https://nicelinks.site/tags/自动化) · [`Chrome`](https://nicelinks.site/tags/Chrome) · [`开发者`](https://nicelinks.site/tags/开发者)

**关键字**：Puppeteer, Headless Chrome, Node.js API, Node library, Web, DevTools Protocol, Chromium, 开发者工具, 测试, 自动化, 爬虫, 浏览器

> Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

![倾城之链 - Puppeteer | Headless Chrome Node.js API](https://oss.nicelinks.site/pptr.dev.png?x-oss-process=style/png2jpg)

**推荐语**：[Puppeteer](https://nicelinks.site/redirect?url=https://pptr.dev/)，是 Google Chrome 团队官方的无界面（Headless）Chrome **开源工具**，它是一个 `Node` 库，提供了一个高级的 API 来控制 DevTools 协议上的无头版 Chrome 。也可以配置为使用完整（非无头）的 Chrome。`Chrome` 素来在浏览器界稳执牛耳，因此，Chrome Headless 必将成为 Web 应用**自动化测试**的行业标杆。使用 `Puppeteer`，相当于同时具有 Linux 和 Chrome 双端的操作能力，应用场景可谓非常之多。

### Puppeteer 能做些什么呢？

你可以在浏览器中，手动完成的大部分事情（精确），理论上都可以使用 `Puppeteer` 完成！你可以从以下几个示例开始：

- 生成页面的截图和 PDF；
- 抓取 SPA 并生成预先呈现的内容（即 SSR）；
- 从网站抓取你需要的内容；
- 自动表单提交，UI 测试，键盘输入等；
- 创建一个最新的自动化测试环境；
- 捕获您的网站的时间线跟踪，以帮助诊断性能问题；

就拿本站[倾城之链](https://nicelinks.site/)（基于 Vue 所开发的单页应用（SPA））来讲，很多场景就运用了 `Puppeteer` ；比如：SEO 优化，就有使用到 Puppeteer。针对浏览器蜘蛛爬取，则返回 `Puppeteer` 抓取并预先呈现的内容。此外，用户所提交的网站，在后台审核通过后，也是基于 `Puppeteer` 来自动截图网站首页图片并保存。

早在 2017 年，就有使用 `Puppeteer`，并写了诸如：[大前端神器安利之 Puppeteer](https://www.jeffjade.com/2017/12/17/134-kinds-of-toss-using-puppeteer/) 等文章，时隔多年，`Puppeteer` 已经更新至 `V1.17.0`，其丰富的 API，基本上可以覆盖用户在浏览器进行的任何操作；如果您的工作，涉及到浏览器操作，完全可以基于 Puppeteer 工具，来使其**自动化**运转，从而提升工作效率、减少时间消耗、改善生活品质。

另外，值得一提的是，`Puppeteer` 是基于 Node.js 的工具库，您只需会写 JavaScript 代码，即可轻松玩转，详情可参见 [Puppeteer 文档](https://nicelinks.site/redirect?url=https://pptr.dev/)说明。当然，`写代码`并不是必须的，[Headless Recorder](https://nicelinks.site/redirect?url=https://github.com/checkly/headless-recorder)：是一个 Chrome 扩展程序，可以记录您的浏览器交互（操作），并生成 Playwright 或 Puppeteer 脚本，您完全可以基于这款 Chrome 扩展，来辅助您生成自动化脚本；如此一来，无论您是否会编码，皆能轻松基于 Puppeteer 开启您的自动化之旅。关于 Puppeteer 更多使用场景、以及使用方法，后续将会总结更多文章分享，敬请期待。

── 出自[倾城之链 - Puppeteer | Headless Chrome Node.js API](https://nicelinks.site/post/625c3735ac29ce06470af877)

## [印象笔记 | 工作必备效率应用](https://nicelinks.site/post/625be4cbac29ce06470af875)

**标签**：[`思维导图`](https://nicelinks.site/tags/思维导图) · [`时间管理`](https://nicelinks.site/tags/时间管理) · [`软件`](https://nicelinks.site/tags/软件)

**关键字**：印象笔记, 笔记软件, 云笔记, 思维导图, 脑图, 办公软件, 在线笔记, markdown, OCR, 便签, 笔记, 记事本, 头脑风暴, 时间管理, 日志, todo, 知识管理, 任务管理, 扫描, 扫描全能王网页版, 工作效率, office, 在线文档, yinxiang, evernote, 协同办公, OKR, 超级笔记, 在线编辑, 大纲笔记, 文档管理, PDF 编辑, 清单, 日记, 有道云笔记, 幕布, Xmind, Markdown 在线编辑器

> 作为你的第二大脑，记录就用印象笔记。印象笔记可以帮助你高效工作、学习与生活。支持无缝多端同步，快速保存微信、微博、网页等内容，一站式完成信息的收集备份、高效记录、分享和永久保存。

![倾城之链 - 印象笔记 | 工作必备效率应用](https://oss.nicelinks.site/www.yinxiang.com.png?x-oss-process=style/png2jpg)

**推荐语**：[印象笔记](https://nicelinks.site/redirect?url=https://www.yinxiang.com/)，由北京印象笔记科技有限公司出品，从建立之初就致力于做用户的“第二大脑”。在信息快速增长更迭的时代，印象笔记帮助用户聚焦高价值信息，是对高价值信息进行获取、收藏、梳理、分享和协作的平台， 帮用户保存记忆，激发灵感，创想未来。它具有以下功能特征：

- **多端同步**：随时随地查看和备份信息；
- **内容收藏**：一键储存高价值网页和文章；
- **资料管理**：全面支持 Office、PDF 等格式；
- **信息共享**：快捷共享笔记，高效完成协作；

记录整理信息，是人类永恒且越来越重要的需求，[印象笔记](https://nicelinks.site/redirect?url=https://www.yinxiang.com/)愿景与使命：**是为中国个人及企业团队用户提供智能、便捷、安全的产品和服务，成为无处不在的“第二大脑”，融汇无限信息，拓展人类思维边界。**。因此，印象笔记具有如下功能特性：

### 轻松收集一切

无论是点滴灵感、待办清单、或者会议记录、项目资料、高价值文章，你可以用印象笔记保存一切。笔记会自动同步到所有设备：手机、电脑、平板，多终端一键同步！

### 有序整理信息

从文字、图片、录音、清单到网页、思维导图、文档和附件，支持丰富的文件格式，帮你妥帖保存。搭配智能搜索功能，文字、图片甚至附件中的文字皆可迅速锁定。

### 快速协作共享

无需跳出应用即可一键分享笔记，轻松管理项目，共享资料，实时讨论，高效达成协作目标。

> 2008 年 Evernote 在硅谷创立，创始人斯泰潘·帕奇科夫(Stepan Pachikov)是硅谷的科技先锋，也是第一个研究出如何将手写字迹输入到电脑中的人。他一生致力于解开人类记忆之谜，试图创造人类大脑的延伸，他的理念成就了 Evernote。2012 年，Evernote 进入中国，发布中文版产品：印象笔记，成为最早在中国部署数据服务器、为中国用户提供专属服务，并与中国互联网服务充分对接的硅谷公司。

[印象笔记](https://nicelinks.site/redirect?url=https://www.yinxiang.com/)功能极其丰，譬如：云端同步（多设备管理资料）、剪藏（一键存储网页和文章）、搜索（智能检索全文及附件）、模板（海量模版库一键套用）、清单（高效管理待办事项）、超级笔记（新一代在线编辑器）、OCR 扫描（拍图识字、快捷存储）、思维导图（高效梳理思路和信息）、桌面便签（随时记录灵感想法）、支持 Markdown（简单高效的沉浸式写作体验）、分享（笔记快速共享和协作）、协作（多人多屏动态编辑）、空间（全新知识管理结构）、知识星图（AI 赋能第二大脑）、支持所有设备（在所有设备上安装印象笔记，无需担心电脑不在身边，随时随地保存和查阅信息。）等等。

早在 2014 年左右，有接触并高频使用`印象笔记`，后续，记录相关就渐渐转移至**个人博客**；多年过去，它的功能已经到了如此丰富的地步；有需要的朋友，可以尝试使用。

── 出自[倾城之链 - 印象笔记 | 工作必备效率应用](https://nicelinks.site/post/625be4cbac29ce06470af875)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下客服微信），🤲 。

<div align="center"><img src="https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-%E5%BE%AE%E4%BF%A1-mini.jpeg" style="width: 200px;min-width: 200px;" alt="倾城之链 - 客服微信"></div>

## 本期文末寄语

“当我看见一个危险信号的时候，我不跟它争执。我躲开！几天以后，如果一切看起来还不错，我就再回来。我是这么想的，如果我正沿着铁轨往前走，看见一辆火车以每小时 60 英里的速度向我冲来，我会跳下铁轨让火车开过去，而不会愚蠢地站在那里不动。它开过去之后，只要我愿意，我总能再回到铁轨上来。”── 美国股市投机客 · 杰西·利弗莫尔

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

![小程序码 - 倾城之链](https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1)

### 您可能感兴趣的文章

- [优质网站同好者周刊（第 60 期）- 倾城之链](https://blog.nicelinks.site/weekly-060/)
- [优质网站同好者周刊（第 59 期）- 倾城之链](https://blog.nicelinks.site/weekly-059/)
- [优质网站同好者周刊（第 58 期）- 倾城之链](https://blog.nicelinks.site/weekly-058/)
- [优质网站同好者周刊（第 57 期）- 倾城之链](https://blog.nicelinks.site/weekly-057/)
- [优质网站同好者周刊（第 56 期）- 倾城之链](https://blog.nicelinks.site/weekly-056/)
- [优质网站同好者周刊（第 55 期）- 倾城之链](https://blog.nicelinks.site/weekly-055/)
- [优质网站同好者周刊（第 54 期）- 倾城之链](https://blog.nicelinks.site/weekly-054/)
- [优质网站同好者周刊（第 53 期）- 倾城之链](https://blog.nicelinks.site/weekly-053/)
- [优质网站同好者周刊（第 52 期）- 倾城之链](https://blog.nicelinks.site/weekly-052/)
- [优质网站同好者周刊（第 51 期）- 倾城之链](https://blog.nicelinks.site/weekly-051/)
- [优质网站同好者周刊（第 50 期）- 倾城之链](https://blog.nicelinks.site/weekly-050/)
- [优质网站同好者周刊（第 49 期）- 倾城之链](https://blog.nicelinks.site/weekly-049/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ "欲问美图何处寻？倾城之链有定音")
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
