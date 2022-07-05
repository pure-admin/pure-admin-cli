# pure-thin-cli

![Npm Version](https://img.shields.io/npm/v/pure-thin-cli)
![GitHub License](https://img.shields.io/github/license/Ten-K/pure-thin-cli)
![OSCS Status](https://www.oscs1024.com/platform/badge/Ten-K/pure-thin-cli.svg?size=small)

**中文** | [English](./README.en-US.md)

- 用于快速搭建基于 `vue-pure-admin` 项目的命令行工具

## 🏠 模板类型

- `thin`（[vue-pure-admin 的精简版](https://github.com/xiaoxian521/pure-admin-thin)）
- `no-i18n`（[vue-pure-admin 精简版移除国际化](https://github.com/xiaoxian521/pure-admin-thin/tree/delete-i18n)）
- `tauri`（[vue-pure-admin 的 tauri 模板](https://github.com/xiaoxian521/tauri-pure-admin)）
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
  pure create myproject
```

## ⚠️ 注意

- `no-i18n` 只同步到 `pure-admin-thin v3.1.0`
- `tauri` 只同步到 `pure-admin-thin v3.2.0`
