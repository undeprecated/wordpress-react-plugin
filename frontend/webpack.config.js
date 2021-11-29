const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../${plugin_slug}/assets'),
        filename: 'js/app.js',
    },
    resolve: {
        modules: [path.join(__dirname, '.'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    plugins: [new MiniCssExtractPlugin({
        filename:"styles.css",
    })],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test:/\.css$/,
                use:[
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "postcss-loader"
                ]
            }
        ],
    }
};