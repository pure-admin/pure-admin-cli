import { templates } from '../constants'
import { download } from '../utils/index'
import { TTemplateName } from '../types'
import { chooseTemplate } from '../prompt'

export const create = async (projectName: string, templateName?: TTemplateName) => {
  const run = (name: TTemplateName) => {
    const templateUrl = templates[name].downloadUrl
    download(templateUrl, name, projectName)
  }
  if (templateName) {
    run(templateName)
  } else {
    const template = await chooseTemplate()
    run(template)
  }
}
