const path = require('path');
module.exports = {
  env: { browser: true, es2022: true },
  extends: [
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    '../../.eslintrc.cjs',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'index.html'],
  plugins: ['react-refresh', 'react'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
