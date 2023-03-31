const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = function() {
  return {

    mode: "development",

    entry: {},

    output: {
      /**
       * OUTPUT_DIRECTORY = /dist
       */
      path: path.resolve(__dirname, "dist"),
    },
    
    plugins: [
      new HtmlWebpackPlugin({
        /**
         * /src/source.html -> OUTPUT_DIRECTORY/target.html
         */
        template: path.resolve(__dirname, "src", "source.html"),
        filename: "target.html",
        inject: true,
        minidfy: false,
      }),
      new FaviconsWebpackPlugin({
        /**
         * /src/assets/images/favicon.png
         * -> /favicon.ico                  (#)
         *    /favicon-16x16.png            (#)
         *    /favicon-32x32.png            (MacOS)
         *    /favicon-48x48.png            (#)
         *    /apple-touch-icon-180x180.png (iOS)
         *    /android-chrome-192x192.png   (Android)
         *    /android-chrome-512x512.png   (Android)
         *    /mstile-150x150.png           (Windows)
         */
        logo: path.resolve(__dirname, "src/assets/images/favicon.png"),
        mode: "webapp",
        devMode: "webapp",
        prefix: "/",
        inject: true,
        favicons: {
          icons: {
            android: [
              "android-chrome-192x192.png",
              "android-chrome-512x512.png",
            ],
            appleIcon: [
              "apple-touch-icon-180x180.png",
            ],
            appleStartup: false,
            favicons: [
              "favicon-16x16.png",
              "favicon-32x32.png",
              "favicon-48x48.png",
              "favicon.ico",
            ],
            windows: [
              "mstile-150x150.png",
            ],
            yandex: false,
          }
        },
      }),
    ],

  }
}
