import * as mongoose from "mongoose";
import { Outcome } from "../mappings";

export default function() {
  const OutcomeSchema = new mongoose.Schema({
    _id: String, // msgId
    operation: String,
    type: String,
    timestamp: Date,
    marketId: String,
    outcomeId: String,
    name: String,
    price: String,
    displayed: Boolean,
    suspended: Boolean
  });

  mongoose.model("Outcome", OutcomeSchema);
}

export function persistOutcome(o: Outcome) {
  const Outcome = mongoose.model("Outcome");
  const outcome = new Outcome({
    _id: o.msgId,
    operation: o.operation,
    type: o.type,
    timestamp: new Date(o.timestamp),
    marketId: o.body.marketId,
    outcomeId: o.body.outcomeId,
    name: o.body.name,
    price: o.body.price,
    displayed: o.body.displayed,
    suspended: o.body.suspended
  });
  outcome.save();
}
