// based of bluestone/.eslintrc
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  extends: ['plugin:prettier/recommended', 'plugin:vue/essential', 'prettier'],
  plugins: ['import', 'vue'],
  rules: {
    'vue/no-unused-components': 'off',
  },
};
