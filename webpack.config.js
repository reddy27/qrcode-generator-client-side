const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  //plugins: [ new CleanWebpackPlugin(['dist/*'])    ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

optimization: {
    splitChunks: {
        cacheGroups: {
            default: false,
            vendors: false,

            // vendor chunk
            vendor: {
                // name of the chunk
                name: 'vendor',

                // async + async chunks
                chunks: 'all',

                // import file path containing node_modules
                test: /node_modules/,

                // priority
                priority: 20
            },

            // common chunk
            common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 10,
                reuseExistingChunk: true,
                enforce: true
            }
        }
    }
}


};

