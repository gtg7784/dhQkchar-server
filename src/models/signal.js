const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const Signal = new Schema({
  color: String,
  time: Number
});

Signal.method.addSignal = ({
  color,
  time
}) => {
  const signal = new this({
    color,
    time
  });

  return signal.save();
}

module.exports = mongoose.model('Signal', Signal);