<h1 align="center">@pureadmin/cli</h1>
<p align="center">快速构建pure-admin相关项目的命令行工具</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/cli" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/cli?color=a1b858&label=" alt="NPM version"></a>
</p>

简体中文 | [English](./README.en-US.md)

<img src="https://xiaoxian521.github.io/hyperlink/gif/pure-admin-cli.gif" alt="pure-admin-cli" width="380" />

## 🏠 模板类型

| **模板类型** | **仓库地址**                                                                             |
| :----------- | :--------------------------------------------------------------------------------------- |
| `admin`      | [vue-pure-admin 完整版本](https://github.com/pure-admin/vue-pure-admin)                  |
| `thin`       | [vue-pure-admin 非国际化精简版本](https://github.com/pure-admin/pure-admin-thin)         |
| `i18n`       | [vue-pure-admin 国际化精简版本](https://github.com/pure-admin/pure-admin-thin/tree/i18n) |
| `tauri`      | [vue-pure-admin 的 tauri 版本](https://github.com/pure-admin/tauri-pure-admin)           |
| `electron`   | [vue-pure-admin 的 electron 版本](https://github.com/pure-admin/electron-pure-admin)     |

## 📦 全局安装

```bash
npm install -g @pureadmin/cli
# or
yarn global add @pureadmin/cli
# or
pnpm add -g @pureadmin/cli
```

## 🚀 全局升级

```bash
npm update -g @pureadmin/cli
# or
yarn global upgrade --latest @pureadmin/cli
# or
pnpm up --latest -g @pureadmin/cli
```

## ⛽ 全局卸载

```bash
npm uninstall -g @pureadmin/cli
# or
yarn global remove @pureadmin/cli
# or
pnpm remove -g @pureadmin/cli
```

## ⚙️ 用法

pure init `模板类型` `项目名称`

```bash
pure init thin myproject
```

交互式选择模板并创建项目

```bash
pure create
```

当然也可以选择不安装`@pureadmin/cli`创建项目

```bash
npx @pureadmin/cli init thin myproject
# or
npx @pureadmin/cli create
```

## 🔎 更多命令

检查版本，也可以用于检查是否成功安装`@pureadmin/cli`

```bash
pure -v
```

类似下图所示，代表安装成功

<img src="https://xiaoxian521.github.io/hyperlink/img/pureCliv.jpg" alt="pure-v" width="380" />

更多帮助信息

```bash
pure -h
```

<img src="https://xiaoxian521.github.io/hyperlink/img/pureClih.jpg" alt="pure-h" width="380" />

## License

[MIT © 2022-present, pure-admin](./LICENSE)
