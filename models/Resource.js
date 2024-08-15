const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['video', 'document', 'exercise'],
    required: true
  }
});

module.exports = mongoose.model('Resource', ResourceSchema);
