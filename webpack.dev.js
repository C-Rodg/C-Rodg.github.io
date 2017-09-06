const path = require("path"),
	webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin"),
	BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
		.BundleAnalyzerPlugin,
	package = require("./package.json");

module.exports = {
	devtool: "inline-source-map",
	target: "web",
	entry: {
		app: "./src/index.js",
		vendor: Object.keys(package.dependencies)
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["stage-0", "es2015", "react"]
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: { sourceMap: true }
						},
						{
							loader: "postcss-loader",
							options: {
								plugins: function() {
									return [require("autoprefixer")];
								},
								sourceMap: true
							}
						},
						{
							loader: "sass-loader",
							options: { sourceMap: true }
						}
					]
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader"
						},
						{
							loader: "postcss-loader",
							options: {
								plugins: function() {
									return [require("autoprefixer")];
								},
								sourceMap: false
							}
						}
					]
				})
			},
			{
				test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg|png|jpg|ico)(\?[a-z0-9#=&.]+)?$/,
				loader: "file-loader"
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
			disable: false,
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
		}),
		new HtmlWebpackPlugin({
			title: "Curtis Rodgers",
			template: "src/index.html",
			filename: "./index.html",
			chunks: ["vendor", "app"],
			favicon: "./src/static/favicon.ico"
		}),
		new UglifyJsPlugin({
			beautify: true,
			mangle: { screw_ie8: true, warnings: false },
			compress: { screw_ie8: true, warnings: false },
			comments: true,
			sourceMap: true
		}),
		new BundleAnalyzerPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, "./src"),
		hot: true,
		port: 3000,
		historyApiFallback: true
	}
};
