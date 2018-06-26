/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
    build: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src")
};

const webpackConfig = {
    mode: "development",
    entry: ["babel-polyfill", path.resolve(paths.src, "app.js")],
    output: {
        path: paths.build,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            // https://github.com/webpack-contrib/file-loader --See for config
            { test: /\.(png|jpg|gif|ttf|otf|svg)$/, loader: "file-loader" },
            // https://www.npmjs.com/package/eslint-loader --See "Usage"
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "eslint-loader" }
        ]
    },
    plugins: [
        //https://github.com/jantimon/html-webpack-plugin#options --See for config.
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }
};

module.exports = webpackConfig;
