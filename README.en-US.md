<h1 align="center">@pureadmin/cli</h1>
<p align="center">Quickly build cli for pure-admin related projects</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/cli" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/cli?color=a1b858&label=" alt="NPM version"></a>
</p>

English | [简体中文](./README.md)

<img src="https://xiaoxian521.github.io/hyperlink/gif/pure-admin-cli.gif" alt="pure-admin-cli" width="340" />

## 🏠 Template Type

| **Template Type** | **Github Address**                                                                       |
| :---------------: | :--------------------------------------------------------------------------------------- |
|      `admin`      | [vue-pure-admin 完整版本](https://github.com/pure-admin/vue-pure-admin)                  |
|      `thin`       | [vue-pure-admin 非国际化精简版本](https://github.com/pure-admin/pure-admin-thin)         |
|      `i18n`       | [vue-pure-admin 国际化精简版本](https://github.com/pure-admin/pure-admin-thin/tree/i18n) |
|      `tauri`      | [vue-pure-admin 的 tauri 版本](https://github.com/pure-admin/tauri-pure-admin)           |
|    `electron`     | [vue-pure-admin 的 electron 版本](https://github.com/pure-admin/electron-pure-admin)     |

## 📦 Install

```bash
npm install @pureadmin/cli
# or
yarn add @pureadmin/cli
# or
pnpm add @pureadmin/cli
```

## ⚙️ Usage

pure init `template type` `project name`

```bash
pure init thin myproject
```

Interactively select templates and create projects

```bash
pure create
```

Of course, you can also choose to create a project without installing `@pureadmin/cli`

```bash
npx @pureadmin/cli init thin myproject
# or
npx @pureadmin/cli create
```

## License

[MIT © 2022-present, pure-admin](./LICENSE)
