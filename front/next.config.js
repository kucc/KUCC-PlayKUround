// TODO: Antd Customizing 위한 설정 마치기
require('dotenv').config();
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withPlugins = require('next-compose-plugins');

// front\node_modules\antd\dist\antd.less
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// front\node_modules\antd\dist\antd.less
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, 'less/antd-custom.less'), 'utf8'),
);

const plugins = [
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }
      return config;
    },
  }),
  withSass,
];
module.exports = withPlugins(plugins);
// module.exports = withBundleAnalyzer({
//   compress: true,
//   webpack(config, { webpack }) {
//     const prod = process.env.NODE_ENV === 'production';
//     return {
//       ...config,
//       mode: prod ? 'production' : 'development',
//       devtool: prod ? 'hidden-source-map' : 'eval',
//       plugins: [
//         ...config.plugins,
//         // 다른 쓸데없는 언어 없애주기
//         new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
//       ],
//     };
//   },
// });

module.exports = withImages();
