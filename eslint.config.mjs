import pluginVue from 'eslint-plugin-vue'
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'

// Inicialização do compat com a configuração recomendada
const compat = new FlatCompat({
  recommendedConfig: { extends: ['eslint:recommended'] }, // Configuração recomendada base
  baseDirectory: fileURLToPath(new URL('.', import.meta.url)),
})

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...pluginVue.configs['flat/recommended'],
  ...compat.config({
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/valid-v-for': 'off',
    },
  }),
]
