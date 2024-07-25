/** @type {import('prettier-plugin-embed').PrettierPluginEmbedOptions} */
const prettierPluginEmbedConfig = {
  embeddedSqlIdentifiers: ['sql'],
};

/** @type {import('prettier-plugin-sql').SqlBaseOptions} */
const prettierPluginSqlConfig = {
  language: 'postgresql',
  keywordCase: 'upper',
};

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  printWidth: 100,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-sql', 'prettier-plugin-embed'],
  endOfLine: 'auto',
};

const defaultConfig = {
  ...config,
  ...prettierPluginEmbedConfig,
  ...prettierPluginSqlConfig,
};

module.exports = defaultConfig;
