/**
 * Created by user on 23.06.17.
 */
module.exports = {
    context: __dirname + '/src/app',
    entry: './main.js',
    output:{
        path: __dirname + '/src/app',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.js$/, loader: 'babel-loader?presets[]=es2015'}
        ]
    },
    devtool:'source-map'
}