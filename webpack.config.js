const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname,'build/client');
const ENTRY_DIR = ['./src/app/app.js'];

const DEV_ENTRY = ENTRY_DIR.concat(['webpack-hot-middleware/client']);

let webpackConfig = {
    entry: {
        // the app key caused the file name to output as app.js in output:[name]
        app: DEV_ENTRY
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins:[
         new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders:['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            { 
                test: /\.css$/, 
                loaders: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    stats:{
        colors: true
    },
    devtool: 'cheap-module-eval-source-map'

}

module.exports = webpackConfig;