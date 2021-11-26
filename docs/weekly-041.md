[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [AppFlowy.IO](https://nicelinks.site/post/619e3b54465c2155e2d15882)

**标签**：[`笔记`](https://nicelinks.site/tags/笔记) · [`任务管理器`](https://nicelinks.site/tags/任务管理器) · [`Notion`](https://nicelinks.site/tags/Notion)

>AppFlowy is an open source alternative to Notion. You are in charge of your data and customizations.

![倾城之链 - AppFlowy.IO](https://oss.nicelinks.site/www.appflowy.io.png?x-oss-process=style/png2jpg)

**推荐语**：[AppFlowy.IO](https://nicelinks.site/redirect?url=https://www.appflowy.io/)，是 Notion 的开源替代品，### 专为需要更多控制和灵活性的团队而打造，您只需负责您的数据和自定义。[AppFlowy.IO](https://nicelinks.site/redirect?url=https://www.appflowy.io/) 的使命是：让任何人都可以创建适合他们需求的应用程序。根据官方描述，[AppFlowy.IO](https://nicelinks.site/redirect?url=https://www.appflowy.io/)  有以下功能特征“

1. **100% 控制您的数据**：在您的本地机器上下载并安装 AppFlowy。您拥有并控制您的个人数据。
2. **可广泛扩展**：对于那些没有编码经验的人，AppFlowy 使您能够创建适合您需求的应用程序。它建立在社区驱动的工具箱上，包括模板、插件、主题等。
3. **真正的本土体验**：支持离线模式，更快、更稳定。它还可以更好地与不同的设备集成。此外，AppFlowy 使用户能够访问网络上不可用的功能和可能性。

为什么要建造 [AppFlowy.IO](https://nicelinks.site/redirect?url=https://www.appflowy.io/)？官方给出了解释：Notion 一直是他们喜欢的项目和**知识管理工具**，因为它具有美学吸引力和功能性。该团队每天都在使用它，而且正在使用它的付费计划。然而，众所周知，Notion 有其局限性。这些包括弱数据安全性和与移动设备的兼容性差。同样，替代的协作工作场所管理工具也有其局限性。所有这些局限性使得他们的使命成为必要 ──  让任何人都可以创建适合他们需求的应用程序。目前 AppFlowy 已发布 `v0.0.2` 版本，感兴趣的朋友不妨了解下。

── 出自[倾城之链 - AppFlowy.IO](https://nicelinks.site/post/619e3b54465c2155e2d15882)

## [Hurl - Run and Test HTTP Requests](https://nicelinks.site/post/619ce835465c2155e2d1587f)

**标签**：[`工具`](https://nicelinks.site/tags/工具) · [`程序员`](https://nicelinks.site/tags/程序员)

>Hurl, run and test HTTP requests with plain text and curl. Hurl can run fast automated integration tests.

![倾城之链 - Hurl - Run and Test HTTP Requests](https://oss.nicelinks.site/hurl.dev.png?x-oss-process=style/png2jpg)

**推荐语**：[Hurl](https://nicelinks.site/redirect?url=https://hurl.dev/) 是一个命令行工具，它运行以简单**纯文本格式**定义的 **HTTP 请求**。它可以执行请求、捕获值并评估对标头和正文响应的查询。Hurl 非常通用：它可以用于**获取数据**和**测试 HTTP** 会话；其作用类似于 `curl`，但它是特别为测试而设计的，配置文件里面允许写断言，很适合在命令行测试 HTTP 接口；而且，还可以用于测试 HTTP 端点的性能。

为什么要使用 [Hurl](https://nicelinks.site/redirect?url=https://hurl.dev/)，官方给出以下几条优势特征：

- **文本格式**：对于 DevOps 和开发人员友好；
- **快速命令行界**面：本地开发和持续集成的命令行；
- **单二进制**：  易于安装，无需运行时间；

[Hurl](https://nicelinks.site/redirect?url=https://hurl.dev/) 是一个用 Rust 编写的轻量级二进制文件，在幕后，Hurl HTTP 引擎由 libcurl（最强大、最可靠的文件传输库之一） 提供支持，凭借其文本文件格式，Hurl 添加了语法糖来运行和测试 HTTP 请求，目前（2021.11）仍处于测试阶段，初用了下，感觉这是一个蛮有用的工具。其使用方式大致如下：

```bash
# sample-test.hurl
GET https://nicelinks.site/api/searchNiceLinks
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:70.0) Gecko/20100101 Firefox/70.0
[QueryStringParams]
keyword: Git
```

只需在终端运行 `hurl sample-test.hurl`，即可得到结果。如果您对此感兴趣，想更多了解 Hurl 的文件格式或语法、功能，可以参见 [Hurl Doc](https://nicelinks.site/redirect?url=https://hurl.dev/docs/hurl-file.html)。

── 出自[倾城之链 - Hurl - Run and Test HTTP Requests](https://nicelinks.site/post/619ce835465c2155e2d1587f)

## [Zhaoyun.art | 设计之路 | 我的学习笔记](https://nicelinks.site/post/619a366360f6c5569db65f25)

**标签**：[`设计`](https://nicelinks.site/tags/设计) · [`个人博客`](https://nicelinks.site/tags/个人博客) · [`设计师`](https://nicelinks.site/tags/设计师)

**关键字**：设计, 个人博客, 用户体验设计师, UI设计师

>一个用户体验设计师的个人博客和对互联网的一点迷思。

![倾城之链 - Zhaoyun.art | 设计之路 | 我的学习笔记](https://oss.nicelinks.site/www.zhaoyun.art.png?x-oss-process=style/png2jpg)

**推荐语**：[Zhaoyun.art](https://nicelinks.site/redirect?url=https://www.zhaoyun.art/)，一个用户体验设计师的个人博客（基于 [WordPress](https://nicelinks.site/post/602e4a576eaf2a7660805af1) 所搭建），用来承载该博主对互联网的一点迷思。知晓该网站的存在，是通过 Google 检索苏轼的那句“江海寄余生“；该网站看起来，特色设计风格、颇具文艺性内容，给我留下很不错的初次印象；抱着好奇心逛了下，发现在深耕**编程**、产品之余，学习些设计（如图像合成、数字绘景、插画等等），也是非常值得倾向的技能方向🧭；对此感兴趣的朋友们，不妨前往了解一下。

── 出自[倾城之链 - Zhaoyun.art | 设计之路 | 我的学习笔记](https://nicelinks.site/post/619a366360f6c5569db65f25)

## [NutUI - 移动端 Vue2、Vue3、小程序 组件库](https://nicelinks.site/post/6199fe5760f6c5569db65f22)

**标签**：[`组件库`](https://nicelinks.site/tags/组件库) · [`CSS`](https://nicelinks.site/tags/CSS) · [`Vue`](https://nicelinks.site/tags/Vue)

**关键字**：Vue3组件库, 移动端组件库, Vite, Vue组件库, Vue3, Vue2

>京东风格的轻量级移动端 Vue 组件库。

![倾城之链 - NutUI - 移动端 Vue2、Vue3、小程序 组件库](https://oss.nicelinks.site/nutui.jd.com.png?x-oss-process=style/png2jpg)

**推荐语**：[NutUI](https://nicelinks.site/redirect?url=https://nutui.jd.com/)，京东风格的轻量级移动端 Vue 组件库，适用于移动端 Vue2、Vue3、小程序等。相比较于其他组件库，[NutUI](https://nicelinks.site/redirect?url=https://nutui.jd.com/) 具有以下亮点特色：

- **京东风格**：遵循京东 App 10.0 设计规范；
- **前沿技术**：基于 Vue3 Vite2.x TypeScript；
- **适配多端**：基于 Taro 轻松开发多端小程序；
- **组件丰富**：70+ 组件，覆盖多数业务场景；

此外，一些常规功能，也都具备，诸如：支持按需引用、支持服务端渲染、支持定制主题等等。就个人感知来看，[NutUI](https://nicelinks.site/redirect?url=https://nutui.jd.com/) 相较于其他组件库，更加漂亮，可直接作用于对外产品，而不是内部管理后台。倘若，之后还将开发个人独立产品，将会选择 [NutUI](https://nicelinks.site/redirect?url=https://nutui.jd.com/) 作为首选**组件库**。

── 出自[倾城之链 - NutUI - 移动端 Vue2、Vue3、小程序 组件库](https://nicelinks.site/post/6199fe5760f6c5569db65f22)

## [飞书多维表格-融合表格和业务系统能力的新一代效率应用](https://nicelinks.site/post/6199f84c60f6c5569db65f20)

**标签**：[`应用`](https://nicelinks.site/tags/应用) · [`效率`](https://nicelinks.site/tags/效率) · [`在线`](https://nicelinks.site/tags/在线)

**关键字**：飞书多维表格, 多维表格, bitable, 数据管理, 业务管理系统, 轻量级业务系统, 零代码系统, 表格

>飞书多维表格是一款满足个性化需求的新一代效率应用。它具备表格的轻盈和业务系统的强大，融合了在线协作、信息管理和可视化能力，能够自适应团队思维和业务，满足你的个性化管理需求，让工具驱动业务飞跃。

![倾城之链 - 飞书多维表格-融合表格和业务系统能力的新一代效率应用](https://oss.nicelinks.site/bitable.feishu.cn.png?x-oss-process=style/png2jpg)

**推荐语**：[飞书多维表格](https://nicelinks.site/redirect?url=https://bitable.feishu.cn/)，是一款以表格为基础的新一代效率应用。它具备表格的轻盈和业务系统的强大，融合了在线协作、信息管理和可视化能力，能够自适应团队思维和业务发展需求，是具备个性化能力的业务管理工具。

[飞书多维表格](https://nicelinks.site/redirect?url=https://bitable.feishu.cn/)的每一行被称为「**记录**」，每一列被称为「**字段**」。每列字段的数据格式是固定的，保证你输入的数据规范有序。多维表格提供丰富的字段类型，满足你在表格中插入多样信息的需求。你可根据项目需求，选择添加不同的字段类型，以将每列的数据类型定为：多行文本、单选、多选、人员、日期、附件、数字、复选框、公式、单向关联、双向关联等。**视图**代表信息的展现形式。在飞书多维表格中，你可使用 5 种视图整理同一份数据。每新建一个视图，就等于为该份数据新增了一个展现、汇总形式。编辑任一视图中的数据信息，都将实时改变该数据源的其他视图。

相较于普通表格，[多维表格](https://nicelinks.site/redirect?url=https://bitable.feishu.cn/)是一个立体的信息系统，能助你从多种维度管理项目。可从以下 4 点了解多维表格的功能特点：

### 规范化

**多维表格的每一行被称为记录，每列被称为字段**。每列字段的数据格式是固定的，保证你输入的数据规范有序。多维表格提供丰富的字段类型，满足你在表格中插入多样信息的需求。可根据项目需求，选择添加不同的字段类型，以将每列的数据类型定为：多行文本、单选、多选（用于打多个标签）、人员、日期、附件、数字、公式、单向关联、双向关联、复选框、超链接等。

### 多视图

**多维表格能用多种视图呈现同一个数据源**。所有放入多维表格的数据，都能被实时转换为不同形式，你可一键切换不同视图，满足各部门人员的查阅需求。多维表格现为你提供**表格视图**、**看板视图**、**甘特视图**、**画册视图**和**表单视图**共 5 种样式。

#### 表格视图

用表格视图添加、整理多种类型数据，为信息管理打下良好基础。你还可以使用筛选、分组、排列功能更清晰直观地查看数据。在下图的任务管理场景中，应用了多行文本、单选、人员、日期和双向关联字段（从左到右）。如需增加字段，只需点击表格右上角的 **+ **加号按钮选择想要的字段类型。

### 易用性

在多维表格，告别业务系统的学习成本，无需代码基础，极速上手，一用就会。**轻轻拖动，更新数据**：拖动甘特视图时间条即可更新进展排期；将看板卡片拖拽到另一列即可更新该卡片记录的状态，管理项目任务。

### 协作性

你可在多维表格和多位协作者同时在线编辑，轻松解决异地、时差等远程协同难题。你也可以随时调整权限设置，保证信息安全。

玩转多维表格，让数据动起来，创建属于你的多维效率工具，[飞书多维表格](https://nicelinks.site/redirect?url=https://bitable.feishu.cn/)，或可了解一下。

── 出自[倾城之链 - 飞书多维表格-融合表格和业务系统能力的新一代效率应用](https://nicelinks.site/post/6199f84c60f6c5569db65f20)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下客服微信），🤲 。

<div align="center"><img src="https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-%E5%BE%AE%E4%BF%A1-mini.jpeg" style="width: 200px;min-width: 200px;" alt="倾城之链 - 客服微信"></div>

## 本期文末寄语

夜饮东坡醒复醉，归来仿佛三更。家童鼻息已雷鸣。敲门都不应，倚杖听江声。长恨此身非我有，何时忘却营营。夜阑风静縠纹平。**小舟从此逝，江海寄余生**。── 北宋 · 苏轼《临江仙·夜饮东坡醒复醉》

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

<img src="https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/300/h/300/interlace/1/ignore-error/1" style="width: 200px;min-width: 200px;" alt="小程序码 - 倾城之链"/>

### 您可能感兴趣的文章

- [优质网站同好者周刊（第 40 期）- 倾城之链](https://forum.lovejade.cn/d/119-40)
- [优质网站同好者周刊（第 39 期）- 倾城之链](https://forum.lovejade.cn/d/118-39)
- [优质网站同好者周刊（第 38 期）- 倾城之链](https://forum.lovejade.cn/d/116-38)
- [优质网站同好者周刊（第 37 期）- 倾城之链](https://forum.lovejade.cn/d/112-37)
- [优质网站同好者周刊（第 36 期）- 倾城之链](https://forum.lovejade.cn/d/109-36)
- [优质网站同好者周刊（第 35 期）- 倾城之链](https://forum.lovejade.cn/d/106-35)
- [优质网站同好者周刊（第 34 期）- 倾城之链](https://forum.lovejade.cn/d/101-34)
- [优质网站同好者周刊（第 33 期）- 倾城之链](https://forum.lovejade.cn/d/100-33)
- [优质网站同好者周刊（第 32 期）- 倾城之链](https://forum.lovejade.cn/d/96-32)
- [优质网站同好者周刊（第 31 期）- 倾城之链](https://forum.lovejade.cn/d/93-31)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ '欲问美图何处寻？倾城之链有定音')
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)