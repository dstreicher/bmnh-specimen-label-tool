// require all test files (files that ends with .spec.js)
var testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
var srcContext = require.context('../../app', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
