module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['next/babel', '@babel/preset-env', '@babel/preset-react'],
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
      ['transform-remove-console', { exclude: ['error', 'warn'] }],
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@components': './src/components',
            '@atoms': './src/components/atoms',
            '@molecules': './src/components/molecules',
            '@organisms': './src/components/organisms',
            '@templates': './src/templates',
            '@constants': './src/constants',
            '@config': './src/config',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@styles': './src/styles',
            '@types': './src/types',
            '@themes': './src/themes',
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
