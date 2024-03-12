import { Router } from "express";
import axios from "axios";
import { config } from "dotenv";
import NodeCache from "node-cache";

const router = Router();
config();
const apiKey = process.env.WEATHER_API_KEY;
const cache = new NodeCache();

router.route("/").post(async (req, res) => {
  
    const { city } = req.body;
    if (!city) {
      return res.status(400).send("Required parameters are missing");
    }

    const cacheKey = `/weather/${city}`; // Dynamic cache key based on the city
    if (cache.has(cacheKey)) {
      console.log("Getting weather from cache");
      return res.json(cache.get(cacheKey));
    }else{
try {
    const response = (
      await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      )
    ).data;

    cache.set(cacheKey, response);
    console.log("Getting from API");

    return res.json(response);
  } catch (e) {
    console.error("Error:", e);
    return res.status(500).send(e.message);
  }
    }

});

export default router;
