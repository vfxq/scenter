import * as express from "express";
import { join } from "path";
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';

//import initializeRoutes from "./routes"

const app = express();
const configWebPack = require('../../webpack.config.js'); 
const compiler = webpack(configWebPack);
const port = 8080;

app.use(webpackDevMiddleware(compiler, {
  publicPath: configWebPack.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {heartbeat: 2000}));


app.use("/", express.static(join(__dirname, "..", "..", "target")));

app.set("views", join(__dirname, "views"));

//initializeRoutes(app);

app.listen(port, ():void => {
  console.log('Listening on port: ', port);
}); 

// declare const module: any;

// if (module.hot) {
//   module.hot.accept();