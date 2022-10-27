[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [Turbo | 为 JavaScript 和 TypeScript 优化的增量绑定器和构建系统，用 Rust 编写](https://nicelinks.site/post/635936a6775cbe1cdc6eb333)

**标签**：[`构建`](https://nicelinks.site/tags/构建) · [`Web开发`](https://nicelinks.site/tags/Web开发) · [`Rust`](https://nicelinks.site/tags/Rust)

> Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust.

![倾城之链 - Turbo | 为 JavaScript 和 TypeScript 优化的增量绑定器和构建系统，用 Rust 编写](https://oss.nicelinks.site/turbo.build.png?x-oss-process=style/png2jpg)

**推荐语**：[Turbo](https://nicelinks.site/redirect?url=https://turbo.build/) 为 JavaScript 和 TypeScript 优化的增量绑定器和 [构建](https://nicelinks.site/tags/构建) 系统，用 [Rust](https://nicelinks.site/post/606a826800d67605dca7de5a) 编写。Turbo 提供 [Turborepo](https://nicelinks.site/redirect?url=https://turbo.build/repo) 和 [Turbopack](https://nicelinks.site/redirect?url=https://turbo.build/pack) 两款产品。

### Turborepo：建造船舶的系统

Turborepo 是一个用于 JavaScript 和 TypeScript 代码库的高性能构建系统。它重新设想了 Facebook 和 Google 使用的构建系统技术，以消除维护负担和开销。为什么选择 Turborepo？官方给出以下说明：

- **增量生成**：构建一次已经够痛苦的了，Turborepo 会记住你构建的内容，并跳过已经计算过的内容。
- **内容感知散列**：Turborepo 查看文件的内容，而不是时间戳来找出需要构建什么。
- **并行执行**：以最大并行度使用每个内核执行构建，而不会浪费空闲 CPU。
- **远程缓存**：与您的队友和 CI/CD 共享远程构建缓存，以实现更快的构建。
- **零运行时开销**：Turborepo 不会干扰您的运行时代码或触及您的源代码映射。
- **修剪的子集**：通过仅生成构建特定目标所需的 monorepo 子集，加快 PaaS 部署。
- **任务管道**：定义任务之间的关系，然后让 Turborepo 优化构建内容和时间。
- **在你所在的地方与你相遇**：使用 Lerna？保持您的软件包发布工作流程，并使用 Turborepo 加速任务运行。
- **浏览器中的配置文件**：生成构建配置文件并将其导入 Chrome 或 Edge 中，以了解哪些任务花费的时间最长。

### Turbopack：Rust-powered Webpack 的后继者

凭借增量行为和适应性强的捆绑策略，Turbopack 可为任何规模的应用提供快速灵活的开发体验。为什么选择 Turbopack？官方给出以下理由：

- **增量设计**：构建一次就足够了，Turbopack 一旦执行了某项任务，就再也不会执行了。
- **生态系统友好型**：获得对 TypeScript、JSX、CSS、CSS 模块、[WebAssembly](https://nicelinks.site/post/618b8df4a18dec25673723ae) 等的现成支持。
- **闪电般快速的 HMR**：无论您的应用程序大小如何，热模块更换（HMR）都能保持快速。
- **React 服务器组件**：在使用 Turbopack 时获得对 [React](https://nicelinks.site/post/5b1294b5e93ed2618cfac134) 服务器组件的本机支持。
- **同时多个环境目标**：针对多种环境（浏览器、服务器、边缘、SSR、React Server 组件）进行构建和优化。
- **Next.js 支持**：Turbopack 还将在本地和云中支持 Next.js 的生产构建。

根据 Turbo 官方平台给出的数据对比，其构建速度是 Webpack 的 100 倍、 [Vite](https://nicelinks.site/post/6010e1b10c71de1fb957b64e) 的 10 倍；（个人对 Vite 的构建速度非常满意）；Turbo 团队正在构建一个可以跟上您团队的构建系统。您将看到您的 CI 变得更快，重复的工作被削减，您的 [NPM](https://nicelinks.site/post/6216392f2d17f22050cf1a2b) 脚本变得更简单。您将获得一个世界级的开发环境，而没有维护负担。

── 出自[倾城之链 - Turbo | 为 JavaScript 和 TypeScript 优化的增量绑定器和构建系统，用 Rust 编写](https://nicelinks.site/post/635936a6775cbe1cdc6eb333)

## [Answer - Build Q&A community](https://nicelinks.site/post/6357d331775cbe1cdc6ea39b)

**标签**：[`网站生成器`](https://nicelinks.site/tags/网站生成器) · [`知识`](https://nicelinks.site/tags/知识) · [`社区`](https://nicelinks.site/tags/社区)

> An open-source knowledge based community software. You can use it to quickly build your Q&A community for product technical support, user Q&A, fans communication, and more.

![倾城之链 - Answer - Build Q&A community](https://oss.nicelinks.site/answer.dev.png?x-oss-process=style/png2jpg)

**推荐语**：[Answer](https://nicelinks.site/redirect?url=https://answer.dev/) ，一个**基于开源知识**的社区软件。您可以使用它来快速建立您的**问答社区**，以获得产品技术支持、客户支持、用户交流等。Answer 具有**高度可扩展性**和**现代性**，你可以利用它有效地建立各种问答社区，从客户支持到用户交流。它具有以下功能特征：

### 问答平台

帮助成员解决问题并促进社区参与。您的专家很乐意贡献、验证和支持正确的信息。您的信息保持最新且值得信赖。

### 有组织的

使用标签将问题和帮助内容分类。它们使其他人更容易找到知识。使用搜索快速找到答案。

### 集成

使用插件和您喜欢的服务配置您的社区。这样您就可以改进您的工作流程、发展您的社区或改进您的其他工具（即将推出）。

### 游戏化

用声望和徽章游戏化了问答平台。因此，社区成员和团队可以在协作和完成工作方面获得乐趣（即将推出）。

Answer 对初创公司非常有帮助，可用来组织帮助中心；Answer 采用 [Go](https://nicelinks.site/post/606aa86a00d67605dca7de5c)、[TypeScript](https://nicelinks.site/post/6278fdeaac00ce3f9b11a8ef)、HTML 等语言编写；部署非常简单，基于 [docker](https://nicelinks.site/post/5b7036890f8719053c094d68)、 docker-compose 分分钟即可完成；目前，Answer 仍在非常积极的发展中，如果您对它感兴趣，可以前往 [Github Answer](https://github.com/answerdev/answer) 以了解更多。

── 出自[倾城之链 - Answer - Build Q&A community](https://nicelinks.site/post/6357d331775cbe1cdc6ea39b)

## [得到 APP - 知识就是力量，知识就在得到](https://nicelinks.site/post/635773cb775cbe1cdc6e9dd5)

**标签**：[`知识`](https://nicelinks.site/tags/知识) · [`学习`](https://nicelinks.site/tags/学习) · [`公开课`](https://nicelinks.site/tags/公开课)

**关键字**：知识, 知识搜索, 得到 APP, 得到, 得到老师, 得到课程, 听书, 电子书, 知识的力量, 知识图谱, 新知识, 得到高研院, 得到用户, 得到网页版, 得到 PC, 罗振宇, 在线听书, 电子书阅读, 听书网, 听书下载, 电子书下载, 电子书网站

> 搜索感兴趣的知识，学习相关课程、电子书、听书。罗振宇·罗辑思维、薛兆丰·经济学、武志红·心理学、张明楷·刑法学等 100 多位专家学者的独家课程免费试读。多设备使用得到，提升你的学习效率。

![倾城之链 - 得到 APP - 知识就是力量，知识就在得到](https://oss.nicelinks.site/www.dedao.cn.png?x-oss-process=style/png2jpg)

**推荐语**：[得到](https://nicelinks.site/redirect?url=https://www.dedao.cn/) ，知识服务应用；旨在为用户提供“省时间的高效知识服务” ，2016 年 5 月上线，由罗辑思维团队出品，提倡碎片化学习方式，让用户短时间内获得有效的知识。内容包括人文、科学、艺术、 商业、方法技能、互联网、创业、心理学、文化、职场等等（个人从未曾使用「得到」，无法对其内容质量做评价）。

2017 年 12 月，得到 APP 入选 App Store 2017 年度精选的年度趋势（知识付费类）。自 2020 年 9 月底以来，国家网信办部署开展为期两个月的集中专项整治。专项整治以来，督促“得到”等 20 家重点“知识社区问答”平台开展自查自纠。2022 年 10 月 13 日，工业和信息化部信息通信管理局通报，得到 10.6.0 版本 APP **强制、频繁、过度索取权限**，该 APP 应在 10 月 20 日前完成整改，逾期不整改或整改不到位的，将**依法依规处置**。

── 出自[倾城之链 - 得到 APP - 知识就是力量，知识就在得到](https://nicelinks.site/post/635773cb775cbe1cdc6e9dd5)

## [Learn to Code with Interactive Tutorials - Scrimba.com](https://nicelinks.site/post/6356838980eb7b118fa82761)

**标签**：[`学习`](https://nicelinks.site/tags/学习) · [`教程`](https://nicelinks.site/tags/教程) · [`前端开发`](https://nicelinks.site/tags/前端开发)

> Scrimba is a fun and fast way of learning to code! Our interactive courses and tutorials will teach you React, Vue, Angular, JavaScript, HTML, CSS, and more.

![倾城之链 - Learn to Code with Interactive Tutorials - Scrimba.com](https://oss.nicelinks.site/scrimba.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Scrimba.com](https://nicelinks.site/redirect?url=https://scrimba.com/) ，是一种有趣而快速的学习代码的方式 我们的互动课程和教程将教你 React、Vue、Angular、JavaScript、HTML、CSS，以及更多。他们的目标是：以健身房会员资格为代价，创建最好的编码学校。为实现目标，该团队为**代码截屏**创建了一种新的视频格式。我们称之为“稀松布”（scrims）。这种格式是他们学校的支柱。不仅因为它带来了卓越的学习体验。但也因为它使我他们够更快地迭代，吸引更好的教师，促进更好的同伴学习，保持较低的服务器成本等等。Scrimba 具有以下功能特色：

### 通过交互式截屏视频更快地学习

他们的交互式截屏视频让您可以随时编辑代码，就像您与老师结对编程一样。因此，您将编写更多代码并学得更快。

### 获得同行的帮助和支持

目前，他们的社区聊天中有超过 1000 名 Scrimba 学生在线。这是一个友好的空间，您可以在这里寻求帮助、分享您的代码、获得职业建议并结识志同道合的人。

### 破解您的第一份开发人员工作

除了网络开发之外，他们的职业道路还教您如何获得第一份工作。你将建立一个投资组合，改进你的 LinkedIn，练习编码面试问题，等等。

### 现场活动可帮助您保持一致

独自学习编码很难。为了帮助您保持正轨，他们会在一周内安排市政厅聊天、专家访谈、现场编码节目等。

### 认识世界上最好的编程老师

他们为每个科目精心挑选了最好的老师，并将其组合成一种体验。您可以与 Gary Simon、Cassidy Williams 和 Kevin Powell 等专家一起编写代码。

---

### Scrimba 是如何工作的？

Scrimba 是一种用于交流代码的**互动视频格式**。它使创造者和观看者的体验都大大改善。了解 Scrimba 的最简单方法是观看下面这段 1 分钟的截屏。 [欢迎来到 Scrimba](https://scrimba.com/casts/cast-279) 。

作为一个浏览者，你可以在任何时候暂停并编辑代码。因此，如果你在理解上有困难，只需按下暂停键，跳入环境，玩弄代码，直到你正确理解。Scrimba 还使创作经验不那么令人沮丧，因为我们消除了创建编码截屏的所有麻烦。不再有设置、编辑、编码、上传和重新编码。只需在你说话时编码，然后立即发布。

他们记录的是**基本事件**，而不是像素。当重放 Scrimba 截屏时，他们完全重现了创作者的行为。这为互动性、创作、响应性、搜索和推荐开辟了一个全新的可能性世界。

在 Scrimba 官网，他们对其**课程质量**做了以下介绍：

- **基于项目**：在学习的同时构建真正的产品；
- **以工作为中心**：学习行业相关技能；
- **点对点**：从同行那里获得帮助和支持；
- **自定进度**：按照自己的节奏学习；
- **认证**：完成获取证书的路径；
- **经济实惠**：训练营价格的 1%；

> 根据 2020 年 5 月 劳工统计局数据：“美国前端 Web 开发人员的平均工资为 77,874 美元”，对前端开发人员的需求预计将以每年 8% 的速度增长，这表明所有公司——不仅仅是硅谷的大人物——都在发展成为科技公司。

Scrimba 所提供的职业道路（The Frontend Developer Career Path），将使您成为可雇用的前端开发人员，并教您如何完成工作面试。它包含超过 70 小时的一流教程、数百个编码挑战和数十个实际项目。在这里，你还可以学到响应式设计、用户界面设计、代码审查、求职面试等技能。

[Scrimba.com](https://nicelinks.site/redirect?url=https://scrimba.com/) ，创新交互型前端学习平台；不同于传统的前端文字或视频教程，Scrimba 开创式地将教学讲解、编辑器、浏览器三者结合，所学即所见，所及即所得。不同于传统的视频教学除了评论就什么也不能做，Scrimba 是音频、编码记录回放的形式展现，**用户能随时暂停，同时还能进行编辑**，结合 discord 还可以在线交流。这种创新型交互格式视频，非常适合学习编程；以上只是对 Scrimba 大致介绍，如果您对它感兴趣，可以前往官网以了解更多。

── 出自[倾城之链 - Learn to Code with Interactive Tutorials - Scrimba.com](https://nicelinks.site/post/6356838980eb7b118fa82761)

## [Practical Deep Learning for Coders - Practical Deep Learning](https://nicelinks.site/post/63561e1580eb7b118fa8221e)

**标签**：[`深度学习`](https://nicelinks.site/tags/深度学习) · [`机器学习`](https://nicelinks.site/tags/机器学习) · [`学习`](https://nicelinks.site/tags/学习)

> A free course designed for people with some coding experience, who want to learn how to apply deep learning and machine learning to practical problems.

![倾城之链 - Practical Deep Learning for Coders - Practical Deep Learning](https://oss.nicelinks.site/course.fast.ai.png?x-oss-process=style/png2jpg)

**推荐语**：[Practical Deep Learning](https://nicelinks.site/redirect?url=https://course.fast.ai/) ，是一门**免费课程**，专为具有一定编程经验、希望学习如何将 [深度学习](https://nicelinks.site/tags/深度学习) 和 [机器学习](https://nicelinks.site/tags/机器学习) 应用于实际问题的人而设计。深度学习可以做各种各样令人惊奇的事情。例如，本网站中的所有插图都是通过深度学习制作的，使用 [DALL-E 2](https://nicelinks.site/redirect?url=https://openai.com/dall-e-2/) 。

这份 2022 年面向编码员的实用深度学习教程，录制于 University of Queensland，涵盖的主题包括如何：

- 为计算机视觉、自然语言处理、表格分析和协作过滤问题构建和训练深度学习模型；
- 创建随机森林和回归模型；
- 部署模型（Deploy models）；
- 使用 PyTorch，世界上发展最快的深度学习软件，加上流行的库，如 fastai 和 Hugging Face；

本课程共有 9 节课，每节课约 90 分钟。您不需要任何特殊的硬件或软件，课程中将向您展示如何使用免费资源来构建和部署模型。你也不需要任何大学数学，会在课程中教你微积分和线性代数。

如果你没有技术或数学背景也没关系（如果你有也没关系！）；主办方编写这门课程的目的是让尽可能多的人都能接触到深度学习。唯一的先决条件是你知道如何编写代码（一年的经验就足够了），最好是用 Python 编写，并且你至少上过高中数学课程。

深度学习，是一种通过多层神经网络来「提取和转换」数据的计算机技术；使用案例包括从**人类语音识别**到**动物图像分类**。很多人认为你需要各种各样难以找到的东西，来获得深度学习的伟大成果，但正如你在本课程中所看到的，这些人是错误的。比如说，其实不需要大量的数学运算，真相是高中数学（high school）就足够。

如果您想了解更多，比如：为什选择学习深度学习（deep learning）、将可以学到什么、以及如何开始学习，这份教程都给了详细的解释。**深度学习**具有强大、灵活和简单的特点。这就是为什么很多人认为它应该被应用于许多学科。根据观察和想象，现在以及未来，深度学习在主流技术中，占有一席之地。对它感兴趣的朋友，当立即投入精力去学习。

── 出自[倾城之链 - Practical Deep Learning for Coders - Practical Deep Learning](https://nicelinks.site/post/63561e1580eb7b118fa8221e)

## [pcl.js | Point Cloud Library (PCL) for browser, powered by WebAssembly](https://nicelinks.site/post/635556d080eb7b118fa81d0b)

**标签**：[`WebAssembly`](https://nicelinks.site/tags/WebAssembly) · [`程序库`](https://nicelinks.site/tags/程序库) · [`开源`](https://nicelinks.site/tags/开源)

> Point Cloud Library (PCL) for browser, powered by WebAssembly.｜在浏览器运行的点云库 (PCL)，由 WebAssembly 提供支持。

![倾城之链 - pcl.js | Point Cloud Library (PCL) for browser, powered by WebAssembly](https://oss.nicelinks.site/pcljs.org.png?x-oss-process=style/png2jpg)

**推荐语**：[pcl.js](https://nicelinks.site/redirect?url=https://pcljs.org/) 是在浏览器中运行的 点云库（PCL），由 Emscripten 和 [WebAssembly](https://nicelinks.site/tags/WebAssembly) 提供支持。它具有以下功能特征：

- **TypeScript 类型支持**：使用 TypeScript 编写，具有可预测的静态类型；
- **支持所有现代浏览器**：支持所有现代浏览器，未来将提供对 Nodejs 的支持；
- **方便移植**：提供与 PCL(C++) 相似的 API，简单易用；

点云库（PCL）是一个用于 2D/3D 图像和点云处理的大型开放项目。PCL 包含许多最先进的算法，包括过滤、特征估计、表面重建、配准、模型拟合和分割（点云预处理、配准点云、分割物体、提取关键点）。PCL 用自己的数据格式 PCD 存储点云，也支持以其他格式加载和保存数据集。

点云 是空间中的一组数据点。 这些点可以表示 3D 形状或对象。 每个点位置都有其一组笛卡尔坐标 (X, Y, Z)。 点云通常由激光雷达或摄影测量软件生成，它们测量物体外表面上的许多点。

── 出自[倾城之链 - pcl.js | Point Cloud Library (PCL) for browser, powered by WebAssembly](https://nicelinks.site/post/635556d080eb7b118fa81d0b)

## [Lyra | The offline search experience](https://nicelinks.site/post/6355463780eb7b118fa81bdb)

**标签**：[`全文搜索`](https://nicelinks.site/tags/全文搜索) · [`搜索`](https://nicelinks.site/tags/搜索) · [`引擎`](https://nicelinks.site/tags/引擎)

> Lyra is a fully-featured full-text search engine that runs wherever JavaScript runs, including browsers, servers, React Native, edge networks, and more.

![倾城之链 - Lyra | The offline search experience](https://oss.nicelinks.site/lyrasearch.io.png?x-oss-process=style/png2jpg)

**推荐语**：[Lyra](https://nicelinks.site/redirect?url=https://lyrasearch.io/) 是一个全功能的 [全文搜索](https://nicelinks.site/tags/全文搜索) 引擎，可以在 JavaScript 运行的任何地方运行，包括浏览器、Bun、Deno、Node.js、服务器、React Native、边缘网络（edge networks）等。

Lyra 是一个用 TypeScript 编写的现代化、无依赖性的全文搜索引擎。
它的构建考虑到了速度，并在几微秒内完成了大多数搜索查找。

它实现了一个非常快速的普通前缀树，以执行高效的查找并轻松地序列化多种格式，例如**数据包**，**消息包**的**协议缓冲器**。

它的主要目标是能够在边缘网络上运行，例如**自动气象站边处的 Lambda**，**云闪工人**的 **Netlify 函数**，所以期待一些更新。

由于它是用 TypeScript 编写的，因此可以在**任何** JavaScript 运行时，包括浏览器、服务器、React Native 等。它以 Lyra （天琴座）的名字命名，因为它具有**分布式**和**高度可扩展**的特性。

── 出自[倾城之链 - Lyra | The offline search experience](https://nicelinks.site/post/6355463780eb7b118fa81bdb)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下客服微信），🤲 。

![倾城之链 - 客服微信](https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-%E5%BE%AE%E4%BF%A1-mini.jpeg)

## 本期文末寄语

策马扬鞭傲神州，  
笑看风云度春秋。  
三千烦恼皆抛下，  
十万名山任遨游。  
── 电视剧《浪迹天涯》台词（编剧：马志全）

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

![小程序码 - 倾城之链](https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1)

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 88 期）- 倾城之链](https://blog.nicelinks.site/weekly-088/)
- [优质网站同好者周刊（第 87 期）- 倾城之链](https://blog.nicelinks.site/weekly-087/)
- [优质网站同好者周刊（第 86 期）- 倾城之链](https://blog.nicelinks.site/weekly-086/)
- [优质网站同好者周刊（第 85 期）- 倾城之链](https://blog.nicelinks.site/weekly-085/)
- [优质网站同好者周刊（第 84 期）- 倾城之链](https://blog.nicelinks.site/weekly-084/)
- [优质网站同好者周刊（第 83 期）- 倾城之链](https://blog.nicelinks.site/weekly-083/)
- [优质网站同好者周刊（第 82 期）- 倾城之链](https://blog.nicelinks.site/weekly-082/)
- [优质网站同好者周刊（第 81 期）- 倾城之链](https://blog.nicelinks.site/weekly-081/)
- [优质网站同好者周刊（第 80 期）- 倾城之链](https://blog.nicelinks.site/weekly-080/)
- [优质网站同好者周刊（第 79 期）- 倾城之链](https://blog.nicelinks.site/weekly-079/)
- [优质网站同好者周刊（第 78 期）- 倾城之链](https://blog.nicelinks.site/weekly-078/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ '欲问美图何处寻？倾城之链有定音')
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)
