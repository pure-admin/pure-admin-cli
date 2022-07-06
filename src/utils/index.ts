import ora from 'ora'
import chalk from 'chalk'
import logSymbols from 'log-symbols'
import { TTemplateName } from '../types'
import downloadGitRepo from 'download-git-repo'

export function download(downloadUrl: string, templateName: TTemplateName, projectName: string) {
  const spiner = ora(`downloading template from ${downloadUrl}, please wait`).start()
  downloadGitRepo(downloadUrl, projectName, { clone: true }, (err: any) => {
    if (err) {
      spiner.fail()
      console.log(logSymbols.error, chalk.red('request fail, please try again'))
      return
    }
    spiner.succeed() // 下载成功提示
    // 模板使用提示
    console.log(`\r\n Successfully created project ${chalk.cyan(projectName)}`)
    console.log(`\r\n cd ${chalk.cyan(projectName)}`)
    console.log('pnpm install \r\n')
    if (templateName === 'tauri') {
      return console.log('pnpm tauri:dev \r\n')
    }
    console.log('pnpm dev \r\n')
  })
}
