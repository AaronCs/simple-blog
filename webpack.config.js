/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index_container.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: '/dist',
            })
        },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            disable: false,
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        hot: true,
    }
};
