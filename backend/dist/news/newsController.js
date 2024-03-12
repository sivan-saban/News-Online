"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
//require('dotenv').config();
const dotenv_1 = require("dotenv");
const node_cache_1 = __importDefault(require("node-cache"));
const router = (0, express_1.Router)();
(0, dotenv_1.config)();
const apiKey = process.env.NEWS_API_KEY; //8
const cache = new node_cache_1.default({ stdTTL: 10 });
router.route("/").get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (cache.has("/")) {
        console.log("getting from cache");
        return res.send(cache.get("/"));
    }
    else {
        try {
            const responseFromNewsApi = (yield axios_1.default.get(`https://newsapi.org/v2/top-headlines?country=il&apiKey=${apiKey}
        `)).data;
            cache.set("/", responseFromNewsApi);
            console.log("getting from api");
            return res.json(responseFromNewsApi);
        }
        catch (e) {
            return res.status(500).send(e);
        }
    }
}));
exports.default = router;
//# sourceMappingURL=newsController.js.map