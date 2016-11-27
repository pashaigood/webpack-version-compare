const path  = require('path');
const webpackName = path.resolve('.').match(/webpack\d+/).shift();
const webpack = require('./' + webpackName + '/node_modules/webpack');

module.exports = config = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: __dirname + "/dist/" + webpackName,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        // new webpack.ContextReplacementPlugin(/src\/components$/, /^\.\/.*$/)
    ]
};

require('./' + webpackName + '/webpack.decorator')(config);