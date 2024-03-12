import { Router } from "express";
import axios from "axios";
//require('dotenv').config();
import {config} from "dotenv";
import NodeCache from "node-cache";

const router = Router();
config();
const apiKey = process.env.NEWS_API_KEY;//8
const cache = new NodeCache({stdTTL:10});

router.route("/").get(async (req, res) => {
  if(cache.has("/")){
    console.log("getting from cache");
    return res.send(cache.get("/"));
  }else{
    
  try {
    const responseFromNewsApi = (
      await axios.get(
        `https://newsapi.org/v2/top-headlines?country=il&apiKey=${apiKey}
        `)
    ).data;
    
      cache.set("/", responseFromNewsApi);
      console.log("getting from api");
      
    return res.json(responseFromNewsApi);
  } catch (e) {
    return res.status(500).send(e);
  }

}
});

export default router;


