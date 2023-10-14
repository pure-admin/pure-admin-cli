export const REGISTER = {
  npm: 'https://registry.npmjs.org/',
  taobao: 'https://registry.npmmirror.com/'
}

export { name, version } from '../package.json'

export const templates = {
  thin: {
    giteeUrl: 'https://gitee.com/yiming_chang/pure-admin-thin.git', // gitee模板下载地址
    githubUrl: 'https://github.com/pure-admin/vue-pure-admin.git', // github模板下载地址
    description: 'vue-pure-admin精简版', // 模板描述
    branch: 'main' // 分支
  },
  i18n: {
    giteeUrl: 'https://gitee.com/yiming_chang/pure-admin-thin.git',
    githubUrl: 'https://github.com/pure-admin/vue-pure-admin.git',
    description: 'vue-pure-admin精简版国际化',
    branch: 'i18n'
  },
  tauri: {
    giteeUrl: 'https://gitee.com/yiming_chang/tauri-pure-admin.git',
    githubUrl: 'https://github.com/pure-admin/vue-pure-admin.git',
    description: 'vue-pure-admin精简版的tauri模板',
    branch: 'main'
  },
  electron: {
    giteeUrl: 'https://gitee.com/yiming_chang/electron-pure-admin.git',
    githubUrl: 'https://github.com/pure-admin/vue-pure-admin.git',
    description: 'vue-pure-admin精简版的electron模板',
    branch: 'master'
  },
  admin: {
    giteeUrl: 'https://gitee.com/yiming_chang/vue-pure-admin.git',
    githubUrl: 'https://github.com/pure-admin/vue-pure-admin.git',
    description: 'vue-pure-admin完整版',
    branch: 'main'
  }
}
