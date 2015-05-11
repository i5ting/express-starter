var connectionString, db, mongoose, options;

mongoose = require('mongoose');

mongoose = require('mongoose');

var config = require('config');
var host  = config.get('mongodb.host');
var port  = config.get('mongodb.port');
var db    = config.get('mongodb.db');


connectionString = 'mongodb://' + host + ':' + port + '/' + db + '';

options = {
  db: {
    native_parser: true
  },
  server: {
    auto_reconnect: true,
    poolSize: 5
  }
  //,
  // user: 'guojia',
  // pass: 'guojia.ng'
};

mongoose.connect(connectionString, options, function(err, res) {
  if (err) {
    console.log('[mongoose log] Error connecting to: ', +connectionString + '. ' + err);
    return process.exit(1);
  } else {
    return console.log('[mongoose log] Successfully connected to: ', +connectionString);
  }
});

db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('open', function() {
  return console.log('mongoose open success');
});


module.exports = db;
