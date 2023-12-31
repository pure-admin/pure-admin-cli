# Changelog

## 1.1.0 (2023-12-31)

### 🍏 Perf

- 同名项目移到本地回收站中而不是完全删除，使其更加安全且可逆

## 1.0.0 (2023-12-31)

### ✔️ refactor

- `pure-thin-cli` 重命名为 `@pureadmin/cli`，如果之前安装过`pure-thin-cli`，可以执行`npm uninstall -g pure-thin-cli`将其卸载，然后执行下面命令安装`@pureadmin/cli`脚手架

```bash
npm install -g @pureadmin/cli
# or
yarn global add @pureadmin/cli
# or
pnpm add -g @pureadmin/cli
```
