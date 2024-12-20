'use strict';

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    context: SRC_PATH,
    entry: {
        index: './index.js',
        chatlist: './chatlist.js',
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].bundle.js',
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: [SRC_PATH],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: [SRC_PATH],
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].style.css',
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['index']
        }),
        new HTMLWebpackPlugin({
            filename: 'chatlist.html',
            template: './chatlist.html',
            chunks: ['chatlist']
        }),
    ],
    devServer: {
        contentBase: BUILD_PATH,
        compress: true,
        port: 9000,
    }
};
