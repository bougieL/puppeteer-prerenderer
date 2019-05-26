import { Command, flags } from '@oclif/command'
import {
  getUrlsFromSite,
  renderUrlsToString,
  getRelativePathFromUrl,
  writeFile,
  createSPAServer
} from '../lib'
import { cwd } from '../utils'
import { join } from 'path'

export default class ServeRender extends Command {
  static description = 'serve a SPA bundle, then render to static html files.'

  static examples = [
    `$ puppeteer-prerenderer serveRender .
`
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    port: flags.string({
      char: 'p',
      description: 'listen port',
      default: '3000'
    }),
    base: flags.string({
      char: 'b',
      description: 'SPA base router.',
      default: '/'
    }),
    output: flags.string({
      char: 'o',
      description: 'renderd out put dir',
      default: ''
    })
  }

  static args = [{ name: 'dist', default: '.', description: 'SPA bundle dir.' }]

  async run() {
    const {
      args: { dist },
      flags: { port, base, output }
    } = this.parse(ServeRender)
    const domain = `http://localhost:${port}${base}`
    createSPAServer({
      dist: cwd(dist),
      port: Number.parseInt(port),
      base,
      onCreated: () => {
        getUrlsFromSite(domain, (urls) => {
          renderUrlsToString({
            urls,
            onItemRendered: (content, url) => {
              const baseDir = output
                ? cwd(output)
                : cwd(dist).replace(/\/[^\/]+?\/?$/, '')
              const path = join(baseDir, getRelativePathFromUrl(url))
              writeFile(path, content)
            },
            onFinished: () => {
              // this.exit(0)
              process.exit(0)
            }
          })
        })
      }
    })
  }
}
