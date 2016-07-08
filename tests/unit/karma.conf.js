var path = require('path');
var webpackConfig = require('../../webpack.config');
var srcRoot = path.join(__dirname, "../../");

webpackConfig.resolve = {
  root: srcRoot,
  extensions: ['', '.js']
};

delete webpackConfig.entry;

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: [
      '../../node_modules/jquery/dist/jquery.min.js',
      '../../node_modules/tether/dist/js/tether.min.js',
      '../../node_modules/typeahead.js/dist/typeahead.bundle.min.js',
      '../../node_modules/bootstrap/dist/js/bootstrap.min.js',
      './index.js'
      ],
    preprocessors: {
      './index.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
