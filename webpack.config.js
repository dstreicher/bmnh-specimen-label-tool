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
      { test: /\.(png|jpg|gif)$/, loader: "url", query: { limit: 5000, name: 'assets/img-[hash:6].[ext]' } }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
};

module.exports = config;
