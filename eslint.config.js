import eslint from '@eslint/js';
import jest from 'eslint-plugin-jest';
import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...jest.environments.globals.globals,
      },
    },
  },

  eslint.configs.recommended,

  jest.configs['flat/recommended'],

  {
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': 'warn',
      'no-console': 'off',

      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },

  {
    ignores: ['dist/', 'coverage/', 'node_modules/', '.vercel/'],
  },
];