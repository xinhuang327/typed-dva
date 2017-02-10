var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname + '/sample', // `__dirname` is root of project and `src` is source
	entry: [
		'./index.tsx',
	],
	output: {
		path: __dirname + '/dist', // `dist` is the destination
		filename: 'bundle.js',
		publicPath: "/assets",
	},
	devServer: {
		contentBase: __dirname + '/sample',
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: ['react-hot-loader', 'ts-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.js$/, //Check for all js files
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015'] }
				}]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: {
						loader: 'css-loader', options: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					}
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css"),
	]
};