import pc from 'picocolors'
import semver from 'semver'
import { log } from '../utils'
import { REGISTER } from '../constants'
import axios, { AxiosResponse } from 'axios'

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
    log.err(err as string)
  }
  return res
}

/**
 * 获取npm包所有版本号
 * @param npmName 当前npm包名
 * @param register npm提供的api地址
 * @returns
 */
export const getNpmVersions = async (npmName: string, register = getDefaultRegister()) => {
  const { data } = (await getNpmInfo(npmName, register)) as AxiosResponse
  if (!data) return []
  const versions = Object.keys(data.versions)
  const a = versions.sort((a, b) => {
    return semver.gt(a, b) ? -1 : 1
  })
  return a
}

/**
 * 判断当前npm包版本是否需要更新
 * @param currentVersion 当前版本号
 * @param npmName 当前npm包名
 */
export const checkNpmVersion = async (currentVersion: string, npmName: string) => {
  const versions = await getNpmVersions(npmName)
  const latestVersion = versions[0]
  if (!latestVersion || currentVersion === latestVersion) return
  const dim = pc.dim
  const magenta = pc.magenta
  console.log(
    `\n
                    😀 ${pc.yellow('哇~有更新!')} ${pc.red(currentVersion)} → ${pc.green(
      latestVersion
    )}.
    💯 ${
      magenta('更新日志: ') +
      dim(`https://github.com/Ten-K/${npmName}/releases/tag/v${latestVersion}`)
    }
    👻 ${dim('运行') + magenta(` npm i -g ${npmName} `) + dim('可以更新哦.')}

    💕 ${
      dim('关注') +
      magenta(' pure-thin-cli') +
      dim(`了解最新动态: https://github.com/Ten-K/${npmName}`)
    }
    \n`
  )
}
