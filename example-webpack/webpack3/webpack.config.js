const path = require('path');

module.exports = {
    entry : './index.js',
    // devtool: 'source-map', // prod
    output: {
        path         : path.resolve(__dirname, './dist'),
        filename     : 'magic-tower.js',
        library      : 'magicTower',
        libraryTarget: 'umd',
        // libraryExport: 'default',
        // umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test   : /\.(js)$/,
                exclude: /node_modules/,
                use    : 'babel-loader'
            }
        ]
    }
};
