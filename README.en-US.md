<h1 align="center">@pureadmin/cli</h1>
<p align="center">Quickly build cli for pure-admin related projects</p>

<p align="center">
<a href="https://www.npmjs.com/package/@pureadmin/cli" target="__blank"><img src="https://img.shields.io/npm/v/@pureadmin/cli?color=a1b858&label=" alt="NPM version"></a>
</p>

English | [简体中文](./README.md)

<img src="https://xiaoxian521.github.io/hyperlink/gif/pure-admin-cli.gif" alt="pure-admin-cli" width="380" />

## 🏠 Template Type

| **Template Type** | **Github Address**                                                                                             |
| :---------------- | :------------------------------------------------------------------------------------------------------------- |
| `admin`           | [vue-pure-admin complete version](https://github.com/pure-admin/vue-pure-admin)                                |
| `thin`            | [vue-pure-admin non-internationalized streamlined version](https://github.com/pure-admin/pure-admin-thin)      |
| `i18n`            | [vue-pure-admin internationalized simplified version](https://github.com/pure-admin/pure-admin-thin/tree/i18n) |
| `tauri`           | [vue-pure-admin tauri version](https://github.com/pure-admin/tauri-pure-admin)                                 |
| `electron`        | [vue-pure-admin electron version](https://github.com/pure-admin/electron-pure-admin)                           |

## 📦 Global Install

```bash
npm install -g @pureadmin/cli
# or
yarn global add @pureadmin/cli
# or
pnpm add -g @pureadmin/cli
```

## 🚀 Global Upgrade

```bash
npm update -g @pureadmin/cli
# or
yarn global upgrade --latest @pureadmin/cli
# or
pnpm up --latest -g @pureadmin/cli
```

## ⛽ Global Uninstall

```bash
npm uninstall -g @pureadmin/cli
# or
yarn global remove @pureadmin/cli
# or
pnpm remove -g @pureadmin/cli
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

## 🔎 More Commands

Check version, can also be used to check whether `@pureadmin/cli` was successfully installed

```bash
pure -v
```

Similar to the picture below, it means the installation is successful

<img src="https://xiaoxian521.github.io/hyperlink/img/pureCliv.jpg" alt="pure-v" width="380" />

More help information

```bash
pure -h
```

<img src="https://xiaoxian521.github.io/hyperlink/img/pureClih.jpg" alt="pure-h" width="380" />

## License

[MIT © 2022-present, pure-admin](./LICENSE)
