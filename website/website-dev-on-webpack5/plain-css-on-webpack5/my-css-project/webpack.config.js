const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function() {
  return {

    mode: "development",

    entry: {
      /**
       * /src/source.css -> OUTPUT_DIRECTORY/target.css
       */
      target: path.resolve(__dirname, "src", "source.css"),
    },

    output: {
      /**
       * OUTPUT_DIRECTORY = /dist
       */
      path: path.resolve(__dirname, "dist"),
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            /**
             * CssLoader -> MiniCssExtractPluginLoader
             */ 
            MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        }
      ]
    },
    
    plugins: [
      new MiniCssExtractPlugin(),
    ],

  }
}
