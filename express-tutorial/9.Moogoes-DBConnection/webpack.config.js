const path = require('path');

module.exports = {
  devtool:'source-map',
  entry: path.join(__dirname, '/src/app.jsx'),
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/src'),
      loaders: [
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ]
    }],
  },
  watch: true
};
