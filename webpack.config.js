var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
  context: path.resolve(__dirname, './src'),

  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './js/index'
  ],

  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },

  resolve: {
    extensions: ['', '.js', '.scss', '.jsx']
  },

  devtool: 'eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new DashboardPlugin(dashboard.setData)
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: path.join(__dirname, 'node_modules'),
        loaders: ['babel']
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]']
      }
    ]
  },

  postcss: function () {
    return [autoprefixer];
  }
};
