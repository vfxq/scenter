import { Express, Request, Response } from "express";
const data  = require('../data/common.json');
// const front = require('../../../target/index.html');
 

export default function initializeRoutes(app: Express){
  app.get("/demo", (req:Request, res:Response):void => {
    return res.render("index.pug");
  });

  app.get("/api", (req:Request, res:Response):Response => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
    return res;
  });

  // app.get("*", (req:Request, res:Response):any =>{
  //   return res.sendFile(front);
  // })
}