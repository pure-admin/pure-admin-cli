import { log, clg } from './log'
import pc from 'picocolors'
import ora, { Ora, Options } from 'ora'
import { TTemplateName } from '../types'
import { templates } from '../constants'
import simpleGit, { SimpleGit, SimpleGitOptions, SimpleGitProgressEvent } from 'simple-git'

const oraOptions: Options = {
  spinner: 'runner'
}
const spinner: Ora = ora(oraOptions)

const progress = ({ progress }: SimpleGitProgressEvent) => {
  const proText = `进度: ${pc.cyan(progress + '%')}`
  spinner.start().text = proText
  if (progress === 100) {
    spinner.start().text = proText + pc.green(' 下载完成')
  }
}

const gitOptions: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
  progress
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
    await git.clone(repo, projectName, options)
  } catch (err) {
    spinner.fail()
    log.err('请求失败, 请重试')
  }

  spinner.succeed() // 下载成功提示
  // 模板使用提示
  clg(`\r\n 已成功创建项目 ${pc.cyan(projectName)}`)
  clg(`\r\n cd ${pc.cyan(projectName)}`)
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
