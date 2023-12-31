import { chooseTemplate } from '../prompt'
import { type TTemplateName } from '../types'
import { clone, checkNpmVersion, clg } from '../utils'
import { templates, version, name as npmName } from '../constants'

export const create = async (
  projectName: string,
  templateName?: TTemplateName,
  isDownloadForGithub = false
) => {
  const run = async (name: TTemplateName) => {
    const { giteeUrl, githubUrl, branch } = templates[name]
    const downloadUrl = isDownloadForGithub ? githubUrl : giteeUrl

    // 并行执行 - 下载模板和检查脚手架版本
    Promise.all([
      clone(downloadUrl, projectName, ['-b', `${branch}`]),
      checkNpmVersion(version, npmName)
    ]).then((res) => {
      res[1] && clg(res[1])
    })
  }
  if (templateName) {
    run(templateName)
  } else {
    const template = await chooseTemplate()
    run(template)
  }
}
