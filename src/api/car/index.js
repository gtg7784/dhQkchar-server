const Router = require('koa-router');

const car = new Router();
const carCtrl = require('./car.controller');

car.get('/update/type=:type&manu=:manufacture&average=:average&number=:number', carCtrl.update);
car.get('/info', carCtrl.info);

module.exports = car;