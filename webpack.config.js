var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  entry: './app/main.js',
  output: {
    path: __dirname + '/dist/',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(png|jpg|gif)$/, loader: "url", query: { limit: 5000, name: 'assets/img-[hash:6].[ext]' } },
      { test: /\.(html)$/, loader: 'file-loader?name=[name].[ext]' }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './node_modules/jquery/dist/jquery.min.js' },
      { from: './node_modules/tether/dist/js/tether.min.js' },
      { from: './node_modules/typeahead.js/dist/typeahead.bundle.min.js' },
      { from: './node_modules/bootstrap/dist/js/bootstrap.min.js' },
      { from: './node_modules/bootstrap/dist/css/bootstrap.min.css' }
    ])
  ]
};

module.exports = config;
