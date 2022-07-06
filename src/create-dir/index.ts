import path from 'path'
import fs from 'fs-extra'
import { Ioptions } from '../types'
import { isOverwriteDir } from '../prompt'

export const isExistsFile = async (projectName: string, options: Ioptions) => {
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
        console.log('Cancel')
        return true
      } else {
        // 选择 Overwirte ，先删除掉原有重名目录
        console.log('\r\nRemoving')
        await fs.remove(targetDirectory)
        return false
      }
    }
  } else {
    return false
  }
}
