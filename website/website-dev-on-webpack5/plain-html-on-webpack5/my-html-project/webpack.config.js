const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function() {
  return {

    mode: "development",

    entry: {},

    output: {
      path: path.resolve(__dirname, "dist"),
    },
    
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "source.html"),
        filename: "target.html",
        minify: {
          collapseWhitespace: true,
          preserveLineBreaks: true,
        },
      }),
    ],

  }
}
