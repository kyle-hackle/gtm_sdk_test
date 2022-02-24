const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        client: {
            overlay: true,
        },
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
};
