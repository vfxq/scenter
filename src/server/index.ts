import * as express from "express";
import { join } from "path";
import initializeRoutes from "./routes"

const port = 8080;
const app = express();

app.use("/target", express.static(join(__dirname, "..", "..", "target")));

app.set("views", join(__dirname, "views"));

initializeRoutes(app);

app.listen(port, ():void => {
  console.log('Listening on port: ', port);
}); 