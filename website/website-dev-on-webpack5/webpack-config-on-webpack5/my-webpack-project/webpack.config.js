const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackRemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = function() {
  return {
    
    // ========== モード設定 ==========
    mode: "development",

    // ========== エントリ設定 ==========
    entry: {
      /**
       * /src/css/source.scss -> OUTPUT_DIRECTORY/css/target.css
       * /src/js/source.js -> OUTPUT_DIRECTORY/js/target.js
       */
      "css/target": path.resolve(__dirname, "src/css/source.css"),
      "js/target": path.resolve(__dirname, "src/js/source.js"),
    },

    // ========== 出力設定 ==========
    output: {
      /**
       * OUTPUT_DIRECTORY = /dist
       */
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },

    // ========== モジュール設定 ==========
    module: {
      rules: [
        {
          /**
           * FILE_TYPE: CSS
           * LOADER: CssLoader -> MiniCssExtractPluginLoader
           */
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          /**
           * FILE_TYPE: JavaScript
           * LOADER: BabelLoader
           */
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                "presets": [ "@babel/preset-env", ],
              },
            }
          ],
        }
      ]
    },
    
    // ========== プラグイン設定 ==========
    plugins: [
      /**
       * FILE_TYPE: HTML
       * /src/source.html -> OUTPUT_DIRECTORY/target.html
       */
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/source.html"),
        filename: "target.html",
        inject: false,
        minify: false,
      }),
      /**
       * FILE_TYPE: CSS
       */
      new MiniCssExtractPlugin(),
      /**
       * FILE_TYPE: JavaScript
       */
      new WebpackRemoveEmptyScriptsPlugin(),
    ],

  }
}
