import { Express, Request, Response } from "express";
const data  = require('../data/common.json');
const menu = require('../data/menu.json');
// const front = require('../../../target/index.html');
 

export default function initializeRoutes(app: Express){
  app.get("/demo", (req:Request, res:Response):void => {
    return res.render("index.pug");
  });

  app.get("/api/menu", (req:Request, res:Response):Response => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(menu));
    return res;
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