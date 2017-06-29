const mongoose = require('mongoose');

const {Schema} = mongoose;

const ninja = new Schema({
  'name': {
    type: String,
    required: true,
    minlength: [3, 'Name must be longer than 3 characters'],
    trim: true
  },
  'height': {
    type: Number,
    default: 5
  },
  'belt': {
    type: Schema.Types.ObjectId,
    ref: 'Belt'
  },
  'weapons': [{
    type: String
  }]
},
  {timestamps: true}
);

module.exports = mongoose.model('Ninja', ninja);
