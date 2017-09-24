const path = require("path"),
	webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin"),
	package = require("./package.json");

module.exports = {
	devtool: "source-map",
	target: "web",
	entry: {
		app: "./src/index.js",
		vendor: Object.keys(package.dependencies)
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "scripts/[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["es2015", "stage-0", "react"]
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: { sourceMap: false }
						},
						{
							loader: "postcss-loader",
							options: {
								plugins: function() {
									return [require("autoprefixer")];
								},
								sourceMap: false
							}
						},
						{
							loader: "resolve-url-loader",
							options: { sourceMap: false }
						},
						{
							loader: "sass-loader",
							options: { sourceMap: false }
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
							loader: "css-loader",
							options: { sourceMap: false }
						},
						{
							loader: "postcss-loader",
							options: {
								plugins: function() {
									return [require("autoprefixer")];
								},
								sourceMap: false
							}
						},
						{
							loader: "resolve-url-loader",
							options: { sourceMap: false }
						}
					]
				})
			},
			{
				test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
				loader:
					"url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
			},
			{
				test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
				loader: "file-loader?name=fonts/[name].[ext]"
			},
			{
				test: /\.(png|jpg|ico)(\?[a-z0-9#=&.]+)?$/,
				loader: "file-loader?name=images/[name].[ext]"
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": { NODE_ENV: JSON.stringify("production") }
		}),
		new ExtractTextPlugin({
			filename: "[name].css",
			disable: false,
			allChunks: true,
			publicPath: "/"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
		}),
		new HtmlWebpackPlugin({
			title: "Curtis Rodgers",
			template: "src/index.html",
			env: true,
			filename: "./index.html",
			chunks: ["vendor", "app"],
			favicon: "./src/static/favicon.ico"
		}),
		new UglifyJsPlugin({
			beautify: false,
			mangle: { screw_ie8: true, warnings: false },
			compress: { screw_ie8: true, warnings: false },
			comments: false
		})
	]
};
