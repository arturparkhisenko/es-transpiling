// https://webpack.js.org/guides/author-libraries/

const path = require('path');

// webpack 4 isn't resolved in the WebStorm

module.exports = {
    // mode  : 'production',
    // mode  : 'development',
    entry  : './index.js',
    devtool: 'source-map', // prod
    // devtool: 'cheap-source-map', // prod
    // devtool: 'cheap-module-eval-source-map', // dev
    // devtool: 'cheap-module-source-map', // prod
    // target : 'web',
    // target: "node",
    output : {
        path          : path.resolve(__dirname, './dist'),
        filename      : 'magic-tower.js',
        library       : 'magicTower',
        libraryTarget : 'umd',
        // umdNamedDefine: true,
        // globalObject  : 'this',
        // globalObject  : 'self',
        globalObject: 'typeof self !== "undefined" ? self : this',
        // libraryExport: 'default',
    },
    module : {
        rules: [
            {
                test   : /\.(js)$/,
                exclude: /node_modules/,
                use    : 'babel-loader'
            }
        ]
    }
};
