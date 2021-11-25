module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['next/babel'],
    plugins: [
      ['import', { libraryName: 'antd', style: true }, 'syntax-dynamic-import'],
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: true,
        },
      ],
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@components': './components',
            '@containers': './containers',
            '@constants': './constants',
            '@config': './config',
            '@assets': './assets',
            '@hooks': './hooks',
            '@styles': './styles',
            '@util': './util',
            '@pages': './pages',
            '@store': './store',
            '@reducers': './reducers',
            '@sagas': './sagas',
          },
        },
      ],
    ],
  };
};
