const HtmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

require("dotenv").config()
const HOST_URL = process.env.HOST_URL || "http://localhost:8080"
const DETAILS_URL = process.env.DETAILS_URL || "http://localhost:3002"
const deps = require("./package.json").dependencies
module.exports = (_, argv) => ({
	output: {
		publicPath: DETAILS_URL
	},

	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
	},

	devServer: {
		port: 3002,
		historyApiFallback: true
	},

	module: {
		rules: [
			{
				test: /\.m?js/,
				type: "javascript/auto",
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "details",
			filename: "remoteEntry.js",
			remotes: {
				host: `host@${HOST_URL}/remoteEntry.js`
			},
			exposes: {
				"./Details": "./src/App"
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react
				},
				"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"]
				}
			}
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html"
		})
	]
})
