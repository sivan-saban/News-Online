import {Router} from "express";
import axios from "axios";
import {config} from "dotenv";
import NodeCache from "node-cache";

const router = Router();
config();
const apiKey = process.env.NEWS_API_KEY;
const cache = new NodeCache();

router.route("/").post(async (req, res) => {
    
      const {category} = req.body;
      if (!category) {
          return res.status(400).send("Required parameters are missing");
      }

      const cacheKey = `/news/${category}`; // Dynamic cache key based on the city
      if (cache.has(cacheKey)) {
        console.log("Getting weather cat from cache");
        return res.json(cache.get(cacheKey));
      }else{
      try {
    const response = (await axios.get(`https://newsapi.org/v2/top-headlines?country=il&category=${category}&apiKey=${apiKey}`
    )
    ).data;

    cache.set(cacheKey, response);
    console.log("Getting cat from API");

      return res.json(response);
    } catch (e) {
      return res.status(500).send(e);
    }
  }
  
});

export default router;