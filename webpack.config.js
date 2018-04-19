const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: "production",
    entry: [
        path.resolve(__dirname, "src/client/index.js"),
        'react-hot-loader/patch'
    ],
    output: {
        path: path.resolve(__dirname, "/"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','es2015', 'react', 'stage-0'],
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: 'style-loader!css-loader'
            },
            {
                test: /\.(graphql|gql)$/,
                loader: 'graphql-tag/loader'
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/client/index.html"),
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "/"),
        compress: true,
        port: 9000,
        stats: 'errors-only',
        historyApiFallback: true,
        open: true
    }
}