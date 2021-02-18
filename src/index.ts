import template from './template.ts'

const articleBeginStr = `[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界。此周刊，将汇聚过去一周[倾城](https://nicelinks.site/?utm_source=weekly)所收录的内容，以飨同好；欢迎推荐或自荐（仅限有独立域名的网站，可以是二级域名）。您如果要了解收录要求，请参见[关于倾城](https://nicelinks.site/about?utm_source=weekly)。<br>`
const articleEndStr = `>[倾城之链](https://nicelinks.site/?utm_source=weekly)作为一个开放平台，旨在云集全球**优秀网站**，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。`

const queryString = (url: string, query: any) => {
  let str = []
  for (let key in query) {
    str.push(key + '=' + query[key])
  }
  let paramStr = str.join('&')
  return paramStr ? `${url}?${paramStr}` : url
}

const writeToMdFile = (articleStr: string) => {
  Deno.writeTextFile("./docs/weekly-001.md", articleStr)
}

const fetchNicelinks = () => {
  const params = {
    alive: 1,
    pageCount: 1,
    pageSize: 20,
    sortType: -1,
    sortTarget: 'created',
    active: true
  }
  const baseUrl = 'https://nicelinks.site/api/getNiceLinks'
  const targetPath = queryString(baseUrl, params)
  return fetch(targetPath)
  .then(response => response.json())
  .then(result => result.value)
}

const getTargetLinks = (sourceArr: Array<object>) => {
  const currentTime = (new Date()).getTime()
  const offsetTime = 86400000 * (new Date().getDay()+2)
  const lastFriday = new Date(currentTime - offsetTime)
  console.log(`lastFriday :`, lastFriday)
  return sourceArr.filter((item: any) => {
    return new Date(item.created) > lastFriday
  })
}

const genArticleStr = (sourceArr: Array<object>) => {
  let articleStr: string = articleBeginStr
  for (let key in sourceArr) {
    let tempTemp = template
    const item: any = sourceArr[key]
    const hostname = new URL(item.urlPath).hostname
    const previewImg = `https://oss.nicelinks.site/${hostname}.png?x-oss-process=style/png2jpg`
    item.tags = item.tags.map((tag: any) => `[\`${tag}\`](https://nicelinks.site/tags/${tag})`)
    let tagsStr = item.tags.join(' · ')
    const linkUrl = `${item.urlPath}?utm_source=nicelinks.site`
    const fromUrl = `https://nicelinks.site/post/${item._id}`
    tempTemp = tempTemp.replace('@TITLE@', `[${item.title}](${linkUrl})`)
      .replace('@TITLE@', item.title)
      .replace('@TAGS@', tagsStr)
      .replace('@KEYWORDS@', item.keywords ? `**关键字**：${item.keywords}` : '')
      .replace('@DESCRIPTION@', item.desc ? `>${item.desc}` : '')
      .replace('@IMAGE@', `![倾城之链 - ${item.title}](${previewImg})`)
      .replace('@REVIEW@', item.review)
      .replace('@FROM@', `[倾城之链 - ${item.title}](${fromUrl})`)
    articleStr += tempTemp
  }
  return articleStr + articleEndStr
}

const main = () => {
  fetchNicelinks().then(result => {
    const targetLinks = getTargetLinks(result)
    const articleStr = genArticleStr(targetLinks)
    writeToMdFile(articleStr)
  })
}

main()