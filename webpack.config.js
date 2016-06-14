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
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
};

module.exports = config;
