import { cac } from 'cac'
import pc from 'picocolors'
import figlet from 'figlet'
import { create } from './template'
import { templates } from './constants'
import { TTemplateName } from './types'
import { isExistsFile } from './create-dir'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const version: string = require('../package.json').version

const cli = cac('pure')
cli.version(version)

cli
  .command('create <project-name>', 'create a new project') // 增加创建指令
  .option('-f, --force', 'overwrite target directory if it exists') // 强制覆盖
  .action(async (projectName, cmd) => {
    const isExists = await isExistsFile(projectName, cmd)
    if (isExists) return
    create(projectName)
  })

cli
  .command('init <template-name> <project-name>', 'create a new project') // 增加创建指令
  .option('-f, --force', 'overwrite target directory if it exists') // 强制覆盖
  .action(async (templateName, projectName, cmd) => {
    const isExists = await isExistsFile(projectName, cmd)
    if (isExists) return
    create(projectName, templateName)
  })

cli.help(() => {
  console.log(
    '\r\n' +
      figlet.textSync('pure', {
        font: '3D-ASCII',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
      })
  )
  console.log()
  console.log(`Run ${pc.cyan('pure <command> --help')} for detailed usage of given command.`)
  console.log()
})

cli.command('list', 'view all available templates').action(() => {
  Object.keys(templates).forEach((key: string) => {
    console.log(`${key} ${templates[key as TTemplateName].description}`)
  })
})

cli.parse()
