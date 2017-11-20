import {
  parseSinglePacket,
  convertPacketToJSON
} from "../";
import {
  Event
} from "../../mappings";

const CREATE_EVENT: Buffer = Buffer.from("|783|create|event|1511141567622|fb8e8f8f-ef3e-4d41-829b-458fed2163b3|Football|Premier League|\\|Newcastle\\| vs \\|Manchester City\\||1511141597464|0|1|");
export const CREATE_EVENT_ARR: string[] = [
  "783",
  "create",
  "event",
  "1511141567622",
  "fb8e8f8f-ef3e-4d41-829b-458fed2163b3",
  "Football",
  "Premier League",
  "Newcastle vs Manchester City",
  "1511141597464",
  "0",
  "1",
];
export const CREATE_EVENT_JSON: Event = {
  msgId: 783,
  operation: "create",
  type: "event",
  timestamp: 1511141567622,
  body: {
    eventId: "fb8e8f8f-ef3e-4d41-829b-458fed2163b3",
    category: "Football",
    subCategory: "Premier League",
    name: "Newcastle vs Manchester City",
    startTime: 1511141597464,
    displayed: false,
    suspended: true
  }
};

test("parseSinglePacket must return an array of tokens stripped of every pipe or backlash", () => {
  expect(parseSinglePacket(CREATE_EVENT.toString())).toMatchObject(CREATE_EVENT_ARR);
});

test("convertToJSON must return correct Outcome Object from given array of string tokens", () => {
  expect(convertPacketToJSON(CREATE_EVENT_ARR)).toMatchObject(CREATE_EVENT_JSON);
});
