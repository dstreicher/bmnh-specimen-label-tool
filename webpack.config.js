var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'BMNH Label Tool',
      mobile: true
    })
  ]
};

module.exports = config;
