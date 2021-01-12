// production config
const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.jsx",
  output: {
    filename: "js/bundle.[fullhash].min.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [],
});
