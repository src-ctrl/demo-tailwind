const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
        ]
      },
      {
          test: /\.vue$/i,
          use: [
              'vue-loader',
          ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo Tailwind',
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  }
};