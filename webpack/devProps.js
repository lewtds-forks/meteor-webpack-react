var host = 'localhost';
var webpackPort = 9090;
var meteorPort = 3000;

module.exports = {
  host: host,
  webpackPort: webpackPort, 
  meteorPort: meteorPort,
  baseUrl: 'http://' + host + ':' + webpackPort,
  contentBase: 'http://' + host + ':' + meteorPort,
};
