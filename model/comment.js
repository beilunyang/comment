const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  replies: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model('Comment', CommentSchema);


