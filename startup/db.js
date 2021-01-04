const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const dbHost = config.get('db');
  mongoose.connect(dbHost, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    winston.info('Mongoose connected with MongoDB');
  });
}