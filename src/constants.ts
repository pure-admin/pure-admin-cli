import { platform } from 'node:os'

export const WIN_PLATFORM = platform() === 'win32'
export const REGISTER = {
  npm: 'https://registry.npmjs.org/',
  taobao: 'https://registry.npmmirror.com/'
}

export { name, version } from '../package.json'

export const templates = {
  admin: {
    giteeUrl: 'https://gitee.com/yiming_chang/vue-pure-admin.git', // gitee模板下载地址
    githubUrl: 'git@github.com:pure-admin/vue-pure-admin.git', // github模板下载地址
    description: 'vue-pure-admin完整版本', // 模板描述
    branch: 'main' // 分支
  },
  thin: {
    giteeUrl: 'https://gitee.com/yiming_chang/pure-admin-thin.git',
    githubUrl: 'git@github.com:pure-admin/pure-admin-thin.git',
    description: 'vue-pure-admin非国际化精简版本',
    branch: 'main'
  },
  i18n: {
    giteeUrl: 'https://gitee.com/yiming_chang/pure-admin-thin.git',
    githubUrl: 'git@github.com:pure-admin/pure-admin-thin.git',
    description: 'vue-pure-admin国际化精简版本',
    branch: 'i18n'
  },
  tauri: {
    giteeUrl: 'https://gitee.com/yiming_chang/tauri-pure-admin.git',
    githubUrl: 'git@github.com:pure-admin/tauri-pure-admin.git',
    description: 'vue-pure-admin的tauri版本',
    branch: 'main'
  },
  electron: {
    giteeUrl: 'https://gitee.com/yiming_chang/electron-pure-admin.git',
    githubUrl: 'git@github.com:pure-admin/electron-pure-admin.git',
    description: 'vue-pure-admin的electron版本',
    branch: 'master'
  }
}
