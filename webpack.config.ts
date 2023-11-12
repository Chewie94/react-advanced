import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
          // Use HTML from the public folder as a template. Scripts will be injected into this file dynamically during the build process. Ensure that this template serves as the foundation for incorporating dynamic content and functionality.
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        // Specify the loaders and options for processing different types of files
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    // No need to specify extensions for next imports:
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;
