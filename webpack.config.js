const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-models/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin()
    ]
}