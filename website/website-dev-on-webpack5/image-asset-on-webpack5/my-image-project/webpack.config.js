const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function() {
  return {

    mode: "development",

    entry: {
      /**
       * /src/css/source.css -> OUTPUT_DIRECTORY/css/target.css
       * /src/js/source.js -> OUTPUT_DIRECTORY/js/target.js
       */
      "css/target": path.resolve(__dirname, "src/css/source.css"),
      "js/target": path.resolve(__dirname, "src/js/source.js"),
    },

    output: {
      /**
       * [path]
       * OUTPUT_DIRECTORY = /dist
       */
      path: path.resolve(__dirname, "dist"),
      
      /**
       * [filename]
       * XXX/YYY.ZZZ -> OUTPUT_DIRECTORY/YYY.js
       */
      filename: "[name].js",

      /**
       * [assetModuleFilename]
       * XXX/YYY.ZZZ -> OUTPUT_DIRECTORY/images/YYY.ZZZ
       */
      assetModuleFilename: "images/[name][ext]",
    },

    module: {
      rules: [
        {
          test: /\.(jpg|png)$/,
          type: "asset/resource",
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                sources: {
                  list: [
                    {
                      tag: "img",
                      attribute: "src",
                      type: "src",
                    }   
                  ],
                },
              },
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            /**
             * CssLoader -> MiniCssExtractPluginLoader
             */ 
            MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
      ]
    },
    
    plugins: [
      new HtmlWebpackPlugin({
        /**
         * /src/source.html -> OUTPUT_DIRECTORY/target.html
         */
        template: path.resolve(__dirname, "src/source.html"),
        filename: "target.html",
        inject: false,
      }),
      new MiniCssExtractPlugin(),
    ],

  }
}
