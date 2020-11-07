const path = require("path");

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // Loaders
  module: {
    rules: [
        // Babel
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        // Sass
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader', options: { implementation: require('sass')} }
          ]
        },
        // Images
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            { loader: 'file-loader', options: { outputPath: 'images'} }
          ]
        },
        // Fonts
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [
            { loader: 'file-loader', options: { outputPath: 'fonts' } }
          ]
        }
    ],
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ]
};
