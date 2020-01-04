const Signal = require("../../models/signal");
const Car = require("../../models/car");

exports.update = async ctx => {
  const {
    type,
    manufacture,
    average,
    number
  } = ctx.params;

  const info = new Car({
    type,
    manufacture,
    average,
    number
  });

  try {
    await info.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

  let signal = null;
  try {
    signal = await Signal.find().exec();
  } catch (e) {
    ctx.throw(500, e);
  }

  ctx.body = signal;
};

exports.info = async ctx => {
  let info = null;
  try {
    info = await Car.find().exec();
  } catch (e) {
    ctx.throw(500, e);
  }

  ctx.body = info[info.length];
};