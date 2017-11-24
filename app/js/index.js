"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const models_1 = require("./models");
const mongoose_1 = require("./setup/mongoose");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.setupTheGoose();
        const client = net.createConnection({
            host: "localhost",
            port: 8282
        }, () => __awaiter(this, void 0, void 0, function* () {
            console.log("Connect to Provider Service");
        }));
        client.on("data", data => {
            models_1.persistDataToDB(data);
        });
        client.on("end", () => {
            console.log("Disconnected from Porvider Service");
        });
    });
}
startServer();
//# sourceMappingURL=index.js.map