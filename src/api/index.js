const Router = require('koa-router');

const api = new Router();
const car = require('./car');
const signal = require('./signal');

api.use('/car', car.routes());
api.use('/signal', signal.routes());

module.exports = api;