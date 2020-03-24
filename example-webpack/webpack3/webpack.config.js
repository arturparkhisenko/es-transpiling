const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './../../src/index.js'),
  // devtool: 'source-map', // prod
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'umd'
    // libraryExport: 'default',
    // umdNamedDefine: true,
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
