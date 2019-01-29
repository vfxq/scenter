import * as express from "express";
import { join } from "path";
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import initializeRoutes from "./routes";

const app = express();
const configWebPack = require('../../configs/webpack/webpack.dev.js'); 
const compiler = webpack(configWebPack);
const port = 8080;

app.use(webpackDevMiddleware(compiler));

app.use(require("webpack-hot-middleware")(compiler, {heartbeat: 2000}));

initializeRoutes(app);
app.set("views", join(__dirname, "views"));
app.use("/", express.static(join(__dirname, "..", "client")));

app.listen(port, ():void => {
  console.log('Listening on port: ', port);
}); 