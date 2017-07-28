module.exports = options => {
  return {
    entry: './js/vanilla/index.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
       port: 2008,
        historyApiFallback: {
          index: 'js/vanilla/index.html',
      },
    },
  }
}