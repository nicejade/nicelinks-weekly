[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [htop - an interactive process viewer](https://nicelinks.site/post/6571e7e5c6424116973654fb)

**标签**：[`监控`](https://nicelinks.site/tags/监控) · [`开源`](https://nicelinks.site/tags/开源) · [`终端`](https://nicelinks.site/tags/终端)

>htop is a cross-platform interactive process viewer. htop allows scrolling the list of processes vertically and horizontally to see their full command lines and related information like memory and CPU consumption. Also system wide information, like load average or swap usage, is shown.

![倾城之链 - htop - an interactive process viewer](https://oss.nicelinks.site/htop.dev.png?x-oss-process=style/png2jpg)

**推荐语**：[htop](https://nicelinks.site/redirect?url=https://htop.dev/) 是一个跨平台的交互式系统 [监控](https://nicelinks.site/tags/监控) 工具，用于查看系统资源利用情况并管理运行中的进程（基于 C 语言编写）。它可以代替传统的 top 命令，提供更加直观、易用的界面以及更多功能。

### htop 作用

1.  实时监控系统资源利用情况：包括 CPU 使用率、内存占用、交换空间使用情况、进程数量等。
2.  管理进程：htop 允许用户查看系统中所有运行的进程，并提供操作选项，如终止指定进程、优先级调整等。
3.  提供更丰富的显示信息：相比 top，htop 可以显示更多的进程信息、颜色标识不同进程状态，并提供更直观的界面。

### 使用场景

1.  **监控系统负载**：通过 htop 可以实时了解系统资源的使用情况，帮助识别系统性能瓶颈。
2.  **进程管**理：查找特定进程、终止僵死进程或占用过多资源的进程。
3.  **调试和故障排**除：在系统出现异常或性能问题时，使用 htop 可以快速定位问题所在。
4.  **在服务器环境中**，通过 SSH 连接到远程机器后使用 htop 进行系统监控和管理。

### 使用方法

1.  安装 htop：在大多数 Linux 发行版中，可以通过包管理工具直接安装 htop。例如，在 Ubuntu 中执行 `sudo apt install htop` 即可。
2.  运行 htop：在终端中输入 `htop` 后按下回车即可打开 htop。
3.  使用界面：htop 的界面由多个区域组成，包括顶部的系统概况、中部的进程列表和底部的命令菜单。通过键盘上的箭头键和其他快捷键可以进行浏览和操作。
4.  操作命令：例如，使用方向键可以移动光标来选择进程，按下 F9 可以选择杀死进程，按下 F6 可以按照不同的条件对进程进行排序等。

总之，htop 是一个功能强大且易用的系统监控工具，适用于管理员、开发人员和普通用户在日常使用和故障排除中。从 htop 2.0 版本开始，`htop` 支持跨平台使用，当前版本支持 Linux、FreeBSD、OpenBSD、DragonFly BSD、MacOSX 和 Solaris。值得一提的是， [Htop 在 Github 仓库开源](https://github.com/htop-dev/htop) ，如果您对该软件改兴趣，可移步前往从而了解更多。

── 出自[倾城之链 - htop - an interactive process viewer](https://nicelinks.site/post/6571e7e5c6424116973654fb)

## [Outline – Team knowledge base & wiki](https://nicelinks.site/post/6570a0ace0a430450f06229e)

**标签**：[`知识库`](https://nicelinks.site/tags/知识库) · [`Wiki`](https://nicelinks.site/tags/Wiki) · [`自托管`](https://nicelinks.site/tags/自托管)

>A modern team knowledge base for your internal documentation, product specs, support answers, meeting notes, onboarding, &amp; more…

![倾城之链 - Outline – Team knowledge base & wiki](https://oss.nicelinks.site/www.getoutline.com.png?x-oss-process=style/png2jpg)

**推荐语**：[Outline](https://nicelinks.site/redirect?url=https://www.getoutline.com/) ，适用于成长型团队的最快 [知识库](https://nicelinks.site/tags/知识库) 。美观、实时协作、功能丰富、兼容Markdown。如果您迷失在混乱的文档中？不太确定谁有权访问？同事在聊天中反复请求相同的信息？是时候整理团队的知识了。官方有列出为什么您会喜欢使用 Outline 的理由：

- **漂亮的文档，甚至无需尝试**：直观的编辑器，支持 Markdown、斜线命令、丰富的嵌入等等；
- **直观的编辑体验**：一个极快的编辑器，支持 Markdown、斜线命令、嵌入等等…
- **协作和评论**：实时协作处理文档。评论和话题让对话井井有条。
- **结构化且可立即搜索**：将文档嵌套在层次结构中，自动构建反向链接网络，并在 ms 中搜索所有内容。
- **与 Slack 集成**：无需离开聊天即可搜索和共享文档，自动发布文档更新。
- **公开分享**：通过链接公开共享文档，或与团队私下共享文档。使用您自己的品牌颜色、徽标和域名。
- **速度极快**：Outline 速度很快，真的很快。我们努力确保毫秒级响应时间 - 文档立即加载、搜索快速、用户界面导航快捷。
- **协作性**：Outline 经过精心设计，功能强大、实时且易于使用。阅读和编写文档应该是一件令人愉快的事情。
- **深色模式**：对于夜猫子来说，我们已经为您提供了帮助。Outline 具有漂亮的深色模式，既养眼又美观。
- **安全和权限**：通过读写权限、用户组、来宾用户、公共共享等管理知识库……
- **20+ 集成**：简单 [集成](https://www.getoutline.com/integrations) 到您日常使用的工具中，例如 Slack、Figma、Loom 等。找不到您需要的集成？还有一个 [开放的API](https://www.getutline.com/developers) 。[](https://www.getoutline.com/integrations)[](https://www.getoutline.com/developers)
- **用您的语言**：Outline 支持 RTL，包括 17 种语言的翻译，包括 🇫🇷 法语、🇪🇸 西班牙语、🇩🇪 德语、🇰🇷 韩语和 🇨🇳 中文。
- **开源**：Outline 的 [源代码是公开的](https://github.com/outline) ，开发是公开完成的。更喜欢托管在您自己的基础设施上？没问题。
- **可定制**：自定义域允许您拥有 **docs.yourteam.com**。带有您自己的品牌和颜色的白色标签。

总之， [Outline](https://nicelinks.site/redirect?url=https://www.getoutline.com/) 是一款适合团队使用的知识库产品，可看做是 [Notion](https://nicelinks.site/post/5cbd4e8b7855f80ea42ea6ab) 的开源平替；值得说明的是，Outline 支持基于 Docker 等方式，在您自己的服务器上自托管。如果您对这款产品感兴趣，不妨移步至 [Outline 在 Github 开源仓库](https://github.com/outline/outline) 从而了解更多。

── 出自[倾城之链 - Outline – Team knowledge base & wiki](https://nicelinks.site/post/6570a0ace0a430450f06229e)

## [Awesome Selfhosted](https://nicelinks.site/post/656b3460e328cf0450af8f06)

**标签**：[`自托管`](https://nicelinks.site/tags/自托管) · [`开源`](https://nicelinks.site/tags/开源) · [`聚合`](https://nicelinks.site/tags/聚合)

>A list of Free Software network services and web applications which can be hosted on your own servers.

![倾城之链 - Awesome Selfhosted](https://oss.nicelinks.site/awesome-selfhosted.net.png?x-oss-process=style/png2jpg)

**推荐语**：[Awesome Selfhosted](https://nicelinks.site/redirect?url=https://awesome-selfhosted.net/) ，在您自己的服务器上 [自托管](https://nicelinks.site/tags/自托管) 的自由软件网络服务和 Web 应用程序的列表，涵盖数据分析、自动化、备份、博客平台、内容管理系统（CMS）、域名系统、文件传输同步、知识管理工具、监控、静态站点生成器、网址缩短器、视频监控、网络服务器、数据库管理等数十个方向；自托管是在您自己的服务器上托管和管理应用程序的做法，而不是从 SaaSS 提供商处使用应用程序。如果您注重隐私、安全，选择开源服务，并自托管于自己的服务器，是更棒的选择；而这 [Awesome Selfhosted](https://nicelinks.site/redirect?url=https://awesome-selfhosted.net/) 列表，可以为您提供很棒的参考。

── 出自[倾城之链 - Awesome Selfhosted](https://nicelinks.site/post/656b3460e328cf0450af8f06)

## [TryEmoji | Turn emoji into amazing artwork via AI](https://nicelinks.site/post/656b07710ee17473c38d72fb)

**标签**：[`Emoji`](https://nicelinks.site/tags/Emoji) · [`AI`](https://nicelinks.site/tags/AI) · [`转换`](https://nicelinks.site/tags/转换)

>Turn emoji into amazing artwork via AI

![倾城之链 - TryEmoji | Turn emoji into amazing artwork via AI](https://oss.nicelinks.site/www.tryemoji.com.png?x-oss-process=style/png2jpg)

**推荐语**：[TryEmoji](https://nicelinks.site/redirect?url=https://www.tryemoji.com/) ，通过人工智能（ [AI](https://nicelinks.site/tags/AI) ）将表情符号变成令人惊叹的艺术品；使用非常简单，选择你喜欢的 Emoji，接下来交给 AI 就好；非常迅速就能生成，可以下载至本地或者分享（尺寸：`512*512`，格式：`.jpeg`）；它支持您选择不同的风格（如：Pixar、Minecraft、Vincent van Gogh、8 Bit pixel、Claude Monet、Pablo Picasso 等等）；值得一提的是，该项目 [在 Github 仓库开源](https://github.com/leptonai/tryemoji) ，如果您对其感兴趣，可移步前往从而了解更多。

── 出自[倾城之链 - TryEmoji | Turn emoji into amazing artwork via AI](https://nicelinks.site/post/656b07710ee17473c38d72fb)

## [Articles about Software Engineering, AI, DevOps, Cloud and more        ](https://nicelinks.site/post/656b044f0ee17473c38d728b)

**标签**：[`个人博客`](https://nicelinks.site/tags/个人博客) · [`程序员`](https://nicelinks.site/tags/程序员) · [`开发者`](https://nicelinks.site/tags/开发者)

**关键字**：Blog, Software, Engineering, Authority, AWS, Python, Java, Javascript, DevOps, AI

>Articles about Software Engineering, AI, DevOps, Cloud and more

![倾城之链 - Articles about Software Engineering, AI, DevOps, Cloud and more        ](https://oss.nicelinks.site/ataiva.com.png?x-oss-process=style/png2jpg)

**推荐语**：[ataiva.com](https://nicelinks.site/redirect?url=https://ataiva.com/) ，英国程序员 `Andrew O` 的个人网站，承载关于软件工程、 [人工智能](https://nicelinks.site/tags/AI) 、DevOps、AWS、GO、云计算、 [Docker](https://nicelinks.site/post/5b7036890f8719053c094d68) 、机器学习、 [Python](https://nicelinks.site/tags/Python) 等的文章；如果您对其感兴趣，可以前往作者 [Github 主页](https://github.com/ao/) 了解更多。

── 出自[倾城之链 - Articles about Software Engineering, AI, DevOps, Cloud and more        ](https://nicelinks.site/post/656b044f0ee17473c38d728b)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下客服微信），🤲 。

![倾城之链 - 客服微信](https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-%E5%BE%AE%E4%BF%A1-mini.jpeg)

## 本期文末寄语

夫人之相与，俯仰一世，或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至。及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀。况修短随化，终期于尽。古人云：“死生亦大矣。”岂不痛哉！──〔魏晋〕· 王羲之《兰亭集序》

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

![小程序码 - 倾城之链](https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1)

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 146 期）- 倾城之链](https://blog.nicelinks.site/weekly-146/)
- [优质网站同好者周刊（第 145 期）- 倾城之链](https://blog.nicelinks.site/weekly-145/)
- [优质网站同好者周刊（第 144 期）- 倾城之链](https://blog.nicelinks.site/weekly-144/)
- [优质网站同好者周刊（第 143 期）- 倾城之链](https://blog.nicelinks.site/weekly-143/)
- [优质网站同好者周刊（第 142 期）- 倾城之链](https://blog.nicelinks.site/weekly-142/)
- [优质网站同好者周刊（第 141 期）- 倾城之链](https://blog.nicelinks.site/weekly-141/)
- [优质网站同好者周刊（第 140 期）- 倾城之链](https://blog.nicelinks.site/weekly-140/)
- [优质网站同好者周刊（第 139 期）- 倾城之链](https://blog.nicelinks.site/weekly-139/)
- [优质网站同好者周刊（第 138 期）- 倾城之链](https://blog.nicelinks.site/weekly-138/)
- [优质网站同好者周刊（第 137 期）- 倾城之链](https://blog.nicelinks.site/weekly-137/)
- [优质网站同好者周刊（第 136 期）- 倾城之链](https://blog.nicelinks.site/weekly-136/)
- [优质网站同好者周刊（第 135 期）- 倾城之链](https://blog.nicelinks.site/weekly-135/)
- [优质网站同好者周刊（第 131 期）- 倾城之链](https://blog.nicelinks.site/weekly-131/)
- [优质网站同好者周刊（第 130 期）- 倾城之链](https://blog.nicelinks.site/weekly-130/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ '欲问美图何处寻？倾城之链有定音')
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)