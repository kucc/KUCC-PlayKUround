module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier', 'import'],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
};
