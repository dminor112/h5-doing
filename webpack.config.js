var webpack = require('webpack');
module.exports = {
    entry:[
        'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        //'./scripts/entry' // Your appʼs entry point
        './assets/js/entry.js'
    ],
    output: {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot!jsx-loader?harmony'
        }],
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'react-hot!jsx-loader?harmony'
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(css)$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};