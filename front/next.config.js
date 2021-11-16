const withImages = require('next-images');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins: [
        ...config.plugins,
        // 다른 쓸데없는 언어 없애주기
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
    };
  },
});

module.exports = withImages();
