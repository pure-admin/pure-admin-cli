import { TTemplateName } from '../types'
import { chooseTemplate } from '../prompt'
import { clone, checkNpmVersion } from '../utils'
import { templates, version, name as npmName } from '../constants'

export const create = async (projectName: string, templateName?: TTemplateName) => {
  const run = async (name: TTemplateName) => {
    const { downloadUrl, branch } = templates[name]
    checkNpmVersion(version, npmName)
    await clone(downloadUrl, projectName, ['-b', `${branch}`], name)
  }
  if (templateName) {
    run(templateName)
  } else {
    const template = await chooseTemplate()
    run(template)
  }
}
