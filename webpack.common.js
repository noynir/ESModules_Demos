
module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`,
    },
    module: {
        loaders:[
            {
                test: /\.js/,
                exclude: [/modules/],
                loader: 'babel-loader?presets[]=es2015',
            }
        ]
    }
};
