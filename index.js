#!/usr/bin/env node
// 使用Node开发命令行工具所执行的Javascript脚本必须在顶部加入 #!/usr/bin/env node
const program = require('commander')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const version = require('./package.json').version

program.version(version) // -V 或者 --version 的时候输出该版本号

const templates = {
	thin: {
		downloadUrl: 'http://gitee.com:yiming_chang/pure-admin-thin#main', // 模板下载地址
		description: 'vue-pure-admin精简版' // 模板描述
	},
	'no-i18n': {
		downloadUrl:
			'http://gitee.com:yiming_chang/pure-admin-thin#delete-i18n',
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

program
	.command('init <template> <project>')
	.description('初始化项目模板')
	.action((templateName, projectName) => {
		const spiner = ora('downloading template, please wait').start()
		// download: 第一个参数是仓库下载地址，第二个参数是下载路径
		const { downloadUrl } = templates[templateName]
		download(downloadUrl, projectName, { clone: true }, (err) => {
			if (err) {
				spiner.fail()
				console.log(
					logSymbols.error,
					chalk.red('request fail, please try again')
				)
				return
			}
			spiner.succeed() // 下载成功提示
			// 模板使用提示
			console.log(
				`\r\n Successfully created project ${chalk.cyan(projectName)}`
			)
			console.log(`\r\n cd ${chalk.cyan(projectName)}`)
			console.log('pnpm install \r\n')
			if (templateName === 'tauri') {
				return console.log('pnpm tauri:dev \r\n')
			}
			console.log('pnpm dev \r\n')
		})
	})
program
	.command('list')
	.description('查看所有可用模板')
	.action(() => {
		for (key in templates) {
			console.log(`${key} ${templates[key].description}`)
		}
	})

// process.argv原生获取命令行参数的方式
program.parse(process.argv)
