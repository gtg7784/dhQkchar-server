const Router = require("koa-router");

const signal = new Router();
const signalCtrl = require("./signal.controller");

signal.get("/update/color=:color&time=:time", signalCtrl.update);
signal.get("/info", signalCtrl.info);

module.exports = signal;