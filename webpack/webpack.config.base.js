const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const APP_DIR = path.resolve(__dirname, '..', 'src');
const BUILD_DIR = path.resolve(__dirname, '..', 'dist');

const entry = path.join(APP_DIR, 'index.tsx');
const output = { path: BUILD_DIR, filename: 'bundle.js' };

module.exports = {
  entry,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output,
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(APP_DIR, 'index.html'),
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
