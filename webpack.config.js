/*
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/src/app',
    entry: './main.js',
    output:{
        path: __dirname + '/src/app/js',
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};*/
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const extractLESS = new ExtractTextPlugin('../../dist/css/[name].css');


module.exports = {
    context: __dirname + '/src/app',
    entry: './main.js',
    output:{
        path: __dirname + '/dist/js',
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            }
        ]
    },
    plugins: [
        extractLESS,
        new CopyWebpackPlugin([
            {
                from: './index.html',
                to:'../'
            },
            {
                from: './directives',
                to:'../directives'
            }
        ],
            {
                ignore: [
                    '*.js',
                ]
            })
    ]
};