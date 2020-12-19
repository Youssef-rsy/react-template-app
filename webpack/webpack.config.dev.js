"use strict";

var path = require('path');

var fs = require('fs');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var appDirectory = fs.realpathSync(process.cwd());

var resolveAppPath = function resolveAppPath(relativePath) {
  return path.resolve(appDirectory, relativePath);
};

var host = process.env.HOST || 'localhost';
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"]
    }, {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, // Translates CSS into CommonJS
      'css-loader', // Compiles Sass to CSS
      'sass-loader']
    }, {
      test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }, {
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    favicon: resolveAppPath("public/home.ico"),
    inject: true,
    template: resolveAppPath('public/index.html')
  }), new MiniCssExtractPlugin()],
  devServer: {
    // Serve index.html as the base
    contentBase: __dirname + "/public/",
    // Enable compression
    compress: true,
    // Enable hot reloading
    hot: true,
    host: host,
    port: 3000,
    // Public path is root of content base
    publicPath: '/',
    historyApiFallback: true
  }
};