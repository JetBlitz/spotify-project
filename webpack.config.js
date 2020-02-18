const path = require('path');

const SRC_DIR = path.join(__dirname, "/src");
const DIST_DIR = path.join(__dirname, "dist");

module.exports = {
  mode: process.env.MODE || "development",
  entry: SRC_DIR,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use:
        [
          {
            loader: 'babel-loader'
          }
        ]
      }

    ]


  }
};