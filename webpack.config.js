var path = require('path');
var webpack = require('webpack');
var config = require('./config');

module.exports = {
    entry:config.entry,
    output:{
        path: path.join(__dirname, 'assets/js'),
        filename: '[name].js'
    },
    plugins: [
//        new webpack.optimize.UglifyJsPlugin({
//            compressor:{
//                warnings: true
//            }
//        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks:2
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            _:'lodash'
        })
    ],
    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        },{
            test: /\.css$/,
            loaders: ['style','css']
        },{
            //test: /\.(png|jpg)$/,
            test: /\.(png|jpg)$/,
            // inline base64 URLs for <=8k images, direct URLs for the rest
            loader: 'url-loader?limit=8192'
            /*loaders: [
             'file?hash=sha512&digest=hex&name=[hash].[ext]',
             'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
             ]*/
        },{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets:['react','es2015']
            }
        }]
    }
}