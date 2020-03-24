// https://webpack.js.org/guides/author-libraries/

const path = require('path');

module.exports = {
  // mode  : 'production',
  // mode  : 'development',
  entry: path.resolve(__dirname, './../../src/index.js'),
  // devtool: 'source-map', // prod
  // devtool: 'cheap-source-map', // prod
  // devtool: 'cheap-module-eval-source-map', // dev
  // devtool: 'cheap-module-source-map', // prod
  // target : 'web',
  // target: "node",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'umd',
    // umdNamedDefine: true,
    // globalObject  : 'this',
    // globalObject  : 'self',
    globalObject: 'typeof self !== "undefined" ? self : this'
    // libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
