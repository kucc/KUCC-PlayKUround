module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['next/babel', '@babel/preset-env'],
    plugins: [
      '@babel/plugin-transform-runtime',
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
            '@components': './src/components',
            '@atoms': './src/components/atoms',
            '@containers': './src/containers',
            '@constants': './src/constants',
            '@config': './src/config',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@styles': './src/styles',
            '@util': './src/util',
            '@pages': './src/pages',
            '@store': './src/store',
            '@reducers': './src/reducers',
            '@sagas': './src/sagas',
          },
        },
      ],
    ],
  };
};
