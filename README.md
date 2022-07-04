# pure-thin-cli

![GitHub license](https://img.shields.io/github/license/Ten-K/pure-thin-cli)
[![OSCS Status](https://www.oscs1024.com/platform/badge/Ten-K/pure-thin-cli.svg?size=small)](https://www.oscs1024.com/project/Ten-K/pure-thin-cli?ref=badge_small)

**中文** | [English](./README.en-US.md)

- 用于快速搭建基于 `vue-pure-admin` 项目的命令行工具

## :house: 模板类型

- `thin`（[vue-pure-admin 的精简版](https://github.com/xiaoxian521/pure-admin-thin)）
- `no-i18n`（[vue-pure-admin 精简版移除国际化](https://github.com/xiaoxian521/pure-admin-thin/tree/delete-i18n)）
- `tauri`（[vue-pure-admin 的 tauri 模板](https://github.com/xiaoxian521/tauri-pure-admin)）
- `admin`（[vue-pure-admin 完整版](https://github.com/xiaoxian521/vue-pure-admin)）

### :red_car: 使用说明

1. npm i pure-thin-cli -g
2. pure init `模板类型` `项目名称` 或 pure create `项目名称`（通过交互式界面选择模板类型）
3. `--force` 强制覆盖同名项目名称文件夹(选填)

```js
  pure init thin myproject (--force)
```

或者，你想通过交互式选择模板创建项目：

```js
  pure create myproject (--force)
```

### :warning: 注意

- `no-i18n` 只同步到 `pure-admin-thin v3.1.0`
- `tauri` 只同步到 `pure-admin-thin v3.2.0`
