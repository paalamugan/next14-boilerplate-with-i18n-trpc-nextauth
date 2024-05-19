const path = require('path');

const prettierConfig = require('./prettier.config');

/** @type {import("eslint").Linter.Config} */
const config = {
  // Configuration for JavaScript files
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['warn', prettierConfig], // Avoid conflict rule between Prettier and Airbnb Eslint
  },
  overrides: [
    {
      files: ['public/**/*.js'],
      env: { browser: true },
    },

    // Configuration for JavaScript files
    {
      files: ['**/*.{js,mjs,cjs,mdx}'],
      env: { es6: true, node: true },
      plugins: ['import'],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      extends: ['next', 'next/core-web-vitals'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },

    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports', 'tailwindcss', 'simple-import-sort'],
      extends: [
        'plugin:tailwindcss/recommended',
        'airbnb',
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: path.join(__dirname, './tsconfig.json'),
      },
      rules: {
        'prettier/prettier': ['warn', prettierConfig], // Avoid conflict rule between Prettier and Airbnb Eslint
        'import/extensions': 'off', // Avoid missing file extension errors, TypeScript already provides a similar feature
        'react/function-component-definition': 'off', // Disable Airbnb's specific function type
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'], // Overrides Airbnb configuration and enable no-restricted-syntax
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
        'import/order': 'off', // Avoid conflict rule between `eslint-plugin-import` and `eslint-plugin-simple-import-sort`
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        'class-methods-use-this': 'off',
        // Tailwind
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'error',
        'tailwindcss/enforces-shorthand': 'error',
        'tailwindcss/no-contradicting-classname': 'error',
      },
    },
    // Configuration for testing
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/{__tests__,__mocks__}/*.mjs'],
      env: { jest: true },
      plugins: ['jest', 'jest-formatting', 'testing-library', 'jest-dom'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
    // Configuration for e2e testing (Playwright)
    {
      files: ['**/*.spec.ts'],
      extends: ['plugin:playwright/recommended'],
    },
    // Configuration for Storybook
    {
      files: ['*.stories.*'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
    // Configuration for TypeScript declaration files
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: ['**/*.md?(x)'],
      extends: 'plugin:mdx/recommended',
      rules: {
        'react/jsx-no-undef': 'off',
        '@next/next/no-img-element': 'off',
      },
    },
    {
      files: ['**/*.{mdx,tsx}'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        'react/no-unescaped-entities': 'off',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'no-restricted-syntax': [
          'error',
          {
            selector:
              "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
            message:
              'Default React import not allowed since we use the TypeScript jsx-transform. If you need a global type that collides with a React named export (such as `MouseEvent`), try using `globalThis.MouseHandler`',
          },
          {
            selector: "ImportDeclaration[source.value='react'] :matches(ImportNamespaceSpecifier)",
            message:
              'Named * React import is not allowed. Please import what you need from React with Named Imports',
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};

module.exports = config;
