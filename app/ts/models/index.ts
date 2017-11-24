import parsePacketToObject from "../api";
import { persistEvent } from "../models/event";
import { persistMarket } from "../models/market";
import { persistOutcome } from "../models/outcome";
import { Event, Market, Outcome } from "../mappings/index";

export function persistDataToDB(feed: Buffer): void {
  const data = parsePacketToObject(feed);
  data.forEach(d => {
    if (!d) return;

    switch (d.type) {
      case "event":
        persistEvent(d as Event);
        break;

      case "market":
        persistMarket(d as Market);
        break;

      case "outcome":
        persistOutcome(d as Outcome);
        break;
    }
  });
}
