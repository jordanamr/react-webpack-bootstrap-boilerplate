// shared config (dev and prod)
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  context: path.resolve(__dirname, "../src"),
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        use: [{ loader: "babel-loader", options: { cacheDirectory: true } }, { loader: "source-map-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html.ejs" })],
  performance: {
    hints: false,
  },
};
