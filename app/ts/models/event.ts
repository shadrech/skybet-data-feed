import * as mongoose from "mongoose";
import { Event } from "../mappings";

export default function() {
  const EventSchema = new mongoose.Schema({
    _id: String, // msgId
    operation: String,
    type: String,
    timestamp: Date,
    eventId: String,
    category: String,
    subCategory: String,
    name: String,
    startTime: Date,
    displayed: Boolean,
    suspended: Boolean
  });

  mongoose.model("Event", EventSchema);
}

export function persistEvent(e: Event) {
  const Event = mongoose.model("Event");
  const event = new Event({
    _id: e.msgId,
    operation: e.operation,
    type: e.type,
    timestamp: new Date(e.timestamp),
    eventId: e.body.eventId,
    category: e.body.category,
    subCategory: e.body.subCategory,
    name: e.body.name,
    startTime: new Date(e.body.startTime),
    displayed: e.body.displayed,
    suspended: e.body.suspended,
  });
  event.save();
}
