const path = require('path');
const { parserOptions } = require('../../.eslintrc.cjs');
module.exports = {
  env: { browser: true, es2022: true },
  extends: [
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    '../../.eslintrc.cjs',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'index.html'],
  plugins: ['react-refresh', 'react', 'stylelint-scss'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
