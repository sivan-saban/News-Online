import {Router} from "express";
import axios from "axios";

const router = Router();

router.route("/").post(async (req, res) => {
    try {
      const {category} = req.body;
      if (!category) {
          return res.status(400).send("Required parameters are missing");
      }
    const response = (await axios.get(`https://newsapi.org/v2/top-headlines?country=il&category=${category}&apiKey=aa8e2f88a7ad4ba390fabd7635a5bee8`
    )
    ).data;
      return res.json(response);
    } catch (e) {
      return res.status(500).send(e);
    }
  
});

export default router;