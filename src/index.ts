import { cac } from 'cac'
import pc from 'picocolors'
import figlet from 'figlet'
import { create } from './template'
import { isExistsFile } from './create-dir'
import { type TTemplateName } from './types'
import { hasTemplate, clg, log } from './utils'
import { templates, version } from './constants'
import { inputProjectName, chooseDownloadOrigin } from './prompt'

const cli = cac('pure')
cli.version(version)

cli
  .command('create', '创建一个新项目') // 增加创建指令
  .option('-f, --force', '如果目标文件存在，则强制覆盖') // 强制覆盖
  .option('-g, --github', '使用github模板地址') // 指定项目下载地址是从github下载
  .action(async (cmd) => {
    const projectName = await inputProjectName()
    const isExists = await isExistsFile(projectName, cmd)
    if (isExists) return
    const isDownloadForGithub = await chooseDownloadOrigin()
    create(projectName, undefined, isDownloadForGithub)
  })

cli
  .command('init <template-name> <project-name>', '创建一个新项目')
  .option('-f, --force', '如果目标文件存在，则强制覆盖')
  .option('-g, --github', '使用github模板地址')
  .action(async (templateName, projectName, cmd) => {
    if (!hasTemplate(templateName)) return
    const isExists = await isExistsFile(projectName, cmd)
    if (isExists) return
    create(projectName, templateName)
  })

cli.help(() => {
  clg(
    '\r\n' +
      figlet.textSync('pure', {
        font: '3D-ASCII',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
      })
  )
  clg(`运行 ${pc.cyan('pure <command> --help')} 查看有关命令的详细用法. \r\n`)
})

cli.command('list', '查看所有模板类型').action(() => {
  Object.keys(templates).forEach((key: string) => {
    clg(`${key} ${templates[key as TTemplateName].description}`)
  })
})

cli.on('command:*', () => {
  log.err(`无效的命令: ${cli.args.join(' ')}`)
  cli.outputHelp()
  process.exit(1)
})

cli.parse()
