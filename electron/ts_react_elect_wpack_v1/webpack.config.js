const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
    mode: 'development',
    output: {
        path: __dirname + "/dist",
        filename: 'main.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
    },
    module: {
        rules: [
            // {
            //     test: /\.ts$/,
            //     enforce: 'pre',
            //     loader: 'tslint-loader',
            //     options: {
            //         typeCheck: true,
            //         emitErrors: true
            //     }
            // },
            {
                test: /\.(tsx?)|(jsx?)$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'awesome-typescript-loader']
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
            }, {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    //     electron: "electron"
    // },
    node: {
        __dirname: false,
        __filename: false,
    },

}

module.exports = [
    // Object.assign({
    //         entry: {
    //             main: './src/index.tsx'
    //         }
    //     },
    //     commonConfig)

    Object.assign({
            target: 'electron-main',
            entry: './src/main.ts',
            output: {
                filename: 'main.js',
                path: __dirname + '/dist',
            }
        },
        commonConfig),
    Object.assign({
            target: 'electron-renderer',
            entry: './src/index.tsx',
            output: {
                filename: 'index.bundle.js',
                path: __dirname + '/dist',
            },
            plugins: [new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'),
            }), ]
        },
        commonConfig)

];