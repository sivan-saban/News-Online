import 'dotenv/config';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import imagesController from "./images/imagesController";
import weatherController from './weahter/weatherController';
const newsServer = express();

newsServer.use(express.json());
newsServer.use(express.urlencoded({extended: true}));
newsServer.use(bodyParser.json());
newsServer.use(cors());
newsServer.use('/news', imagesController);
newsServer.use('/weather', weatherController);

newsServer.listen(8001);
console.log("Server is Up !");
