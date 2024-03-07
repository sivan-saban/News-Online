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
const redis = require("redis");
const client = redis.createClient();
const router = (0, express_1.Router)();
router.route("/").get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseFromNewsApi = (yield axios_1.default.get(`https://newsapi.org/v2/top-headlines?country=il&apiKey=aa8e2f88a7ad4ba390fabd7635a5bee8
        `)).data;
        client.set("key", "value", (err, reply) => {
            console.log(reply); // OK
            client.get("key", (err, reply) => {
                console.log(reply); // value
            });
        });
        return res.json(responseFromNewsApi);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
exports.default = router;
//# sourceMappingURL=newsController.js.map