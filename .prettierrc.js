var tsOption = {
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSameLine: true,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'auto',
  importOrder: [
    '^re(.*)$',
    '<THIRD_PARTY_MODULES>',
    // TODO: 이후에 containers -> template으로 변경하기
    '^@(?:components|atoms|molecules|organisms|templates|pages|containers)(.*)$',
    '^@(?:reducers|sagas)(.*)$',
    '^@(?:config|assets|hooks|styles|util|store)(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = {
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        ...tsOption,
      },
    },
    {
      files: '*.{js,jsx}',
      options: {
        ...tsOption,
        printWidth: 80,
      },
    },
    {
      files: '*.{css,scss}',
      options: {
        singleQuote: false,
        semi: true,
        useTabs: true,
        tabWidth: 2,
      },
    },
  ],
};
