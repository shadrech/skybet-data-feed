import {
  parseSinglePacket,
  convertPacketToJSON
} from "../";
import {
  Market
} from "../../mappings";

const UPDATE_MARKET: Buffer = Buffer.from("|714|update|market|1511141564951|fe1c7379-7979-49c3-85cc-8edef749950d|5c389d54-ae0c-4f09-83c5-415d38dfe24a|Full Time Result|1|0|");
export const UPDATE_MARKET_ARR: string[] = [
  "714",
  "update",
  "market",
  "1511141564951",
  "fe1c7379-7979-49c3-85cc-8edef749950d",
  "5c389d54-ae0c-4f09-83c5-415d38dfe24a",
  "Full Time Result",
  "1",
  "0",
];
export const UPDATE_MARKET_JSON: Market = {
  msgId: 714,
  operation: "update",
  type: "market",
  timestamp: 1511141564951,
  body: {
    eventId: "fe1c7379-7979-49c3-85cc-8edef749950d",
    marketId: "5c389d54-ae0c-4f09-83c5-415d38dfe24a",
    name: "Full Time Result",
    displayed: true,
    suspended: false
  }
};

describe("Market API", () => {
  it("parseSinglePacket must return an array of tokens stripped of every pipe or backlash", () => {
    expect(parseSinglePacket(UPDATE_MARKET.toString())).toEqual(UPDATE_MARKET_ARR);
  });

  it("convertPacketToJSON must return correct Outcome Object from given array of string tokens", () => {
    expect(convertPacketToJSON(UPDATE_MARKET_ARR)).toMatchObject(UPDATE_MARKET_JSON);
  });
});
