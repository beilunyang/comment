const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const p = mongoose.connect('mongodb://localhost/comment', {
  useMongoClient: true,
});

p.then(() => console.log('mongodb connect success'))
  .catch((err) => console.error('mongodb connect fail'));

exports.Client = require('./client');
exports.Comment = require('./comment');
