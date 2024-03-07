import {Router} from "express";
import axios from "axios";
require('dotenv').config();

const router = Router();
const apiKey = process.env.NEWS_API_KEY;

router.route("/").post(async (req, res) => {
    try {
      const {category} = req.body;
      if (!category) {
          return res.status(400).send("Required parameters are missing");
      }
    const response = (await axios.get(`https://newsapi.org/v2/top-headlines?country=il&category=${category}&apiKey=${apiKey}`
    )
    ).data;
      return res.json(response);
    } catch (e) {
      return res.status(500).send(e);
    }
  
});

export default router;