const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    full_name: {
      type: String,
      require: true,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      unique: [true, 'Username already exist'],
    },
    professionalHeadline: {
      type: String,
      trim: true,
    },
    imageUrl: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);