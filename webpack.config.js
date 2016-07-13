var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    // __dirname is root directory
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    //tell webpack what transformations to make 
    loaders: [
    //regexp that says any js files excluding nodemodules,
    //babel-loader is the transformation
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};