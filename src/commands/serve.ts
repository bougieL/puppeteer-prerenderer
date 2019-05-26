import { Command, flags } from '@oclif/command'
import { createSPAServer } from '../lib'
import { cwd } from '../utils'

export default class Serve extends Command {
  static description = 'serve a SPA bundle.'

  static examples = [
    `$ puppeteer-prerenderer serve .
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
    log: flags.boolean({
      char: 'l',
      description: 'wheather show access logs.',
      default: true
    })
  }

  static args = [{ name: 'dist', default: '.', description: 'SPA bundle dir.' }]

  async run() {
    const {
      args: { dist },
      flags: { port, base, log }
    } = this.parse(Serve)
    createSPAServer({
      dist: cwd(dist),
      port: Number.parseInt(port),
      base,
      log
    })
  }
}
