require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();
const api = require("./api");

const mongoose = require("mongoose");
const bodyParser = require("koa-bodyparser");

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => {
    console.log(`Successfully connected to mongodb`);
  })
  .catch(err => {
    console.error(err);
  });

const port = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser());

router.use("/api", api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, async () => {
  console.log("오빠char server is listening to port " + port);
});
