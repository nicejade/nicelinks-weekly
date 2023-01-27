[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [ Let's Encrypt](https://nicelinks.site/post/63c75ff9ac46415757ac1486)

**标签**：[`自动化`](https://nicelinks.site/tags/自动化) · [`工具`](https://nicelinks.site/tags/工具) · [`网络安全`](https://nicelinks.site/tags/网络安全)

> Let's Encrypt is a free, automated, and open certificate authority brought to you by the nonprofit Internet Security Research Group (ISRG).

![倾城之链 -  Let's Encrypt](https://oss.nicelinks.site/letsencrypt.org.png?x-oss-process=style/png2jpg)

**推荐语**：[Let's Encrypt](https://letsencrypt.org/) ，是一个免费、自动化和开放的证书颁发机构，由非营利性互联网安全研究小组 (ISRG) 提供给您。截止目前（2023 年 01 月 18 日）已为 3 亿个网站提供 TLS 证书，支持更安全、更尊重隐私的网络。

Let's Encrypt 是一个于 2015 年三季度推出的数字证书认证机构，旨在以自动化流程消除手动创建和安装证书的复杂流程，并推广使万维网服务器的加密连接无所不在，为安全网站提供免费的传输层安全性协议（TLS）证书。简单来说，即为**网站提供 HTTPS 证书**；相比于其他平台提供，Let's Encrypt 将使得这一过程十分**简单、自动化并且免费**。

如今，每个网站都应该用 HTTPS，就算是全静态站点也同样如此，防止运营商劫持严重干扰访问者的体验。HTTPS 证书分为 3 类：DV 域名验证证书；OV 组织机构验证证书；EV 增强的组织机构验证证书。每类证书在审核和验证方面要求严格程度不同，浏览器会在地址栏给予不同证书不一样的展现。一般性网站使用 **DV 证书**足矣，浏览器表现为地址栏前会有绿色的小锁。

笔者最近这些年，部署十余个网站，有小部分基于 Github Pages 提供的 HTTPS 服务；其他网站则通过「腾讯 HTTPS 证书」服务，申请的免费 DV 证书，有效期 1 年；虽然过程简单，但操作繁琐：需要在阿里云、腾讯云、服务器等各处折腾下，网站较多，每隔几月便要操作一番，不胜其烦。2023，计划将这一流程切换至「基于自动化 Let's Encrypt」，以节省私人时间。

── 出自[倾城之链 - Let's Encrypt](https://nicelinks.site/post/63c75ff9ac46415757ac1486)

## [OSS Insight](https://nicelinks.site/post/63c7543bac46415757ac1392)

**标签**：[`数据分析`](https://nicelinks.site/tags/数据分析) · [`Github`](https://nicelinks.site/tags/Github) · [`工具`](https://nicelinks.site/tags/工具)

**关键字**：tidb, mysql, github events, github archive, github metrics, oss, compare oss, oss analysis, pingcap, insight tool, data visualization, rank, trend

> The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.

![倾城之链 - OSS Insight](https://oss.nicelinks.site/ossinsight.io.png?x-oss-process=style/png2jpg)

**推荐语**：[OSS Insight](https://nicelinks.site/redirect?url=https://ossinsight.io/) 是一个强大的工具，通过分析数十亿个 GitHub 事件，提供对开源世界的全面、有价值和趋势洞察。它提供对各个 [GitHub](https://nicelinks.site/tags/GitHub) 存储库和开发人员的深入分析，以及使用相同指标比较两个存储库的能力。它具有以下功能特征：

### 可见且独特的开发者

从开发人员的贡献行为中洞察开发人员的生产力、工作节奏和协作。

- 基本的：
  - 星级、行为、最常用语言、贡献趋势；
  - 代码（提交/拉取请求/拉取请求大小/代码行更改）、代码审查、问题；
- 先进的：
  - 各类贡献活动的贡献时间分布；
  - 有关所有公共存储库中贡献活动的每月统计信息；

### 可视化和全面的存储库

从存储库的状态了解**代码更新频率和流行程度**。

- 基本的：

  - 星标、分支、问题、提交、拉取请求、贡献者、编程语言、修改的代码行；
  - 这些指标的历史趋势；
  - 问题的时间成本，拉取请求；

- 先进的：
  - 观星者、问题创建者、拉取请求创建者的地理分布；
  - 公司追星族（stargazers）、问题创建者、拉动请求创建者的分布情况；

### 排名和动态

从开发人员的贡献行为中洞察**开发人员的生产力**、**工作节奏**和**协作**。

[OSS Insight](https://nicelinks.site/redirect?url=https://ossinsight.io/) 是一个有趣、好玩、功能强大的开源洞察工具，可以帮助用户深入分析 GitHub 上任意一个代码仓库和开发者，还可以将两个代码仓库进行多维度的（贡献者、代码提交情况、协作讨论情况等）比较，并提供全面、有价值和趋势的开源见解。您可以使用它，针对开发者、代码仓库进行分析，对最新技术趋势的实时预测等。

── 出自[倾城之链 - OSS Insight](https://nicelinks.site/post/63c7543bac46415757ac1392)

## [The Visual Collaboration Platform for Every Team | Miro](https://nicelinks.site/post/63c68357a327170ab79b0997)

**标签**：[`白板`](https://nicelinks.site/tags/白板) · [`思维导图`](https://nicelinks.site/tags/思维导图) · [`可视化`](https://nicelinks.site/tags/可视化)

> Scalable, secure, cross-device and enterprise-ready team collaboration whiteboard for distributed teams. Join 40M+ users from around the world.

![倾城之链 - The Visual Collaboration Platform for Every Team | Miro](https://oss.nicelinks.site/miro.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Miro](https://nicelinks.site/redirect?url=https://miro.com/)，是您的团队的可视化平台，可以一起联系、协作和创造，帮助您把想法从更好变成最好；更准确说，Miro 是一款功能齐全的白板和思维导图工具，可以随时随地与任何人共享以进行实时协作。如果你用过它，你就会知道活泼的界面是多么令人印象深刻。Miro 还提供使用 Slack 和数百个模板轻松登录的功能。它具有以下功能特征：

### 一起工作，无论你在哪里工作

在办公室、远程或两者兼而有之，借助 Miro，无论您身在何处，您的团队都可以在一个空间中联系、协作和共同创造。

### 连接 你的工具， 关闭你的标签

无论您是想编辑 Google 文档、解决 Jira 问题，还是通过 Zoom 进行协作，Miro 都可以与您已经使用和喜爱的工具进行 100 多种集成。

### 为各种团队打造

无论您从事用户体验与设计，抑或营销、产品管理、工程、顾问、敏捷教练、销售量等，Miro 都能提供支持，并且集成您最喜欢的工具，如 Slack、Figma、Notion 等。

Miro，领先的视觉协作平台，使远程、在办公室和混合团队能够跨格式、工具、渠道和时区进行沟通和协作，而不受物理位置、会议空间和白板的限制。这让您可以围绕一个愿景凝聚您的团队，简化工作流程优先级，并提供解决方案，无论他们在何处工作。

── 出自[倾城之链 - The Visual Collaboration Platform for Every Team | Miro](https://nicelinks.site/post/63c68357a327170ab79b0997)

## [monday.com | A new way of working](https://nicelinks.site/post/63c67edea327170ab79b091c)

**标签**：[`工作`](https://nicelinks.site/tags/工作) · [`工作效率`](https://nicelinks.site/tags/工作效率) · [`在线`](https://nicelinks.site/tags/在线)

> monday.com Work OS is an open platform where anyone can create the tools they need to run every aspect of their work.

![倾城之链 - monday.com | A new way of working](https://oss.nicelinks.site/monday.com.png?x-oss-process=style/png2jpg)

**推荐语**：[monday.com](https://nicelinks.site/redirect?url=https://monday.com/)，是一个用于项目管理和任务协调的在线工具，用以创建适合您工作方式的工作流程并节省时间。其特别之处在于：它在结构和[可视化](https://nicelinks.site/tags/可视化)方面提供了很大的灵活性。这使得管理不同类型团队的活动和项目变得容易，例如创意和设计团队、软件开发、市场营销、项目管理、销售和 CRM 等。提供了一种灵活而强大的方式来围绕组织的目标连接团队、资源、流程和工具。他们称自己为“工作操作系统”（Work OS），旨在简化您的工作以获得**最大的生产力**。

2021 年 6 月 10 日标志着 [monday.com](https://nicelinks.site/redirect?url=https://monday.com/) 新时代的开始——他们敲响了开市钟，正式成为纳斯达克上市公司。如今，Monday 继续通过发展成为一家多产品公司，来推动 Monday 的发展，为个人、团队和公司提供强大的产品，帮助他们将工作愿景变为现实。值得一提的是，Monday 在 2022 年获得 103% 的增长，如果您对它感兴趣，可以移步 [关于 Monday](https://monday.com/p/about/)。

── 出自[倾城之链 - monday.com | A new way of working](https://nicelinks.site/post/63c67edea327170ab79b091c)

## [AlleyRead - 重塑你的信息源](https://nicelinks.site/post/63c3e0b1a327170ab79afe45)

**标签**：[`发现`](https://nicelinks.site/tags/发现) · [`导航`](https://nicelinks.site/tags/导航) · [`资源`](https://nicelinks.site/tags/资源)

**关键字**：alleyread, 小巷阅读, 竹白, 小报童, substack, revue, 实时通讯, newsletter, 邮件通讯, 订阅, subscribe

> AlleyRead 是一款帮助用户发现、收藏、预览 newsletter 的导航站，通过用户推荐、平台审核，从国内外全网筛选优质内容源。Alleyread 致力于提升读者内容探索和阅读体验，基于此开发设计一系列优质功能。

![倾城之链 - AlleyRead - 重塑你的信息源](https://oss.nicelinks.site/alleyread.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Alleyread](https://nicelinks.site/redirect?url=https://alleyread.com/) 是一款帮助用户发现、收藏、预览 newsletter 的导航站，通过用户推荐、平台审核，从国内外全网筛选优质内容源。在 AlleyRead 您可以获得关于 newsletter 的基本信息和扩展阅读，供你做订阅参考，你可以通过本站直接进入 newsletter 创作者主页，查看更多内容。AlleyRead 希望在尽量不收集用户隐私的情况下，为用户带来优质使用体验，可以为你提供以下服务：

### 优质内容库

AlleyRead 人工筛选并收录了大量中文/英文 newsletter 内容源，包含国内外、不同平台、不同领域的内容创作者，形成优质的 newsletter 库。未来我们将持续更新内容库，并增加扩展阅读等功能，为用户提供更好的内容发现和阅读服务。

### **推荐收录**

AlleyRead 欢迎用户推荐你认为不错的 newsletter，也鼓励创作者主动自荐。未来 AlleyRead 也将围绕优质 newsletter 曝光和为创作者引流，探索更多的功能和服务。

### 发现与收纳

随机发现模式，让您在每次刷新时总是看到完全随机的全新推荐；站内所有 Newsletter 都依据内容属性和创作方向被打上标签，您可以根据自身需求，更便捷地主动筛选查询特定内容。AlleyRead 基于浏览器识别，无需登录，你便可以将感兴趣的 newsletter 进行临时收藏。

### **专题推荐**

AlleyRead 将不定期发布，围绕特定专题的 newsletter 集锦和最新观察；

### **更多服务**

Alleyread 致力于提升读者内容探索和阅读体验。AlleyRead 将围绕**创作者发现**和**读者服务**两个方向开发更多有用的功能。

AlleyRead，旨在发现优质  Newsletter，重塑你的信息源；截止目前（2023 年 01 月 15 日），它收录了 227 个各类型订阅站点，方便让你发现你感兴趣的内容；此外，个人也觉得主动信息获取，远比算法信息流要好很多。如果您对该网站感兴趣，可移步至 [关于 AlleyRead](https://nicelinks.site/redirect?url=https://www.wolai.com/alleyread/cG9qjed93nkiQ961NJJjK6) 以了解更多。

── 出自[倾城之链 - AlleyRead - 重塑你的信息源](https://nicelinks.site/post/63c3e0b1a327170ab79afe45)

## [金数据 - 人人可用的在线表单工具](https://nicelinks.site/post/63c3ddeba327170ab79afdbb)

**标签**：[`数据`](https://nicelinks.site/tags/数据) · [`数据分析`](https://nicelinks.site/tags/数据分析) · [`问卷调查`](https://nicelinks.site/tags/问卷调查)

**关键字**：金数据, 问卷调查, 表单, 满意度调查, 报名表

> 金数据是一个人人可用的在线表单工具，帮你轻松完成日常数据的收集、整理和分析工作，发现数据的价值。应用场景覆盖全行业，包括问卷调查、意见反馈、活动报名、信息登记、在线订单、测评考试、在线抽奖等等，金数据可以让聪明的你更加聪明的工作，提升工作效率，让企业数据化运转。

![倾城之链 - 金数据 - 人人可用的在线表单工具](https://oss.nicelinks.site/jinshuju.net.png?x-oss-process=style/png2jpg)

**推荐语**：[金数据](https://nicelinks.site/redirect?url=https://jinshuju.net/) ，人人可用的 业务数据收集工具；聪明又强大，帮助你轻松收集和管理日常工作中的数据，提升工作效率。它不仅收集数据，而且具备以下功能特征：

### 客户满意度调查

不知道他们对产品或服务有什么样的想法，发送一份问卷调研一下

### 组织别开生面的活动

不管是线上还是线下，每个人的信息都能快速汇总到一张表里

### 用投票来拉动高人气

好看的投票页面，帮你扩大活动影响力，所有投票结果都能实时显示

### 做个简单的随堂考试

来看看你的学员和员工是否学有所成，一个简单的考试告诉你

### 收集客户的预约信息

简约、美观、灵活的在线预约支付系统，适用于各行各业

### 在线收款，帮你赚钱

平均三次浏览，就会给你带来一次新的生意机会

### 组合 47 个字段， 随时随地收集数据

你可任意组合 47 个字段，创建问卷调查、发布到微信、数据会源源不断地汇入后台。

### 每 3 次浏览 可获得 1 个客资

你可以自由地在表单上收款、抽奖、核销； 在页面上添加销售的联系方式，让客户直接联系销售。在活动页面添加地图导航，或者是添加视频、音乐，让页面生动起来！

### 只需 2 步， 把数据共享给团队

你和团队可以在同一个表单上协作和共享数据。甚至，你可以分享给其他公司的合作伙伴，共同促成交易。

### 一步配置， 创建对外查询数据库

只需要简单配置，你就可以搭建数据查询系统，将数据安全地共享给外部。

[金数据](https://nicelinks.site/redirect?url=https://jinshuju.net/) ，创立于 2012 年，属 明略科技集团 旗下品牌，是一家为个人和企业用户解决数据收集管理问题的公司。旗下有 [金数据](https://nicelinks.site/redirect?url=https://jinshuju.net/) 表单和**浩客 XM** 用户体验分析平台两款产品。 [金数据](https://nicelinks.site/redirect?url=https://jinshuju.net/) 是人人可用的在线表单工具，帮助用户收集和管理日常工作中的数据，提升工作效率。任何行业和岗位的人员，无需特殊技能，都可以方便地创建出符合业务需求的表单。如果您对其感兴趣，想了解更多，可以移步 [关于金数据](https://jinshuju.net/about) 。

── 出自[倾城之链 - 金数据 - 人人可用的在线表单工具](https://nicelinks.site/post/63c3ddeba327170ab79afdbb)

## [Plausible Analytics | Simple, privacy-friendly Google Analytics alternative](https://nicelinks.site/post/63c39ddea327170ab79afb76)

**标签**：[`分析`](https://nicelinks.site/tags/分析) · [`自托管`](https://nicelinks.site/tags/自托管) · [`开源`](https://nicelinks.site/tags/开源)

> Plausible is a lightweight and open-source Google Analytics alternative. Your website data is 100% yours and the privacy of your visitors is respected.

![倾城之链 - Plausible Analytics | Simple, privacy-friendly Google Analytics alternative](https://oss.nicelinks.site/plausible.io.png?x-oss-process=style/png2jpg)

**推荐语**：[Plausible Analytics](https://nicelinks.site/redirect?url=https://plausible.io/) 是一种简单、轻量级 (< 1 KB)、开源且保护隐私的 Google Analytics 替代品。它不使用 cookie，并且完全符合 GDPR、CCPA 和 PECR。您可以[自行托管](https://nicelinks.site/tags/自托管)或让其在云端为您运行 Plausible。Plausible 由欧洲拥有的云基础设施提供支持 🇪🇺。[这是 Plausible 网站统计的现场演示](https://plausible.io/plausible.io)。为什么要使用 Plausible 的分析？官方给出了以下理由：

### 快速且易于集成

易于设置并与流行的工具集成，例如 WordPress、Ghost、Squarespace、Wix 和 Weebly。支持单页应用和基于散列的路由。

### 强大而灵活的 API

Plausible 的 API 提供了一种以编程方式检索您的统计信息、将您的指标发送到您想要的任何位置，并以您想要的任何形状呈现它们的方法。

### 电子邮件和 Slack 报告

通过每周或每月报告密切关注您的流量。获取流量峰值通知，这样您就不会错过 Hacker News 的报道。报告可以发送给多个收件人。

### 将脚本作为第一方连接提供

您可以设置一个代理，作为第一方连接从您的域名为 Plausible 的脚本提供服务，并获得更准确的统计数据。还有用于服务器端跟踪的事件 API。

### 拥有和控制您的数据

您的网站数据绝不会与任何第三方共享或出售给任何第三方。它永远不会因个人和行为趋势而被货币化、挖掘和收获。

### 按您单击的任何内容过滤仪表板

通过筛选更深入地挖掘并获得更多见解。单击任何指标以按其过滤仪表板。混合搭配过滤器。

### 与搜索控制台集成

与 Google Search Console 集成，可以直接在您的 Plausible 仪表板中查看人们用来在 Google 搜索结果中查找您网站的搜索查询。

### 分析营销活动

使用 UTM 标签标记您的付费广告、电子邮件和社交媒体帖子，并从点击到转化分析您的电子商务和营销活动。

Plausible 团队认为：对于大多数网站所有者来说，Google Analytics 是矫枉过正。Plausible Analytics 易于使用和理解，无需培训或先前经验。Plausible Analytics 专为注重隐私的网站所有者打造。您将获得有价值且可操作的统计数据，以帮助您改进工作，同时让访客保持愉快的体验。

从固有经验上看，绝大多数网站都使用 GA（Google Analytics）；但近些年 google 将其升级至 GA4，跟升级的朋友感触一致，它并不好用；而且 GA 现有版本将于 2023 年 7 月停止使用；另一方面 [Umami](https://nicelinks.site/post/6399ca80e524a8432ed1e00a)、 Plausible 等谷歌分析（Google Analytics）的替代方案，却在不断优化完善，看起来是时候转投自部署（自托管）产品，构建属于自己的网站分析平台了。

── 出自[倾城之链 - Plausible Analytics | Simple, privacy-friendly Google Analytics alternative](https://nicelinks.site/post/63c39ddea327170ab79afb76)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下客服微信），🤲 。

![倾城之链 - 客服微信](https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-%E5%BE%AE%E4%BF%A1-mini.jpeg)

## 本期文末寄语

道常无名，朴虽小，天下莫能臣也。侯王若能守之，万物将自宾。天地相合以降甘露，民莫之令而自均。始制有名，名亦既有，夫亦将知止。知止可以不殆。譬道之在天下，犹川谷之于江海。── 春秋末期人 · 老子李耳《道德经》第三十二章

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

![小程序码 - 倾城之链](https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1)

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 100 期）- 倾城之链](https://blog.nicelinks.site/weekly-100/)
- [优质网站同好者周刊（第 99 期）- 倾城之链](https://blog.nicelinks.site/weekly-099/)
- [优质网站同好者周刊（第 98 期）- 倾城之链](https://blog.nicelinks.site/weekly-098/)
- [优质网站同好者周刊（第 96 期）- 倾城之链](https://blog.nicelinks.site/weekly-096/)
- [优质网站同好者周刊（第 95 期）- 倾城之链](https://blog.nicelinks.site/weekly-095/)
- [优质网站同好者周刊（第 94 期）- 倾城之链](https://blog.nicelinks.site/weekly-094/)
- [优质网站同好者周刊（第 93 期）- 倾城之链](https://blog.nicelinks.site/weekly-093/)
- [优质网站同好者周刊（第 92 期）- 倾城之链](https://blog.nicelinks.site/weekly-092/)
- [优质网站同好者周刊（第 91 期）- 倾城之链](https://blog.nicelinks.site/weekly-091/)
- [优质网站同好者周刊（第 90 期）- 倾城之链](https://blog.nicelinks.site/weekly-090/)
- [优质网站同好者周刊（第 89 期）- 倾城之链](https://blog.nicelinks.site/weekly-089/)
- [优质网站同好者周刊（第 88 期）- 倾城之链](https://blog.nicelinks.site/weekly-088/)
- [优质网站同好者周刊（第 87 期）- 倾城之链](https://blog.nicelinks.site/weekly-087/)
- [优质网站同好者周刊（第 86 期）- 倾城之链](https://blog.nicelinks.site/weekly-086/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ '欲问美图何处寻？倾城之链有定音')
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
