module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    "camelcase": "off",
    "max-len": [
      "warn",
      {
        "code": 110,
        "tabWidth": 2,
        "comments": 110,
      }
    ],
    'no-console': 'off'
  },
};