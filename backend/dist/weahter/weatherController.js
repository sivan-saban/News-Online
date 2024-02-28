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
const apiKey = process.env["f1b112eb60f2b5c4e57d002f26dae584"];
const router = (0, express_1.Router)();
router.route("/").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { city } = req.body;
        if (!city) {
            return res.status(400).send("Required parameters are missing");
        }
        const response = (yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=f1b112eb60f2b5c4e57d002f26dae584`)).data;
        return res.json(response);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
exports.default = router;
//# sourceMappingURL=weatherController.js.map