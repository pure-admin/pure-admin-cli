export interface cmdOptions {
  '--': string[]
  f: boolean
  g: boolean
  force: boolean
  github: boolean
}

interface ITemplatesItem {
  giteeUrl: string
  githubUrl: string
  description: string
  branch: string
}

export interface ITemplates {
  thin: ITemplatesItem
  i18n: ITemplatesItem
  tauri: ITemplatesItem
  electron: ITemplatesItem
  admin: ITemplatesItem
}

export type TTemplateName = 'thin' | 'i18n' | 'tauri' | 'electron' | 'admin'
