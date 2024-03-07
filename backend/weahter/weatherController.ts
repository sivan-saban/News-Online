import {Router} from "express";
import axios from "axios";
require('dotenv').config();
// import {config} from "dotenv";
// config();

const router = Router();
const apiKey = process.env.WEATHER_API_KEY;

router.route("/").post(async (req, res) => {
    try {
      const {city} = req.body;
      if (!city) {
          return res.status(400).send("Required parameters are missing");
      }
    const response = (await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    )
    ).data;
      return res.json(response);
    } catch (e) {
      return res.status(500).send(e);
    }
  
});

export default router;