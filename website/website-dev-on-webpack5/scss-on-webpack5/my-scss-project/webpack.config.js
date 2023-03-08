const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function() {
  return {

    mode: "development",

    entry: {
      /**
       * /src/source.scss -> OUTPUT_DIRECTORY/target.css
       */
      target: path.resolve(__dirname, "src", "source.scss"),
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
          test: /\.scss$/,
          use: [
            /**
             * SassLoader -> CssLoader -> MiniCssExtractPluginLoader
             */
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        }
      ]
    },
    
    plugins: [
      new MiniCssExtractPlugin(),
    ],

  }
}
