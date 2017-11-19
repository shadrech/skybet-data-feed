"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapEventPacketToJSON(feed) {
    return Object.assign({}, mapHeader(feed), { body: {
            eventId: feed[4],
            category: feed[5],
            subCategory: feed[6],
            name: feed[7],
            startTime: Number(feed[8]),
            displayed: Boolean(Number(feed[9])),
            suspended: Boolean(Number(feed[10]))
        } });
}
exports.mapEventPacketToJSON = mapEventPacketToJSON;
function mapMarketPacketToJSON(feed) {
    return Object.assign({}, mapHeader(feed), { body: {
            eventId: feed[4],
            marketId: feed[5],
            name: feed[6],
            displayed: Boolean(Number(feed[7])),
            suspended: Boolean(Number(feed[8]))
        } });
}
exports.mapMarketPacketToJSON = mapMarketPacketToJSON;
function mapOutcomePacketToJSON(feed) {
    return Object.assign({}, mapHeader(feed), { body: {
            marketId: feed[4],
            outcomeId: feed[5],
            name: feed[6],
            price: feed[7],
            displayed: Boolean(Number(feed[8])),
            suspended: Boolean(Number(feed[9]))
        } });
}
exports.mapOutcomePacketToJSON = mapOutcomePacketToJSON;
function mapHeader(feed) {
    return {
        msgId: Number(feed[0]),
        operation: feed[1],
        type: feed[2],
        timestamp: Number(feed[3])
    };
}
//# sourceMappingURL=index.js.map