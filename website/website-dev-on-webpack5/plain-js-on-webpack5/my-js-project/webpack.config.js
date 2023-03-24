const path = require("path");

module.exports = function() {
  return {
    
    mode: "development",

    entry: {
      /**
       * /src/js/source.js -> OUTPUT_DIRECTORY/target.js
       */
      "js/target": path.resolve(__dirname, "src/source.js"),
    },

    output: {
      /**
       * OUTPUT_DIRECTORY = /dist
       */
      path: path.resolve(__dirname, "dist"),
    },

  }
}
