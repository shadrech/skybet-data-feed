"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappings_1 = require("../mappings");
exports.default = (data) => {
    const packets = data.split("\n");
    for (let p of packets) {
        if (!p.length)
            continue;
        const feed = parseSinglePacket(p);
        console.log(convertToJSON(feed));
    }
};
function parseSinglePacket(packet) {
    let cleanPacket = packet.replace(/\\\|/g, "");
    cleanPacket = cleanPacket.substring(1, cleanPacket.length - 1);
    const regex = /\|/;
    return cleanPacket.split(regex);
}
exports.parseSinglePacket = parseSinglePacket;
function convertToJSON(feed) {
    switch (feed[2]) {
        case "event":
            return mappings_1.mapEventPacketToJSON(feed);
        case "market":
            return mappings_1.mapMarketPacketToJSON(feed);
        case "outcome":
            return mappings_1.mapOutcomePacketToJSON(feed);
    }
}
exports.convertToJSON = convertToJSON;
//# sourceMappingURL=index.js.map