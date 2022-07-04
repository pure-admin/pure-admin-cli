# pure-thin-cli

- 用于快速搭建基于 pure-admin-thin 项目的命令行工具

## 模板类型

- thin（[vue-pure-admin 的精简版](https://github.com/xiaoxian521/pure-admin-thin)）
- no-i18n（[vue-pure-admin 精简版移除国际化](https://github.com/xiaoxian521/pure-admin-thin/tree/delete-i18n)）
  **注意：** _no-i18n 版本只同步到 vue-pure-admin 的精简版的 v3.1.0_
- tauri（[vue-pure-admin 精简版的 tauri 模板](https://github.com/xiaoxian521/tauri-pure-admin)）
  **注意：** _tauri 版本只同步到 vue-pure-admin 的精简版的 v3.2.0_
- admin（[vue-pure-admin 完整版](https://github.com/xiaoxian521/vue-pure-admin)）

### 使用说明

1. npm i pure-thin-cli -g
2. pure init 模板类型 项目名称 或 pure create 项目名称（通过交互式界面创建）
3. --force 强制覆盖同名项目名称文件夹(选填)

> 例如：pure init thin myproject (--force) 或 pure create myproject (--force)
