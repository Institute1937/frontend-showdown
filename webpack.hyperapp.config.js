const path = require('path');


module.exports = options => {
  return {
    entry: './js/index.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, './'),
      compress: true,
      port: 2002,
      historyApiFallback: true
    },
    module: {
      rules: [{
        loader: 'babel-loader',
      }],
    },
  }
}
