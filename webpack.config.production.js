var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),

  entry: './js/index',

  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.scss', '.jsx']
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin('../css/main.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!postcss!sass'
        )
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: ['file?name=../img/[name].[ext]']
      }
    ]
  },

  postcss: function () {
    return [autoprefixer];
  }
};
