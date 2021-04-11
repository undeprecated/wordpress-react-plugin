const path = require('path');

module.exports = {
    entry: './frontend/index.js',
    output: {
        path: path.resolve(__dirname, '${plugin_slug}/assets'),
        filename: 'js/app.js',
    },
    resolve: {
        modules: [path.join(__dirname, 'frontend'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    }
};