import pc from 'picocolors'
import logSymbols from 'log-symbols'

export const clg = console.log

export const log = {
  err: (msg: string) => {
    clg(logSymbols.error, pc.red(msg))
  },
  warning: (msg: string) => {
    clg(logSymbols.warning, pc.yellow(msg))
  },
  info: (msg: string) => {
    clg(logSymbols.info, pc.bold(msg))
  }
}

export default log
