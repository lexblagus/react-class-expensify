const path = require('path');

module.exports = {
  entry: './src/app.js',
  //entry: './src/playground/destructuring.js',
  //entry: './src/playground/redux-101.js',
  //entry: './src/playground/redux-expensify.js',
  //entry: './src/playground/hoc.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
