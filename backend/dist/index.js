"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const newsController_1 = __importDefault(require("./news/newsController"));
const weatherController_1 = __importDefault(require("./weahter/weatherController"));
const categoryController_1 = __importDefault(require("./news/categoryController"));
const newsServer = (0, express_1.default)();
newsServer.use(express_1.default.json());
newsServer.use(express_1.default.urlencoded({ extended: true }));
newsServer.use(body_parser_1.default.json());
newsServer.use((0, cors_1.default)());
newsServer.use('/news', newsController_1.default);
newsServer.use('/weather', weatherController_1.default);
newsServer.use('/category', categoryController_1.default);
newsServer.listen(8001);
console.log("Server is Up !");
//# sourceMappingURL=index.js.map