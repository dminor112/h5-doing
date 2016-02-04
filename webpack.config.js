var webpack = require('webpack');
var devServer = 'webpack-dev-server/client?http://127.0.0.1:3000';
var devServerCfg = 'webpack/hot/only-dev-server';
module.exports = {
    entry:
    {
        bundle: [devServer, devServerCfg, './assets/js/entry.js'],
        register: [devServer, devServerCfg, './assets/js/register.js']
    }
    ,
    output: {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: '[name].js'
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
        },{
            test: /\.scss$/,
            loader: "style!css!sass"
        },{
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};