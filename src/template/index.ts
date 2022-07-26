import { clone } from '../utils/index'
import { templates } from '../constants'
import { TTemplateName } from '../types'
import { chooseTemplate } from '../prompt'

export const create = async (projectName: string, templateName?: TTemplateName) => {
  const run = async (name: TTemplateName) => {
    const { downloadUrl, branch } = templates[name]
    await clone(downloadUrl, projectName, ['-b', `${branch}`], name)
  }
  if (templateName) {
    run(templateName)
  } else {
    const template = await chooseTemplate()
    run(template)
  }
}
