import pc from 'picocolors'
import figlet from 'figlet'
import { program } from 'commander'
import { create } from './template'
import { templates } from './constants'
import { TTemplateName } from './types'
import { isExistsFile } from './create-dir'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const version: string = require('../package.json').version

program.version(version)
program.name('pure').usage(`<command> [option]`)

program
  .command('create <project-name>') // 增加创建指令
  .description('create a new project') // 添加描述信息
  .option('-f, --force', 'overwrite target directory if it exists') // 强制覆盖
  .action(async (projectName, cmd) => {
    const isExists = await isExistsFile(projectName, cmd)
    if (isExists) return
    create(projectName)
  })

program
  .command('init <template-name> <project-name>') // 增加创建指令
  .description('create a new project') // 添加描述信息
  .option('-f, --force', 'overwrite target directory if it exists') // 强制覆盖
  .action(async (templateName, projectName, cmd) => {
    const isExists = await isExistsFile(projectName, cmd)
    if (isExists) return
    create(projectName, templateName)
  })

program.on('--help', function () {
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

program
  .command('list')
  .description('view all available templates')
  .action(() => {
    Object.keys(templates).forEach((key: string) => {
      console.log(`${key} ${templates[key as TTemplateName].description}`)
    })
  })

program.parse(process.argv)
