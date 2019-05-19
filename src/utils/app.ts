import * as puppeteer from 'puppeteer'
import { writeFile, saveFile } from './paths'
import { isFileExists } from './paths'

const domain = 'http://127.0.0.1:8080/bougie-design/'
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  // await goto(page, domain)
})()

// ;(async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await goto(page, domain)
// })()

async function goto(page: puppeteer.Page, url) {
  if (isFileExists(url)) return
  await page.goto(url, { waitUntil: 'networkidle2' })
  const urls = await getUrlsFromPage(page)
  // const staticUrls = await getStaticUrlsFromPage(page)
  // const content = await page.content()
  // saveStaticFiles(staticUrls)
  // writeFile(url, content)
  // console.log(`rendered:      ${url}`)
  // ;(async () => {
  //   for (let i = 0; i < urls.length; i++) {
  //     await goto(page, urls[i])
  //   }
  // })()
}

async function getUrlsFromPage(page: puppeteer.Page) {
  const url = page.url()
  const domain = url.replace(/(.*:\/\/.+?)\/.*/, '$1')
  const urls = await Promise.all(
    (await page.$$('a')).map(async (el) => {
      return await (await el.getProperty('href')).jsonValue()
    })
  )
  return urls
    .filter((url: string) => url.startsWith(domain))
    .filter((url) => !isFileExists(url))
}

// async function getStaticUrlsFromPage(page: puppeteer.Page) {
//   const url = page.url()
//   const domain = url.replace(/(.*:\/\/.+?)\/.*/, '$1')
//   const urls = await page.evaluate(() => {
//     return performance
//       .getEntries()
//       .filter(e => e.entryType === 'resource')
//       .map(e => e.name)
//   })
//   return urls
//     .filter((url: string) => url.startsWith(domain))
//     .filter(url => !isFileExists(url))
// }

// function saveStaticFiles(urls: string[]) {
//   urls.forEach(async url => {
//     if (!isFileExists(url)) {
//       saveFile(url)
//       console.log(`saved:     ${url}`)
//     }
//   })
// }
