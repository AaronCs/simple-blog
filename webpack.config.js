/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            },
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass'),
        }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("./styles.css", {
            allChunks: true
        }),
    ],
    devTool: 'eval-source-map',
    devServer: {
        historyApiFallback: true
    }
};
