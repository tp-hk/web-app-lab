var path = require('path');
module.exports = {
  entry: './es6/script.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'es6'),
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }]
  }
};

//# sourceMappingURL=webpack.config-compiled.js.map