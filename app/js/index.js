"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const models_1 = require("./models");
const client = net.createConnection({
    host: "localhost",
    port: 8282
}, () => {
    console.log("Connect to Provider Service");
});
client.on("data", data => {
    models_1.default(data);
});
client.on("end", () => {
    console.log("Disconnected from Porvider Service");
});
//# sourceMappingURL=index.js.map