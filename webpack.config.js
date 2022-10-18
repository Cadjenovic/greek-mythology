const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: ["./src/index.js", "./src/main.css"],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        watchFiles: ["./src"],
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
            },
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};
