const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gymSessionSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const gymSessionModel = mongoose.model('gymlog', gymSessionSchema);

module.exports = gymSessionModel;