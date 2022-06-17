#!/usr/bin/env node

const chalk = require('chalk')
const program = require('commander')
const { templates } = require('../src/utils/index')
const version = require('../package.json').version

program.version(version)
program.name('pure').usage(`<command> [option]`)

program
	.command('create <project-name>') // 增加创建指令
	.description('create a new project') // 添加描述信息
	.option('-f, --force', 'overwrite target directory if it exists') // 强制覆盖
	.action((projectName, cmd) => {
		// 引入 create 模块，并传入参数
		require('../src/create')(projectName, cmd)
	})

program
	.command('init <template-name> <project-name>') // 增加创建指令
	.description('create a new project') // 添加描述信息
	.option('-f, --force', 'overwrite target directory if it exists') // 强制覆盖
	.action((templateName, projectName, cmd) => {
		// 引入 create 模块，并传入参数
		require('../src/create')(projectName, cmd, templateName)
	})

program.on('--help', function () {
	console.log()
	console.log(
		`Run ${chalk.cyan(
			'pure <command> --help'
		)} for detailed usage of given command.`
	)
	console.log()
})

program
	.command('list')
	.description('查看所有可用模板')
	.action(() => {
		for (key in templates) {
			console.log(`${key} ${templates[key].description}`)
		}
	})

program.parse(process.argv)
