const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [2, 'username must be at least 2 characters'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [8, 'must be at least 8 characters']
  }
}, {
  timestamps: true
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();

  bcrypt.hash(this.password, 10)
    .then(hashed => {
      this.password = hashed;
      next();
    })
    .catch(next);
});

userSchema.statics.verifyPassword = function(candidatePassword, hashedPassword) {
  return bcrypt.compare(candidatePassword, hashedPassword);
};

module.exports = mongoose.model('User', userSchema);
