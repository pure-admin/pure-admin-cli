import boxen from 'boxen'
import pc from 'picocolors'
import semver from 'semver'
import { log } from '../utils'
import axios, { AxiosResponse } from 'axios'
import { REGISTER } from '../constants'

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
    `    \ud83d\ude00 ${pc.yellow('哇~有更新!')} ${pc.red(currentVersion)} → ${pc.green(
      latestVersion
    )}.
    \ud83d\udcaf ${
      magenta('更新日志: ') +
      dim(`https://github.com/Ten-K/${npmName}/releases/tag/v${latestVersion}`)
    }
    \ud83d\udc7b ${dim('运行') + magenta(` npm i -g ${npmName} `) + dim('可以更新哦.')}

    \ud83d\udc95 ${
      dim('关注') +
      magenta(' pure-thin-cli ') +
      dim(`了解最新动态: https://github.com/Ten-K/${npmName}`)
    }`,
    { padding: 1, margin: 1, borderColor: 'cyan', borderStyle: 'round' }
  )
}
