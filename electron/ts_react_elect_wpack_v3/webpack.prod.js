// @ts-nocheck
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let mainConfig = {
    mode: 'production',
    entry: './src/main/main.ts',
    target: 'electron-main',
    output: {
        filename: 'main.bundle.js',
        path: __dirname + '/dist',
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts'],
    },
    module: {
        rules: [{
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                test: /\.(ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader',
                },
            },
            {
                test: /\.(jpg|png|svg|ico|icns)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
};

let rendererConfig = {
    mode: 'production',
    entry: './src/renderer/renderer.tsx',
    target: 'electron-renderer',
    output: {
        filename: 'renderer.bundle.js',
        path: __dirname + '/dist',
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [{
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader',
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap',
                ],
            },
            {
                test: /\.(jpg|png|svg|ico|icns)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/renderer/index.html'),
        }),
    ],
};

module.exports = [mainConfig, rendererConfig];