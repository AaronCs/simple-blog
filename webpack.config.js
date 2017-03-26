/* eslint-disable */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: 'styles.css',
    // disable: process.env.NODE_ENV === 'development',
})

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        //'react-hot-loader/patch',
        './src/index_container.js',
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
            use: [/*'react-hot-loader/webpack',*/ 'babel-loader'],
        },
        {
            test: /\.scss$/,
            use: extractSass.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader',
            })
        },
        ]
    },
    plugins: [
        extractSass,
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NamedModulesPlugin(),
        //new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        //hot: true,
        inline: true,
    }
};
