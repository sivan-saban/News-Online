import { Router } from "express";
import axios from "axios";

const router = Router();

router.route("/").get(async (req, res) => {
  try {

    const responseFromNewsApi = (
      await axios.get(
        `https://newsapi.org/v2/top-headlines?country=il&apiKey=aa8e2f88a7ad4ba390fabd7635a5bee8
        `
      )
    ).data;
    return res.json(responseFromNewsApi);
  } catch (e) {
    return res.status(500).send(e);
  }
});

export default router;


