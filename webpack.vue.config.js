const path = require('path');


module.exports = options => {
  return {
    entry: './js/vue-index.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, './'),
      compress: true,
      port: 2003,
      historyApiFallback: true
    },
    module: {
      rules: [{
        loader: 'babel-loader',
      }],
    },
  }
}
