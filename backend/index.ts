import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import newsController from "./news/newsController";
import weatherController from './weahter/weatherController';
import categoryController from './news/categoryController';

const newsServer = express();

newsServer.use(express.json());
newsServer.use(express.urlencoded({extended: true}));
newsServer.use(bodyParser.json());
newsServer.use(cors());
newsServer.use('/news', newsController);
newsServer.use('/weather', weatherController);
newsServer.use('/category', categoryController);

newsServer.listen(8001);
console.log("Server is Up !");
