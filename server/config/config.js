var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/multicourse',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://robgmerrill:multicourse@ds011278.mongolab.com:11278/multicourse',
    port: process.env.PORT || 80
  }
}
