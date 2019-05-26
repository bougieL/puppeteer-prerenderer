import { Command, flags } from '@oclif/command'
import { getUrlsFromSite, writeFile } from '../lib'
import { cwd } from '../utils'

export default class Sitemap extends Command {
  static description = 'serve a SPA bundle.'

  static examples = [
    `$ puppeteer-prerenderer sitemap https://www.bougieblog.cn
`
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    output: flags.string({ char: 'o', default: '.' }),
    filename: flags.string({ char: 'f', default: 'sitemap' })
  }

  static args = [
    { name: 'domain', required: true, description: 'site domain.' }
  ]

  async run() {
    const {
      args: { domain },
      flags: { output, filename }
    } = this.parse(Sitemap)
    getUrlsFromSite(domain, (urls) => {
      const name = /\.\w+/.test(filename) ? filename : `${filename}.txt`
      const path = cwd(output, name)
      const content = urls.join('\n')
      writeFile(path, content)
    })
  }
}
