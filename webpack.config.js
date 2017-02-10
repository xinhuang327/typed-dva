var webpack = require('webpack');

module.exports = {
	context: __dirname + '/sample', // `__dirname` is root of project and `src` is source
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./index.tsx',
	],
	output: {
		path: __dirname + '/dist', // `dist` is the destination
		filename: 'bundle.js',
		publicPath: "/dist",
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
				use: [
					'style-loader',
					{
						loader: 'css-loader', options: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					// 'postcss-loader',
				],
			},
		]
	},
	devtool: "cheap-eval-source-map",
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
};