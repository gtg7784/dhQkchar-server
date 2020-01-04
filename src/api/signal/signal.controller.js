const Signal = require("../../models/signal");

exports.update = async ctx => {
  const {
    color,
    time
  } = ctx.params;

  const signal = new Signal({
    color,
    time
  });

  try {
    await signal.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = signal;
};

exports.info = async ctx => {
  let signal = null;
  try {
    signal = await Signal.find().exec();
  } catch (e) {
    ctx.throw(500, e);
  }

  ctx.body = signal[signal.length - 1];
}