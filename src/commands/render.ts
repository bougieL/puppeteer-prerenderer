import { Command, flags } from '@oclif/command'
import {
  getUrlsFromSite,
  renderUrlsToString,
  getRelativePathFromUrl,
  writeFile
} from '../lib'
import { cwd } from '../utils'
import { join } from 'path'

export default class Render extends Command {
  static description = 'render a site or page to static html file(s).'

  static examples = [
    `$ puppeteer-prerenderer render https://www.bougieblog.cn
`
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    single: flags.boolean({
      char: 's',
      description: 'render single page only.',
      default: false
    }),
    output: flags.string({
      char: 'o',
      description: 'output directory.',
      default: cwd()
    })
  }

  static args = [{ name: 'domain', description: "render a domain's pages." }]

  async run() {
    const {
      args: { domain },
      flags: { single, output }
    } = this.parse(Render)
    if (single) {
      renderUrlsToString({
        urls: [domain],
        onItemRendered: (content, url) => {
          const path = join(output, getRelativePathFromUrl(url))
          writeFile(path, content)
        },
        onFinished: () => {
          // this.exit()
          process.exit(0)
        }
      })
      return
    }
    getUrlsFromSite(domain, (urls) => {
      renderUrlsToString({
        urls,
        onItemRendered: (content, url) => {
          const path = join(output, getRelativePathFromUrl(url))
          writeFile(path, content)
        },
        onFinished: () => {
          // this.exit(0)
          process.exit(0)
        }
      })
    })
  }
}
