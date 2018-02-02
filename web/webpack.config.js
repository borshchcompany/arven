const _ = require("lodash");
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const WebpackLivereloadPlugin = require("webpack-livereload-plugin");

const ROOT = path.resolve(__dirname);
const isProd = process.env.NODE_ENV === "production";
const appName = process.env.APP_NAME;

const config = {
	entry: {
		[appName]: `./apps/${appName}/index`
	},
	output: {
		path: path.resolve(ROOT, `./build/${appName}/`),
		filename: "index.js"
	},
	watchOptions: {
		poll: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.(css|less)$/,
				use: ExtractTextPlugin.extract({
					use: [
						`css-loader${isProd ? "?minimize=true" : ""}`,
						"postcss-loader",
						"less-loader"
					],
					fallback: "style-loader"
				})
			}
		]
	},
	resolve: {
		alias: {
			"~": path.resolve(ROOT, "apps/")
		},
		extensions: [".js", ".jsx"]
	},
	plugins: [new ExtractTextPlugin("index.css"), new FriendlyErrorsPlugin()]
};

// We only need to use the webpack-livereload-plugin for development builds.
// Production builds don't have this module.
if (!isProd) {
	config.plugins.push(
		new WebpackLivereloadPlugin({
			appendScriptTag: true
		})
	);
}

if (isProd) {
	config.plugins.push(
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.ContextReplacementPlugin(
			// The path to directory which should be handled by this plugin
			/moment[/\\]locale/,
			// A regular expression matching files that should be included
			/en-us.js/
		),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		})
	);
}

module.exports = _.cloneDeep(config);
