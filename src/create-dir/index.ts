import path from 'path'
import fs from 'fs-extra'
import pc from 'picocolors'
import { clg } from '../utils'
import ora, { type Ora } from 'ora'
import { type cmdOptions } from '../types'
import { isOverwriteDir } from '../prompt'

const spinner: Ora = ora()

export const isExistsFile = async (projectName: string, options: cmdOptions) => {
  // 获取当前工作目录
  const cwd = process.cwd()
  // 拼接得到项目目录
  const targetDirectory = path.join(cwd, projectName)
  // 判断目录是否存在
  if (fs.existsSync(targetDirectory)) {
    // 判断是否使用 --force 参数
    if (options.force) {
      // 删除重名目录(remove是个异步方法)
      await fs.remove(targetDirectory)
      return false
    } else {
      const isOverwrite = await isOverwriteDir()
      // 选择 Cancel
      if (!isOverwrite) {
        clg(pc.green('取消成功'))
        return true
      } else {
        // 选择 Overwirte ，先删除掉原有重名目录
        try {
          spinner.start('删除中...')
          await fs.remove(targetDirectory)
          spinner.succeed(`${pc.green('成功删除')} ${pc.gray(projectName)}`)
        } catch (error) {
          spinner.fail(`${pc.red('覆盖失败, 请手动删除重名目录')}`)
          process.exit(1)
        }
        return false
      }
    }
  } else {
    return false
  }
}
