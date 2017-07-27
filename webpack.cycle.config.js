var path = require('path');


module.exports = {
  entry: 
           ['./js/cycle/index.js']
  ,
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  },
  // plugins: ( ENV == 'production' ?
  //            [
  //             new webpack.optimize.UglifyJsPlugin({minimize: true}),
  //            ]
  //            :
  //            [new webpack.HotModuleReplacementPlugin()]
  // ),
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    // hot: true
    port: 2007,
       historyApiFallback: {
        index: 'js/cycle/index.html',
      },
  }
};
