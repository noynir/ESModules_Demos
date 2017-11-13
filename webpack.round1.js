const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    entry:'./js/round1/index.js',
    output:{
        path: `${__dirname}/dist/round1`
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            filename: 'index.html'
        })
    ]
});

