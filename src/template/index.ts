import { TTemplateName } from '../types'
import { chooseTemplate } from '../prompt'
import { clone, checkNpmVersion } from '../utils'
import { templates, version, name as npmName } from '../constants'

export const create = async (
  projectName: string,
  templateName?: TTemplateName,
  isDownloadForGithub = false
) => {
  const run = async (name: TTemplateName) => {
    const { giteeUrl, githubUrl, branch } = templates[name]
    const downloadUrl = isDownloadForGithub ? githubUrl : giteeUrl
    await clone(downloadUrl, projectName, ['-b', `${branch}`], name)
    await checkNpmVersion(version, npmName)
  }
  if (templateName) {
    run(templateName)
  } else {
    const template = await chooseTemplate()
    run(template)
  }
}
