const path = require('path');
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    test: './src/test/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve('src'), path.resolve('test')]
      },
      // {
      //   test: /\.less$/,
      //   use: ["style-loader",{ loader: 'css-loader', options: { importLoaders: 1 } },"postcss-loader",{ loader: 'less-loader', options: { importLoaders: 1 } } ]
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]?v=[hash:7]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  externals: {
    jquery: 'jQuery'
  }
};
