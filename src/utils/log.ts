import chalk from 'chalk'
import { dateFormat } from '.'

const log = console.log

const now = () => dateFormat(new Date(), 'hh:mm:ss')

export class Log {
  static info(...message) {
    message.forEach((m) => {
      log(chalk.gray(`[${now()}]`) + '    ' + chalk.blue(m))
    })
  }
  static warnning(...message) {
    message.forEach((m) => {
      log(chalk.gray(`[${now()}]`) + '    ' + chalk.yellow(m))
    })
  }
  static error(...message) {
    message.forEach((m) => {
      log(chalk.gray(`[${now()}]`) + '    ' + chalk.red(m))
    })
  }
  static success(...message) {
    message.forEach((m) => {
      log(chalk.gray(`[${now()}]`) + '    ' + chalk.green(m))
    })
  }
}
