module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-undef': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
