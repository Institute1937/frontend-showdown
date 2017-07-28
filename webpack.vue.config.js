const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = options => {
  return {
    entry: './js/vue/index.js',
    output: {
      filename: 'bundle.js',
    },
        resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
         '@': resolve('src')
        }
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, './'),
      compress: true,
      port: 2003,
      historyApiFallback: {
        index: 'js/vue/index.html',
      },
    },
    module: {
      rules: [{
        loader: 'babel-loader',
      },{
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig
      }],
    },
  }
}
