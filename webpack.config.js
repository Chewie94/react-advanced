const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            // Use HTML from the public folder as a template. Scripts will be injected into this file dynamically during the build process. Ensure that this template serves as the foundation for incorporating dynamic content and functionality.
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ]
}