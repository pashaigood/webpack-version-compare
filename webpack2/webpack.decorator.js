const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function (config) {
    config.module.loaders[0].query.presets = [['es2015', {"modules": false}]];
    config.plugins = config.plugins.concat([
        new HtmlWebpackPlugin()
    ]);
};