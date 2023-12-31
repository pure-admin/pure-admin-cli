import inquirer from 'inquirer'

export const chooseTemplate = async () => {
  const { template } = await inquirer.prompt([
    {
      name: 'template',
      type: 'list',
      message: '请选择模板类型',
      choices: [
        {
          name: 'thin',
          checked: true
        },
        {
          name: 'i18n'
        },
        {
          name: 'tauri'
        },
        {
          name: 'electron'
        },
        {
          name: 'admin'
        }
      ]
    }
  ])
  return template
}

export const inputProjectName = async () => {
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称',
      default: 'vue-pure-admin'
    }
  ])
  return projectName
}

export const isOverwriteDir = async () => {
  const { isOverwrite } = await inquirer.prompt([
    // 返回值为promise
    {
      name: 'isOverwrite', // 与返回值对应
      type: 'list', // list 类型
      message: '目标文件已存在, 请选择一个操作',
      choices: [
        { name: '覆盖(会完全删除之前的同名项目)', value: true },
        { name: '取消', value: false }
      ]
    }
  ])
  return isOverwrite
}

export const chooseDownloadOrigin = async () => {
  const { chooseDownloadOrigin } = await inquirer.prompt([
    {
      name: 'chooseDownloadOrigin',
      type: 'list',
      message: '选择一个代码托管平台下载模板',
      choices: [
        { name: 'Gitee', value: false },
        { name: 'Github', value: true }
      ]
    }
  ])
  return chooseDownloadOrigin
}
