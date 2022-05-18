const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gymLogSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const gymLogModel = mongoose.model('gymlog', gymLogSchema);

module.exports = gymLogModel;