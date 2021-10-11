const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
  new webpack.HotModuleReplacementPlugin()
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  //plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { 
          presets: ["@babel/env"],
          cacheDirectory: true,
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },

  plugins: plugins,


  devtool: "source-map",
  
  devServer: {
    devMiddleware: {
      publicPath: "http://localhost:3000/dist/",
    },
    static: {
      directory: path.resolve(__dirname, "public/")
    },
    port: 3000,
    hot: "only"
  },
  
};