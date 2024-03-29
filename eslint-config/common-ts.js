// based on pebbles/.eslintrc.js
module.exports = {
  env: { jest: true },
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: '2021', sourceType: 'module' },
  plugins: ['import', '@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'import/newline-after-import': 'error',
    'no-console': ['error', { allow: ['warn'] }],
    'eol-last': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'index', 'type', 'unknown'
        ],
        pathGroups: [
          {
            pattern: '@day1co/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [], 
      },
    ]
  },
};
