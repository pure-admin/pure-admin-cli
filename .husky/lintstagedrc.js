module.exports = {
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write']
}
