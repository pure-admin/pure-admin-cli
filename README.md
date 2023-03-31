# pure-thin-cli

![Npm Version](https://img.shields.io/npm/v/pure-thin-cli)
![GitHub License](https://img.shields.io/github/license/Ten-K/pure-thin-cli)
![OSCS Status](https://www.oscs1024.com/platform/badge/Ten-K/pure-thin-cli.svg?size=small)

**中文** | [English](./README.en-US.md)

- 用于快速搭建基于 `vue-pure-admin` 项目的命令行工具
  ![pure-cli.gif](https://i.imgtg.com/2023/03/31/212UC.gif)

## 🏠 模板类型

- `thin`（[vue-pure-admin 的精简版](https://github.com/xiaoxian521/pure-admin-thin)）
- `i18n`（[vue-pure-admin 的精简版国际化](https://github.com/xiaoxian521/pure-admin-thin/tree/i18n)）
- `tauri`（[tauri-pure-admin](https://github.com/xiaoxian521/tauri-pure-admin)）
- `electron`（[electron-pure-admin](https://gitee.com/yiming_chang/electron-pure-admin)）
- `admin`（[vue-pure-admin 完整版](https://github.com/xiaoxian521/vue-pure-admin)）

## 📦 安装

```bash
  npm i pure-thin-cli -g
```

## 🚗 用法

- pure init `模板类型` `项目名称`

```bash
  pure init thin myproject
```

- 或者，你想通过交互式选择模板创建项目：

```bash
  pure create
```

- 如果你不想安装 `pure-thin-cli` 到本地，可以使用以下命令

```bash
  npx pure-thin-cli create
  # 或者
  npx pure-thin-cli init thin myproject
```
