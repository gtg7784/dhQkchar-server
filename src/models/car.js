const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const Car = new Schema({
  type: String,
  manufacture: Number,
  average: Number,
  number: Number
});

module.exports = mongoose.model('Car', Car);