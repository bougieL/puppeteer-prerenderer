import * as puppeteer from 'puppeteer'
import { Log } from '../utils'

class Renderer {
  page: puppeteer.Page
  browser: puppeteer.Browser
  constructor(browser: puppeteer.Browser) {
    this.browser = browser
  }
  async init() {
    this.page = await this.browser.newPage()
    return this
  }
  async renderToString(
    url,
    waitUntil:
      | 'domcontentloaded'
      | 'load'
      | 'networkidle0'
      | 'networkidle2'
      | puppeteer.LoadEvent[] = 'domcontentloaded'
  ) {
    await this.page.goto(url, { waitUntil })
    return await this.page.content()
  }
}

export async function renderUrlsToString({
  urls = [],
  onItemRendered = () => {},
  onFinished = () => {}
}: {
  urls: string[]
  onFinished?: () => void
  onItemRendered?: (content: string, url: string) => void
}) {
  const browser = await puppeteer.launch()
  const renderer = new Renderer(browser)
  await renderer.init()
  for (let idx in urls) {
    const i = Number.parseInt(idx)
    const url = urls[i]
    try {
      const content = await renderer.renderToString(url)
      Log.success(`render ${url} success.`)
      onItemRendered(content, url)
    } catch (error) {
      Log.error(`render ${url} error.`)
    }
    if (i === urls.length - 1) {
      Log.info(`render finished.`)
      onFinished()
    }
  }
}
