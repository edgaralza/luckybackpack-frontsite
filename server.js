var path = require('path');
var express = require('express');
var app = express();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var configProduction = require('./webpack.production.config');
var isProduction = process.env.NODE_ENV === 'production';
var port = process.env.PORT || 8080;

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, '/../index.html')
    const publicPath = express.static(path.join(__dirname, '../public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
};

app.use(express.static(__dirname + '/dist'));

app.listen(port, function(err, result) {
  if (err) {
      return console.error(err)
  }
  
  console.log('Listening on port: ' + port);
})
