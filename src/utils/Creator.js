const { download } = require('./index')

class Creator {
  constructor(templateUrl, templateName, projectName) {
    this.templateUrl = templateUrl
    this.templateName = templateName
    this.projectName = projectName
  }
  // 创建项目部分
  create() {
    download(this.templateUrl, this.templateName, this.projectName)
  }
}

module.exports = Creator
