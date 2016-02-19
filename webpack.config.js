/**
 * Created by yan on 16-2-19.
 */
var path = require('path');


module.exports = {
  entry: {
    main: path.join(__dirname, 'app', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.js$/,
      exclude: [path.join(__dirname, 'node_modules')],
      loader: 'babel'
    }]
  }
}