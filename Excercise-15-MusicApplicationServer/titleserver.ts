import * as express from 'express';
import {Request,Response  } from "express";
import * as bodyParser from 'body-parser';
import titles from './titles';
class TitleServer{
    
    getConnection():any{
        console.log('title page');
        const titleRouter = express.Router();
        let titleList = new Array();
        titleRouter.use(bodyParser.json());       // to support JSON-encoded bodies
        titleRouter.use(bodyParser.urlencoded({     // to support URL-encoded bodies
          extended: true
        }));
        //Add Title 
        titleRouter.get('/createTitle', (req: Request, res: Response) => {
  console.log('hello');
  const title_id = req.query.title_id ? Number(req.query.title_id) : null;
  const title_name = req.query.title_name ? String(req.query.title_name) : null;
  const lyrisist = req.query.lyrisist ? Number(req.query.lyrisist) : null;
  const singer = req.query.lyrisist ? Number(req.query.singer) : null;
  const director = req.query.director ? Number(req.query.director) : null;

  if (title_id === null || title_id === 0) {
    res.send('Invalid title id in request');
  }
  else if (title_name === null || title_name.length === 0) {
    res.send('Invalid title name in request');
  }
  else if (lyrisist === null || lyrisist === 0) {
    res.send('Invalid lyrisist name in request');
  }
  else if (singer === null || singer === 0) {
    res.send('Invalid lyrisist name in request');
  }
  else if (director === null || director === 0) {
    res.send('Invalid lyrisist name in request');
  }
  else {
    const newLyrisist = new titles(title_id, title_name, lyrisist, singer, director);
    titleList.push(newLyrisist);
    res.send('Successfully added title to the list....<br\>');
  }
});

//Get Titles Information
titleRouter.get('/getAllTitles', (req: Request, res: Response) => {
  let localTitles = [];
  for (const titleOb of titleList) {
    localTitles.push(titleOb);
  }
  console.log(localTitles);
  res.send(JSON.stringify(localTitles));
});
titleRouter.use(function (req: express.Request, res: express.Response, next) {
          res.header("Access-Control-Allow-Origin", "*");
          next();
        });
        

    }
}
const titleServer = new TitleServer();
titleServer.getConnection();
export default titleServer;
