import {Router} from "express";
import axios from "axios";

const apiKey = process.env["f1b112eb60f2b5c4e57d002f26dae584"];
const router = Router();

router.route("/").post(async (req, res) => {
    try {
      const {city} = req.body;
      if (!city) {
          return res.status(400).send("Required parameters are missing");
      }
    const response = (await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=f1b112eb60f2b5c4e57d002f26dae584`
    )
    ).data;
      return res.json(response);
    } catch (e) {
      return res.status(500).send(e);
    }
  
});

export default router;