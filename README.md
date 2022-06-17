# pure-thin-cli

+ 用于快速搭建基于pure-admin-thin项目的命令行工具

## 模板类型

+ thin（[vue-pure-admin的精简版](https://github.com/xiaoxian521/pure-admin-thin)）
+ no-i18n（[vue-pure-admin精简版移除国际化](https://github.com/xiaoxian521/pure-admin-thin/tree/delete-i18n)）
  **注意：** *no-i18n版本只同步到vue-pure-admin的精简版的v3.1.0*
+ tauri（[vue-pure-admin精简版的tauri模板](https://github.com/xiaoxian521/tauri-pure-admin)）
  **注意：** *tauri版本只同步到vue-pure-admin的精简版的v3.2.0*
+ admin（[vue-pure-admin完整版](https://github.com/xiaoxian521/vue-pure-admin)）

### 使用说明

1. npm i pure-thin-cli -g
2. pure init 模板类型 项目名称 或 pure create 项目名称（通过交互式界面创建）
3. --force 强制覆盖同名项目名称文件夹(选填)

> 例如：pure init thin myproject (--force) 或 pure create myproject (--force)
