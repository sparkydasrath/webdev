const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src/client'),
	entry: [
		'./App.tsx',
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/client')
	},
	target: 'electron-renderer',

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		}),
		// new webpack.DefinePlugin({
		// 	"process.env": {
		// 		ELECTRON: JSON.stringify(true)
		// 	}
		// })
	],

	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: "awesome-typescript-loader"
		}, {
			enforce: "pre",
			test: /\.js$/,
			loader: "source-map-loader"
		}, {
			test: /\.html$/,
			use: ['html-loader']
		}, {
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader']
		}, {
			test: /\.less$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
		}, {
			test: /\.(jpg|png|gif|svg)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: './assets/',
				}
			}]
		}, {
			test: /\.(ttf|eot|woff|woff2)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: './assets/',
				}
			}]
		}]
	}
}