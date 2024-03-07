import { Router } from "express";
import axios from "axios";

const router = Router();
const apiKey = process.env.NEWS_API_KEY;
//8
router.route("/").get(async (req, res) => {
  try {

    const responseFromNewsApi = (
      await axios.get(
        `https://newsapi.org/v2/top-headlines?country=il&apiKey=${apiKey}
        `
      )
    ).data;
    return res.json(responseFromNewsApi);
  } catch (e) {
    return res.status(500).send(e);
  }
});

export default router;


