"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappings_1 = require("../mappings");
exports.default = (data) => {
    const packets = convertBufferToStringArray(data);
    for (let p of packets) {
        const feed = parseSinglePacket(p);
        console.log("CONVERT", convertPacketToJSON(feed));
    }
};
function convertBufferToStringArray(data) {
    const arr = data.toString().split("\n");
    return arr.slice(0, arr.length - 1);
}
exports.convertBufferToStringArray = convertBufferToStringArray;
function parseSinglePacket(packet) {
    const cleanPacket = packet.replace(/\\\|/g, "");
    const trimmedPacket = cleanPacket.substring(1, cleanPacket.length - 1);
    const regex = /\|/;
    return trimmedPacket.split(regex);
}
exports.parseSinglePacket = parseSinglePacket;
function convertPacketToJSON(feed) {
    switch (feed[2]) {
        case "event":
            return mappings_1.mapEventPacketToJSON(feed);
        case "market":
            return mappings_1.mapMarketPacketToJSON(feed);
        case "outcome":
            return mappings_1.mapOutcomePacketToJSON(feed);
    }
}
exports.convertPacketToJSON = convertPacketToJSON;
//# sourceMappingURL=index.js.map