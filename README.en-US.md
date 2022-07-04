# pure-thin-cli

![GitHub license](https://img.shields.io/github/license/Ten-K/pure-thin-cli)
[![OSCS Status](https://www.oscs1024.com/platform/badge/Ten-K/pure-thin-cli.svg?size=small)](https://www.oscs1024.com/project/Ten-K/pure-thin-cli?ref=badge_small)

**English** | [中文](./README.md)

- Used to quickly build an command line tool based on the `vue-pure-admin` project

## :house: Template

- `thin`（[pure-admin-thin](https://github.com/xiaoxian521/pure-admin-thin)）
- `no-i18n`（[pure-admin-thin removes internationalization](https://github.com/xiaoxian521/pure-admin-thin/tree/delete-i18n)）

- `tauri`（[tauri-pure-admin](https://github.com/xiaoxian521/tauri-pure-admin)）
- `admin`（[vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin)）

### :red_car: Usage

1. npm i pure-thin-cli -g
2. pure init `template` `name` 或 pure create `name`（select template type through interactive interface）
3. `--force` compulsory coverage of the project name folder (selected)

```js
  pure init thin myproject (--force)
```

Or, you want to create a project through interactive selection template：

```js
  pure create myproject (--force)
```

### :warning: warning

- `no-i18n` only synchronizes to `pure-admin-thin v3.1.0`
- `tauri` only synchronizes to `pure-admin-thin v3.2.0`
