const path = require('path');


module.exports = options => {
  return {
    entry: './js/cycle/index.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, './'),
      compress: true,
      port: 2005,
       historyApiFallback: {
        index: 'js/cycle/index.html',
      },
    },
    module: {
      rules: [{
        loader: 'babel-loader',
      }],
    },
  }
}
