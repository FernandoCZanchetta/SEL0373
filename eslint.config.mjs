import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      'eslint.config.mjs',
      '**/migrations/*',
      '*.spec.ts',
      'dist/*',
      '.angular/*',
      'node_modules/*',
      '.github/*',
    ],
  },
  ...compat.extends('plugin:@typescript-eslint/recommended', 'eslint:recommended'),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',
      },
    },

    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-extra-parens': ['error', 'all'],
      'no-unreachable-loop': 'error',
      semi: ['error', 'never'],
      'accessor-pairs': 'error',
      'array-callback-return': ['error', { checkForEach: true }],
      'block-scoped-var': 'error',
      'consistent-return': 'warn',
      'class-methods-use-this': 'warn',
      curly: 'error',
      'default-case': 'warn',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-location': ['error', 'property'],
      'dot-notation': 'error',
      eqeqeq: 'warn',
      'grouped-accessor-pairs': 'warn',
      'guard-for-in': 'error',
      'max-classes-per-file': 'error',
      'no-caller': 'error',
      'no-constructor-return': 'error',
      'no-else-return': 'error',
      'no-empty-function': ['error', { allow: ['constructors'] }],
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': ['error', { allow: ['!!', '+'] }],
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-use-before-define': 'error',
      'vars-on-top': 'error',
      'require-await': 'error',
      'prefer-regex-literals': 'error',
      'prefer-named-capture-group': 'warn',
      'no-with': 'error',
      'no-void': 'error',
      'no-useless-return': 'error',
      'no-useless-concat': 'error',
      'no-unused-vars': ['off', { vars: 'local', args: 'none' }],
      'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      'block-spacing': 'error',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      camelcase: ['error', { ignoreGlobals: true }],
      'function-paren-newline': ['error', 'consistent'],
      'function-call-argument-newline': ['error', 'consistent'],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'func-call-spacing': 'error',
      'eol-last': 'error',
      'comma-style': 'error',
      'comma-spacing': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'jsx-quotes': 'error',
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreRegExpLiterals: true,
        },
      ],
      'multiline-ternary': ['error', 'always-multiline'],
      'no-lonely-if': 'error',
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'prefer-exponentiation-operator': 'error',
      'spaced-comment': 'error',
      'space-in-parens': 'error',
      'semi-style': 'error',
      'semi-spacing': 'error',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'quote-props': ['error', 'consistent-as-needed'],
      'prefer-arrow-callback': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-destructuring': ['error', { object: true, array: false }],

      'object-shorthand': 'error',
      'no-var': 'error',
      'no-useless-rename': 'error',
      'no-duplicate-imports': 'error',
      'arrow-spacing': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'arrow-body-style': ['warn', 'as-needed'],
    },
  },
]
