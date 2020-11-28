const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '..', 'src');

const entry = path.join(APP_DIR, 'index.tsx');

module.exports = {
  entry,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
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
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: { localIdentName: '[local]__[hash:base64:5]' },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(APP_DIR, 'index.html'),
      filename: './index.html',
    }),
  ],
};
