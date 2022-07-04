const ora = require('ora')
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const downloadGitRepo = require('download-git-repo')

const templates = {
  thin: {
    downloadUrl: 'http://gitee.com:yiming_chang/pure-admin-thin#main', // 模板下载地址
    description: 'vue-pure-admin精简版' // 模板描述
  },
  'no-i18n': {
    downloadUrl: 'http://gitee.com:yiming_chang/pure-admin-thin#delete-i18n',
    description: 'vue-pure-admin精简版移除国际化'
  },
  tauri: {
    downloadUrl: 'http://gitee.com:yiming_chang/tauri-pure-admin#main',
    description: 'vue-pure-admin精简版的tauri模板'
  },
  admin: {
    downloadUrl: 'http://gitee.com:yiming_chang/vue-pure-admin#main',
    description: 'vue-pure-admin完整版'
  }
}

function download(downloadUrl, templateName, projectName) {
  const spiner = ora('downloading template, please wait').start()
  downloadGitRepo(downloadUrl, projectName, { clone: true }, (err) => {
    if (err) {
      spiner.fail()
      console.log(logSymbols.error, chalk.red('request fail, please try again'))
      return
    }
    spiner.succeed() // 下载成功提示
    // 模板使用提示
    console.log(`\r\n Successfully created project ${chalk.cyan(projectName)}`)
    console.log(`\r\n cd ${chalk.cyan(projectName)}`)
    console.log('pnpm install \r\n')
    if (templateName === 'tauri') {
      return console.log('pnpm tauri:dev \r\n')
    }
    console.log('pnpm dev \r\n')
  })
}

module.exports = {
  templates,
  download
}
