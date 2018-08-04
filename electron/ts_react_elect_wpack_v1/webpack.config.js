const path = require('path');

const commonConfig = {
    mode: 'development',
    output: {
        path: __dirname + "/dist",
        filename: '[name].js'
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
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}

module.exports = Object.assign({
        entry: {
            main: './src/index.tsx'
        }
    },
    commonConfig)