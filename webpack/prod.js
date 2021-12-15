const merge = require("webpack-merge");
const path = require("path");
const base = require("./base");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, '../dist')
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000
  },
  optimization: { 
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
 },
  plugins: [
   new CopyPlugin({ 
      patterns: [
         {
            // every file inside src/assets folder
            from: 'src',
            to: 'src'
           },
           {
            from: 'assets/*',
            to: 'assets/*',
            context: 'src/'
        }
      ]
      }),
   ],
});
