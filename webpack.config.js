'use strict';

const path = require('path');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  mode: 'production',
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
