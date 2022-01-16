// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional: you can modify antd less variables directly here
  // modifyVars: {
  //   // '@primary-color': 'rgb(255, 0, 212)',
  // },
  // Or better still you can specify a path to a file
  lessVarsFilePath: './src/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  module: {
    rules: [
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader?name=fonts/[name].[ext]!static',
      },
    ],
  },
  options: {
    presets: ['@babel/preset-react'],
  },
  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  webpack(config) {
    return config;
  },
  plugins: [
    require('@babel/plugin-proposal-decorators').default,
    {
      legacy: true,
    },
  ],
});
