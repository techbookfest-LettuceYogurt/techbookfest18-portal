import eslint from '@eslint/js'
import tseslint, { ConfigWithExtends, parser } from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import nextPlugin from '@next/eslint-plugin-next'
import hooksPlugin from 'eslint-plugin-react-hooks'
import typescriptParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
    {
        files: ['**/*.ts'],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parser: typescriptParser,
        },
    },
    {
        plugins: {
            react: reactPlugin,
        },
        rules: {
            ...reactPlugin.configs['jsx-runtime'].rules,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        plugins: {
            'react-hooks': hooksPlugin,
        },
        rules: {
            ...hooksPlugin.configs.recommended.rules,
        },
    },
    {
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
        },
    },
    eslintConfigPrettier,
    {
        ignores: ['./.next/*', './node_modules/*', './dist/*'],
    }
)
