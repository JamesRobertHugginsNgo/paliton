const path = require('path');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = (env, { mode }) => {
	const isProduction = mode === 'production';

	return {
		mode: isProduction ? 'production' : 'development',
		entry: path.resolve(__dirname, 'src/index.js'),
		output: {
			clean: isProduction,
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[contenthash:8].js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				},
				{
					test: /\.css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader'
					]
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					type: 'asset/resource',
					generator: {
						filename: '[name].[contenthash:8][ext][query]'
					}
				},
				{
					test: /\.svg$/i,
					type: 'asset/inline'
				},
				{
					test: /\.(eot|ttf|woff|woff2)$/i,
					type: 'asset/resource',
					generator: {
						filename: '[name].[contenthash:8][ext][query]'
					}
				}
			]
		},
		plugins: [
			isProduction && new MiniCssExtractPlugin({
				filename: '[name].[contenthash:8].css'
			}),
			new HtmlWebpackPlugin({
				inject: false,
				template: path.resolve(__dirname, 'src/index.ejs'),
				title: 'Document Title'
			})
		].filter(Boolean),
		optimization: {
			minimize: isProduction,
			minimizer: [
				new TerserWebpackPlugin({
					terserOptions: {
						compress: {
							comparisons: false
						},
						mangle: {
							safari10: true
						},
						output: {
							comments: false,
							ascii_only: true
						},
						warnings: false
					}
				}),
				new CssMinimizerPlugin()
			]
		}
	};
};
