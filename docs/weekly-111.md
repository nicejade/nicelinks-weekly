[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。

**备注**：本周刊**每周五**生成，首发于个人微信公众号[晚晴幽草轩](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MDIwMzM2Mg==&action=getalbum&album_id=1530765143352082433&scene=173&from_msgid=2650641087&from_itemidx=1&count=3#wechat_redirect)、博客[晚晴幽草轩](https://www.jeffjade.com)，以及[悠然宜想亭](https://forum.lovejade.cn/)社区；此一键生成脚本基于 [Deno](https://nicelinks.site/post/602d30aad099ff5688618591) 编写，并在 Github 开源：[nicejade/nicelinks-weekly](https://github.com/nicejade/nicelinks-weekly)。

## [mdsvex - markdown in svelte!](https://nicelinks.site/post/642598ca2d6c9c63445c8862)

**标签**：[`组件`](https://nicelinks.site/tags/组件) · [`Svelte`](https://nicelinks.site/tags/Svelte) · [`Markdown`](https://nicelinks.site/tags/Markdown)

>Combine svelte and markdown in the same file. Live your dreams!

![倾城之链 - mdsvex - markdown in svelte!](https://oss.nicelinks.site/mdsvex.com.png?x-oss-process=style/png2jpg)

**推荐语**：[MDSvex](https://nicelinks.site/redirect?url=https://mdsvex.com/) 是一个基于 [Markdown](https://nicelinks.site/tags/Markdown) 和 [Svelte](https://nicelinks.site/tags/Svelte) 技术栈的工具，可以将 Markdown 文档转换为可交互的组件化 UI。该工具允许开发者以类似于编写 React 组件的方式编写 Markdown 文件，并支持在 Markdown 中嵌入 Svelte 组件。MDSvex 的主要特点如下：

1.  **基于 Markdown**：MDSvex 使用 Markdown 作为文档格式，并支持 GitHub Flavored Markdown 标准。
2.  **支持 Svelte 组件**：开发者可以在 Markdown 中嵌入 Svelte 组件，并通过 props 实现组件之间的数据传递和状态管理。
3.  **可交互性**：由于 MDSvex 可以将 Markdown 转换为组件化 UI，因此可以实现更加丰富和动态的用户交互体验。
4.  **灵活性**：MDSvex 支持自定义配置和插件，可以根据项目需求进行灵活扩展和定制化。

 [MDSvex](https://nicelinks.site/redirect?url=https://mdsvex.com/) 基本上是 Svelte 的 [MDX](https://nicelinks.site/post/63e4e3eee63ccd089dee6686) ，允许您在 markdown 中使用 Svelte 组件，或在 Svelte 组件中使用 markdown。mdsvex 支持所有 Svelte 语法和_几乎_所有 markdown 语法。有关详细信息，请参阅 [限制](https://mdsvex.com/docs/#limitations) ，下面是使用示例：

```html
<script>
    import { Chart } from "../components/Chart.svelte";
</script>

# Here’s a chart
The chart is rendered inside our MDsveX document.

<Chart />
```

近期有基于 [Svelte](https://nicelinks.site/post/62a9c2ad90509e23cea772c0) 、 [TailwindCSS](https://nicelinks.site/post/5fd20cb4c06d6302c1907ec7) 、 [Vite](https://nicelinks.site/post/6010e1b10c71de1fb957b64e) 开发一款 [ChatGPT](https://nicelinks.site/tags/ChatGPT) 相关的 Web 应用： [素问智聊斋](https://chatgpt.nicelinks.site/) ；其中 [关于](https://chatgpt.nicelinks.site/#/about) 、 [赞助](https://chatgpt.nicelinks.site/#/sponsor) 等页面，基于 Markdown、 [TailwindCSS](https://nicelinks.site/post/5fd20cb4c06d6302c1907ec7) 、和 [MDSvex](https://nicelinks.site/redirect?url=https://mdsvex.com/) 来开发，配置简单，效率贼高，效果很棒，体验极好；颇为赞叹。下面是 Sponsor（赞助）页面的代码：

```html
<script>
import Sponsor from './../markdown/Sponsor.md'
</script>

<div class="flex-col justify-between mx-auto my-4 prose page-warpper lg:prose-xl md:prose-sm">
  <Sponsor />
</div>
```

使用 MDSvex 可以帮助开发者快速构建可交互的文档和演示页面，同时**提高开发效率**和**代码复用性**，强烈推荐；该项目在 [Github 开源](https://github.com/pngwn/mdsvex) ，感兴趣的朋友可移步以了解更多。

── 出自[倾城之链 - mdsvex - markdown in svelte!](https://nicelinks.site/post/642598ca2d6c9c63445c8862)

## [Cursor | Build Fast](https://nicelinks.site/post/642573d62d6c9c63445c835c)

**标签**：[`编辑器`](https://nicelinks.site/tags/编辑器) · [`AI`](https://nicelinks.site/tags/AI) · [`ChatGPT`](https://nicelinks.site/tags/ChatGPT)

>Refactor, understand, and write code effortlessly with Cursor.

![倾城之链 - Cursor | Build Fast](https://oss.nicelinks.site/www.cursor.so.png?x-oss-process=style/png2jpg)

**推荐语**：[Cursor](https://nicelinks.site/redirect?url=https://www.cursor.so/) 是一款专为 [AI](https://nicelinks.site/tags/AI) 编程而生的编辑器，配置非常简单，因为内置了 [ChatGPT](https://nicelinks.site/tags/ChatGPT) 的能力，所以下载即用，通过 `Ctrl+k` 调出对话框进行会话，输入 prompts 即可得到结果。现在 cursor 还处于早期阶段，但现在它可以帮助您做一些事情，诸如：

- **编写**：使用比 Copilot 更智能的 AI 生成 10-100 行代码；
- **Diff**：要求 AI 编辑一段代码，只查看建议的更改；
- **聊天**：了解您当前文件的 ChatGPT 风格界面；
- **还有更多**：要求修复 lint 错误，在悬停时生成测试/评论等。

实际体验，当输入 prompts 进行会话时，它要求登录从而使用 AI 功能，理由是避免滥用它们后台；当然，Cursor 有其 AI 提供了另一种方式，即需要用户输入自己的 Open API key。

 [VSCode](https://nicelinks.site/post/5af55777979f626ea3d37917) 有提供名为 CodeGPT 的扩展，也是需要用户输入 `OpenAI API` 密钥，才能使用；有感兴趣的网友，对两者进行了测试，认为 Cursor 的体验要略胜一筹。毫不疑问，如今的 AI 已强大非常，可以帮各种用户做更多工作；推荐有条件的朋友，可以用起来，以提升效率、节省时间、启发灵感。如果您对 Cursor 感兴趣，可移步至 [Github 开源仓库](https://github.com/getcursor/cursor)从而了解更多。

── 出自[倾城之链 - Cursor | Build Fast](https://nicelinks.site/post/642573d62d6c9c63445c835c)

## [Welcome | Weaviate - vector database](https://nicelinks.site/post/6422e0762d6c9c63445c73ed)

**标签**：[`数据库`](https://nicelinks.site/tags/数据库) · [`搜索`](https://nicelinks.site/tags/搜索) · [`AI`](https://nicelinks.site/tags/AI)

>Weaviate is an open-source vector database. It allows you to store data objects and vector embeddings from your favorite ML-models, and scale seamlessly into billions of data objects.

![倾城之链 - Welcome | Weaviate - vector database](https://oss.nicelinks.site/weaviate.io.png?x-oss-process=style/png2jpg)

**推荐语**：[Weaviate](https://nicelinks.site/redirect?url=https://weaviate.io/) 是一个基于向量搜索 (vector search) 和自然语言处理 (NLP) 技术的开源向量数据库。它不仅可以存储、管理和查询向量，还可以自动学习向量之间的关系和上下文，从而支持更智能的搜索和推荐。Weaviate 具有如下功能特征：

### 矢量搜索

无论您是自带向量还是使用其中一个向量化模块，您都可以为数十亿个数据对象建立索引以进行搜索。

### 混合搜索

结合多种搜索技术，例如基于关键字的搜索和矢量搜索，以提供最先进的搜索体验。

### 生成搜索

通过 GPT-3 等 LLM 模型输送搜索结果来改进您的搜索结果，以创建下一代搜索体验。

### 超越搜索

Weaviate 支持闪电般快速的矢量搜索，但它的功能远不止于此。它的其他一些超能力包括推荐、总结以及与神经搜索框架的集成。

官方网站 [Weaviate](https://nicelinks.site/redirect?url=https://weaviate.io/) 提供了丰富的文档资料、教程和示例代码，可以帮助开发者更好地理解和使用 Weaviate。同时，官网还提供了 Weaviate Playground 工具，可以在线试用和体验 Weaviate 的功能和接口。

 [Weaviate](https://nicelinks.site/redirect?url=https://weaviate.io/) 的应用场景非常广泛，可以用于各种不同的领域，如企业搜索、医疗健康、金融服务、新闻媒体等。它可以帮助企业和机构快速地找到所需的信息和数据，提高工作效率和准确率。同样地，在医疗和健康领域，它可以帮助医生和研究人员快速地查找和分析相关文献和数据，支持疾病预防和诊断。

 总之， [Weaviate](https://nicelinks.site/redirect?url=https://weaviate.io/) 提供了丰富的文档和的资源，帮助用户更好地理解 Weaviate 数据库的功能和优势，从而支持开发者快速构建智能应用，提高数据查询和处理的准确率。同时，由于 Weaviate 是开源项目，用户可以在 [GitHub 上获取其源代码](https://github.com/weaviate/weaviate) ，并对其进行自定义和扩展。

── 出自[倾城之链 - Welcome | Weaviate - vector database](https://nicelinks.site/post/6422e0762d6c9c63445c73ed)

## [JavaScript Obfuscator Tool](https://nicelinks.site/post/6422da402d6c9c63445c7319)

**标签**：[`JavaScript`](https://nicelinks.site/tags/JavaScript) · [`工具`](https://nicelinks.site/tags/工具) · [`前端开发`](https://nicelinks.site/tags/前端开发)

>JavaScript Obfuscator is a free online tool that obfuscates your source code, preventing it from being stolen and used without permission.

![倾城之链 - JavaScript Obfuscator Tool](https://oss.nicelinks.site/obfuscator.io.png?x-oss-process=style/png2jpg)

**推荐语**：[JavaScript Obfuscator Tool](https://nicelinks.site/redirect?url=https://obfuscator.io/) ，是一个在线代码混淆工具，免费且高效；它可以将 [JavaScript](https://nicelinks.site/tags/JavaScript) 、 [CSS](https://nicelinks.site/tags/CSS) 和 [HTML](https://nicelinks.site/tags/HTML) 代码进行混淆，从而防止源代码被恶意利用或破解。它提供了多种混淆选项，如随机变量名、删除空格、注释等等，以此增加被攻击者解密的难度，提高代码的安全性。同时，该工具还支持在线预览和多款编码风格的选择，可以方便地查看和选择混淆后的代码风格，以及调整混淆程度。

值得一提的是，该网站的服务是基于**加密算法**实现的，因此不需要上传代码即可进行混淆，确保了用户的代码的隐私和安全（这也是跟类似产品如 UglifyJS、Closure Compiler 不同的地方）。另外，该网站还提供了 Chrome 插件，可以在开发过程中直接使用，非常方便。

需要注意的是，代码混淆只能增加被攻击者破解的难度，但并不能完全保证代码不被破解。高度复杂的代码混淆对代码的可读性和可维护性也会带来影响。因此，在实际开发中，需要根据实际情况选择适当的混淆方式。同时，还需要采取其他安全措施，如加密和防火墙等，以提高代码的安全性。

── 出自[倾城之链 - JavaScript Obfuscator Tool](https://nicelinks.site/post/6422da402d6c9c63445c7319)

## [ 帮小忙，腾讯QQ浏览器在线工具箱平台 ](https://nicelinks.site/post/641e8f67abfccb2329b4e383)

**标签**：[`工具`](https://nicelinks.site/tags/工具) · [`平台`](https://nicelinks.site/tags/平台) · [`工具箱`](https://nicelinks.site/tags/工具箱)

**关键字**：工具平台，帮小忙

>帮小忙，腾讯 QQ 浏览器工具箱平台。

![倾城之链 -  帮小忙，腾讯QQ浏览器在线工具箱平台 ](https://oss.nicelinks.site/tool.browser.qq.com.png?x-oss-process=style/png2jpg)

**推荐语**：[帮小忙](https://nicelinks.site/redirect?url=https://tool.browser.qq.com/) ，友腾讯 QQ 浏览器团队推出的在线工具箱平台，功能较为齐全，有图片加水印、数据换算、生活娱乐、教育、文本工具、证件生成、、文字提取、今天吃什么、亲戚关系计算、字帖生成、文档转换、开发工具、视频和 PDF 转换工具等等，分免费的和限时免费。类似工具聚合平台较多，诸如 [在线工具 - 程序员的工具箱](https://nicelinks.site/post/5a5cc0b60aee782ded3e7b6b) 、 [即时工具-致力打造即用即走型在线工具箱](https://nicelinks.site/post/62727acd7d02b74eba0f09d9) 等等，您可按需选择典藏、使用。

── 出自[倾城之链 -  帮小忙，腾讯QQ浏览器在线工具箱平台 ](https://nicelinks.site/post/641e8f67abfccb2329b4e383)

对倾城之链感兴趣的朋友，可通过 Web，小程序，快应用等渠道进行访问(后续将支持更多，如 VsCode 插件，Chrome 扩展等)。您有任何问题，欢迎随时向我们反馈（您可以通过官网反馈渠道，或添加如下客服微信），🤲 。

![倾城之链 - 客服微信](https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-%E5%BE%AE%E4%BF%A1-mini.jpeg)

## 本期文末寄语

风急天高猿啸哀，渚清沙白鸟飞回。   
无边落木萧萧下，不尽长江滚滚来。   
万里悲秋常作客，百年多病独登台。   
艰难苦恨繁霜鬓，潦倒新停浊酒杯。   
── 唐朝 · 杜甫 《登高》

> [倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。

![小程序码 - 倾城之链](https://image.nicelinks.site/nicelinks-miniprogram-code.jpeg?imageView2/1/w/250/h/250/interlace/1/ignore-error/1)

## 您可能感兴趣的文章

- [优质网站同好者周刊（第 110 期）- 倾城之链](https://blog.nicelinks.site/weekly-110/)
- [优质网站同好者周刊（第 109 期）- 倾城之链](https://blog.nicelinks.site/weekly-109/)
- [优质网站同好者周刊（第 108 期）- 倾城之链](https://blog.nicelinks.site/weekly-108/)
- [优质网站同好者周刊（第 107 期）- 倾城之链](https://blog.nicelinks.site/weekly-107/)
- [优质网站同好者周刊（第 106 期）- 倾城之链](https://blog.nicelinks.site/weekly-106/)
- [优质网站同好者周刊（第 105 期）- 倾城之链](https://blog.nicelinks.site/weekly-105/)
- [优质网站同好者周刊（第 104 期）- 倾城之链](https://blog.nicelinks.site/weekly-104/)
- [优质网站同好者周刊（第 103 期）- 倾城之链](https://blog.nicelinks.site/weekly-103/)
- [优质网站同好者周刊（第 102 期）- 倾城之链](https://blog.nicelinks.site/weekly-102/)
- [优质网站同好者周刊（第 101 期）- 倾城之链](https://blog.nicelinks.site/weekly-101/)
- [优质网站同好者周刊（第 100 期）- 倾城之链](https://blog.nicelinks.site/weekly-100/)
- [开启技术变现之路，探索第三收入来源](https://www.jeffjade.com/2020/11/17/173-talk-about-nice-links/)
- [云集优站，尽在「倾城之链」](https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/)
- [云集优站，尽在「倾城之链」其二](https://www.jeffjade.com/2018/12/23/146-talk-about-nice-links/)
- [欲问美图何处寻？倾城之链有定音](https://www.jeffjade.com/2019/02/17/151-aweome-beautiful-picture-website-list/ '欲问美图何处寻？倾城之链有定音')
- [超实用图片工具网站，值得典藏](https://www.jeffjade.com/2020/07/27/165-aweome-picture-tool-website-list/)
- [高质量免费 🆓 图标资源大全](https://www.jeffjade.com/2020/09/11/169-high-quality-free-icon-resource-collection/)
- [十佳 AI 产品工具，为生活添彩](https://www.jeffjade.com/2020/09/23/170-list-of-top-20-ai-product-tools/)
- [最想与朋友分享的网站列表](https://www.jeffjade.com/2020/09/01/168-list-of-websites-i-most-want-to-share-with-my-friends/)