module.exports = {
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write']
}
