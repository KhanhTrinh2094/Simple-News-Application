var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Categories'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  approver: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('News', NewsSchema);