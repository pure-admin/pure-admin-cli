import boxen from 'boxen'
import pc from 'picocolors'
import semver from 'semver'
import { type CAC } from 'cac'
import { log } from '../utils'
import axios, { type AxiosResponse } from 'axios'
import { REGISTER, WIN_PLATFORM } from '../constants'

/**
 * 根据win平台判断是否显示emoji
 * @param emoji emoji表情
 * @returns
 */
export const isShowEmoji = (emoji: string) => {
  return WIN_PLATFORM ? '' : emoji
}

/**
 * 获取npm或taobao镜像对应的api
 * @param registerOrigin npm包信息来源
 * @returns
 */
export const getDefaultRegister = (registerOrigin: 'npm' | 'taobao' = 'taobao') => {
  return REGISTER[registerOrigin]
}

/**
 * 获取npm包信息
 * @param npmName 当前npm包名
 * @param register npm提供的api地址
 * @returns
 */
export const getNpmInfo = async (npmName: string, register = getDefaultRegister()) => {
  const npmUrl = register + npmName
  let res
  try {
    res = await axios.get(npmUrl)
  } catch (err) {
    log.warning(`未发现${npmName}包，请检查是否发布到${register}`)
    process.exit(1)
  }
  return res
}

/**
 * 获取npm包最新版本号
 * @param npmName 当前npm包名
 * @param register npm提供的api地址
 * @returns
 */
export const getNpmLatestVersion = async (npmName: string, register = getDefaultRegister()) => {
  const { data } = (await getNpmInfo(npmName, register)) as AxiosResponse
  return data['dist-tags'].latest
}

/**
 * 判断当前npm包版本是否需要更新
 * @param currentVersion 当前版本号
 * @param npmName 当前npm包名
 */
export const checkNpmVersion = async (currentVersion: string, npmName: string) => {
  const latestVersion = await getNpmLatestVersion(npmName)
  if (semver.lt(latestVersion, currentVersion) || latestVersion === currentVersion) return
  const dim = pc.dim
  const magenta = pc.magenta
  return boxen(
    `${isShowEmoji('🎉')} ${pc.yellow('哇~有更新!')} ${pc.red(currentVersion)} → ${pc.green(
      latestVersion
    )}\n${isShowEmoji('📄')} ${
      magenta('更新日志: ') + dim(`https://github.com/pure-admin/${npmName}/releases`)
    }\n${isShowEmoji('🚀')} ${
      dim('运行') + magenta(` npm i -g ${npmName}@latest `) + dim('升级到最新版脚手架')
    }`,
    { padding: 1, margin: 1, borderColor: 'cyan', borderStyle: 'round' }
  )
}

/**
 * 检查执行命令是否存在无效的选项
 * @param cli
 */
export function checkPureOptions(cli: CAC) {
  /** 过滤出执行命令的所有选项 */
  const argvOptions = process.argv.filter((argv) => argv.startsWith('-'))

  /** 有效的选项 */
  const availableOptions = ['-f', '-h', '-v', '-h', '--force', '--github', '--version', '--help']

  /** 无效的选项 */
  const invalidOptions = argvOptions.find((argv) => !availableOptions.includes(argv))

  if (!invalidOptions) return
  log.err(`无效的选项: ${invalidOptions}`)
  cli.outputHelp()
  process.exit(1)
}
