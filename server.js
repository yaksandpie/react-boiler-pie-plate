var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = 5000;
var ip = 'localhost';

new WebpackDevServer(Webpack(config), {
  publicPath: config.output && config.output.publicPath || '',
  hot: true,
  quiet: true,
  historyApiFallback: true,
  contentBase: './src',
}).listen(port, ip, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(ip + ':' + port);
});
