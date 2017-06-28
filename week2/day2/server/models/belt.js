const mongoose = require('mongoose');
const { Schema } = mongoose;

const beltSchema = new Schema({
  color: {
    type: String,
    require: true,
    unique: true
  },
  level: {
    type: Number,
    min: 7,
    max: 10,
    unique: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Belt', beltSchema);
