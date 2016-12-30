var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
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
            loader: ExtractTextPlugin.extract('css!sass'),
        }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './src'
    },
    plugins: [
        new ExtractTextPlugin("./styles.css")
    ],
    devtool: "source-map",
};
