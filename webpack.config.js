var ExtractTextPlugin = require ('extract-text-webpack-plugin');
module.exports = {
    context: __dirname + '/src/app',
    entry: './main.js',
    output:{
        path: __dirname + '/src/app',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            }
        ]
    },
    devtool:'source-map'
};