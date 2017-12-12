const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
	console.log(`${env} environment`);

	const isProd = env==='production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	return {
		entry: './src/app.js',
		//entry: './src/playground/destructuring.js',
		//entry: './src/playground/redux-101.js',
		//entry: './src/playground/redux-expensify.js',
		//entry: './src/playground/hoc.js',
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				}, {
					test: /\.(css|sass|scss)/,
					use: CSSExtract.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
							},{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
					/*
					[
						'style-loader',
						'css-loader',
						'sass-loader'
					]
					*/
				}
			],
			loaders : [
				
			]
		},
		plugins: [
			CSSExtract
		],
		devtool: isProd ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			publicPath: '/dist/',
			historyApiFallback: true,
			//clientLogLevel: "info"
			//watch: false,
			watchOptions: {
				//aggregateTimeout: 1,
				poll: 100
			},
			//color: true,
			
		}
	}
};
