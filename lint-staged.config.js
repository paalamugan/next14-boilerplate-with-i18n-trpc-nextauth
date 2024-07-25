const lintStagedConfig = {
  '**/*.{js,mjs,ts,tsx,md,mdx}': [
    'eslint --fix --no-ignore --cache --max-warnings 0',
    'prettier --check --write',
  ],
  '**/*.ts?(x)': () => 'npm run type-check',
  '**/*.css': ['stylelint --allow-empty-input --max-warnings 0 --fix', 'prettier --write'],
  '**/*.{json,yaml}': ['prettier --check --write'],
};

export default lintStagedConfig;
