export interface Ioptions {
  force: string
}

interface ITemplatesItem {
  downloadUrl: string
  description: string
}

export interface ITemplates {
  thin: ITemplatesItem
  i18n: ITemplatesItem
  tauri: ITemplatesItem
  admin: ITemplatesItem
}

export type TTemplateName = 'thin' | 'i18n' | 'tauri' | 'admin'
