"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
const event_1 = require("../models/event");
const market_1 = require("../models/market");
const outcome_1 = require("../models/outcome");
function persistDataToDB(feed) {
    const data = api_1.default(feed);
    data.forEach(d => {
        if (!d)
            return;
        switch (d.type) {
            case "event":
                event_1.persistEvent(d);
                break;
            case "market":
                market_1.persistMarket(d);
                break;
            case "outcome":
                outcome_1.persistOutcome(d);
                break;
        }
    });
}
exports.persistDataToDB = persistDataToDB;
//# sourceMappingURL=index.js.map