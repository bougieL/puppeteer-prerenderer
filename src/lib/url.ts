import * as puppeteer from 'puppeteer'
import * as async from 'async'
import { Log } from '../utils'

export async function getUrlsFromPage(page: puppeteer.Page) {
  const url = page.url()
  const domain = url.replace(/(.*:\/\/.+?)\/.*/, '$1')
  const urls = await Promise.all(
    (await page.$$('a')).map(async (el) => {
      return await (await el.getProperty('href')).jsonValue()
    })
  )
  return urls.filter((url: string) => url.startsWith(domain))
}

export async function getStaticUrlsFromPage(page: puppeteer.Page) {
  const url = page.url()
  const domain = url.replace(/(.*:\/\/.+?)\/.*/, '$1')
  const urls = await page.evaluate(() => {
    return performance
      .getEntries()
      .filter((e) => e.entryType === 'resource')
      .map((e) => e.name)
  })
  return urls.filter((url: string) => url.startsWith(domain))
}

export async function getUrlsFromSite(
  domain: string,
  callback: (urls: string[]) => void
) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  let urls = []
  Log.info(`started crawl ${domain} links, this may take serveral minutes.`)
  ;(async function crawl(oUrls) {
    const fns = oUrls.map((url, idx) => {
      return async (prev = []) => {
        await page.goto(url, { waitUntil: 'domcontentloaded' })
        const urls = await getUrlsFromPage(page)
        return [...prev, ...urls]
      }
    })
    async.waterfall(fns, (err, res: string[]) => {
      res = trimUrls(res || []).filter((url) => {
        return !urls.includes(url)
      })
      urls = trimUrls([...urls, ...oUrls, ...res])
      if (res.length === 0) {
        browser.close()
        Log.success(`crawl links success.`)
        callback(urls)
      } else {
        crawl(res)
      }
    })
  })([domain])
}

function trimUrls(urls: string[]) {
  urls = urls.map((url) =>
    url
      .split('#')[0]
      .split('?')[0]
      .replace(/\/+$/, '')
  )
  return Array.from(new Set(urls))
}
