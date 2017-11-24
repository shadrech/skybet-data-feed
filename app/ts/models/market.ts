import * as mongoose from "mongoose";
import { Market } from "../mappings";

export default function() {
  const MarketSchema = new mongoose.Schema({
    _id: String, // msgId
    operation: String,
    type: String,
    timestamp: Date,
    eventId: String,
    marketId: String,
    name: String,
    displayed: Boolean,
    suspended: Boolean
  });

  mongoose.model("Market", MarketSchema);
}

export function persistMarket(m: Market) {
  const Market = mongoose.model("Market");
  const market = new Market({
    _id: m.msgId,
    operation: m.operation,
    type: m.type,
    timestamp: new Date(m.timestamp),
    eventId: m.body.eventId,
    marketId: m.body.marketId,
    name: m.body.name,
    displayed: m.body.displayed,
    suspended: m.body.suspended
  });
  market.save();
}
