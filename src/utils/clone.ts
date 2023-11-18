import pc from 'picocolors'
import { log, clg } from './log'
import { isShowEmoji } from './check'
import { TTemplateName } from '../types'
import gradientString from 'gradient-string'
import createLogger from 'progress-estimator'
import { templates, WIN_PLATFORM } from '../constants'
import boxen, { Options as boxenOptions } from 'boxen'
import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git'

// https://github.com/bvaughn/progress-estimator
// https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json
const logger = createLogger(
  WIN_PLATFORM
    ? {}
    : {
        spinner: {
          interval: 140,
          frames: ['🚶 ', '🏃 ']
        }
      }
)

const gitOptions: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6
  // timeout: {
  //   block: 60000
  // }
}

// https://git-scm.com/docs/git-clone#Documentation/git-clone.txt
export const clone = async (
  repo: string,
  projectName: string,
  options: string[],
  templateName: TTemplateName
): Promise<any> => {
  const git: SimpleGit = simpleGit(gitOptions)
  try {
    clg(`项目下载自 ${pc.cyan(repo)}`)
    const gitCloneFunction = git.clone(repo, projectName, options)
    await logger(gitCloneFunction, '下载耗时: ', {
      estimate: 7000
    })
  } catch (err) {
    log.err(err as string)
    process.exit(1)
  }

  const welcomeMessage = gradientString('cyan', 'magenta').multiline(
    'Hello! 欢迎使用PURE-ADMIN脚手架~ '
  )
  const boxenOprions: boxenOptions = {
    padding: 1,
    margin: 1,
    borderColor: 'cyan',
    borderStyle: 'round'
  }
  clg(boxen(welcomeMessage, boxenOprions))

  // 模板使用提示
  clg(`\r\n ${isShowEmoji('🎉')} 已成功创建项目 ${pc.cyan(projectName)}`)
  clg(` ${isShowEmoji('👉')} 开始使用以下命令: \r\n`)
  clg(` cd ${pc.cyan(projectName)}`)
  clg(' pnpm install \r\n')
  if (templateName === 'tauri') {
    return clg(' pnpm tauri:dev \r\n')
  }
  clg(' pnpm dev \r\n')
}

/**
 * 判断当前模板类型是否存在
 * @param templateName 模板类型
 * @returns { boolean }
 */
export const hasTemplate = (templateName: TTemplateName): boolean => {
  const templateKeys = Reflect.ownKeys(templates)
  const hasTemplate = templateKeys.includes(templateName)
  if (!hasTemplate) {
    log.err(`当前模板类型 ${pc.cyan(`${templateName}`)} 不存在 \r\n `)
    log.info(`请输入以下其中一种模板类型: `)
    templateKeys.forEach((key) => {
      clg(
        pc.bold(
          pc.green(`${key as string} `) + pc.gray(`${templates[key as TTemplateName].description}`)
        )
      )
    })
  }
  return hasTemplate
}
