import inquirer from 'inquirer'

export const chooseTemplate = async () => {
  const { template } = await inquirer.prompt([
    {
      name: 'template',
      type: 'list',
      message: 'Please choose a template',
      choices: [
        {
          name: 'thin',
          checked: true
        },
        {
          name: 'no-i18n'
        },
        {
          name: 'tauri'
        },
        {
          name: 'admin'
        }
      ]
    }
  ])
  return template
}

export const isOverwriteDir = async () => {
  const { isOverwrite } = await inquirer.prompt([
    // 返回值为promise
    {
      name: 'isOverwrite', // 与返回值对应
      type: 'list', // list 类型
      message: 'Target directory exists, Please choose an action',
      choices: [
        { name: 'Overwrite', value: true },
        { name: 'Cancel', value: false }
      ]
    }
  ])
  return isOverwrite
}
