import pc from 'picocolors'
import logSymbols from 'log-symbols'
import ora, { Ora, Options } from 'ora'
import { TTemplateName } from '../types'
import simpleGit, { SimpleGit, SimpleGitOptions, SimpleGitProgressEvent } from 'simple-git'

const oraOptions: Options = {
  spinner: 'runner'
}
const spinner: Ora = ora(oraOptions)

const progress = ({ progress }: SimpleGitProgressEvent) => {
  const proText = `Progress: ${pc.cyan(progress + '%')}`
  spinner.start().text = proText
  if (progress === 100) {
    spinner.start().text = proText + pc.green(' Download Completed')
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
    console.log(`download from ${pc.cyan(repo)}`)
    await git.clone(repo, projectName, options)
  } catch (err) {
    spinner.fail()
    console.log(logSymbols.error, pc.red('Request fail, Please try again'))
  }

  spinner.succeed() // 下载成功提示
  // 模板使用提示
  console.log(`\r\n Successfully created project ${pc.cyan(projectName)}`)
  console.log(`\r\n cd ${pc.cyan(projectName)}`)
  console.log(' pnpm install \r\n')
  if (templateName === 'tauri') {
    return console.log(' pnpm tauri:dev \r\n')
  }
  console.log(' pnpm dev \r\n')
}
