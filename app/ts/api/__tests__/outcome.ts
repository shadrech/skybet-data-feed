import {
  convertBufferToStringArray,
  parseSinglePacket,
  convertPacketToJSON
} from "../";
import {
  Outcome
} from "../../mappings";

const CREATE_OUTCOME: Buffer = Buffer.from(`|29|create|outcome|1511129060866|c3cc177f-cc4a-4319-9a75-2d70549d455f|ba7e3ac5-9d18-4c26-833c-34f23cf23c75|Handicap Draw -2|33/1|0|1|
`);
export const CREATE_OUTCOME_ARR: string[] = [
  "29",
  "create",
  "outcome",
  "1511129060866",
  "c3cc177f-cc4a-4319-9a75-2d70549d455f",
  "ba7e3ac5-9d18-4c26-833c-34f23cf23c75",
  "Handicap Draw -2",
  "33/1",
  "0",
  "1",
];
export const CREATE_OUTCOME_JSON: Outcome = {
  msgId: 29,
  operation: "create",
  type: "outcome",
  timestamp: 1511129060866,
  body: {
    marketId: "c3cc177f-cc4a-4319-9a75-2d70549d455f",
    outcomeId: "ba7e3ac5-9d18-4c26-833c-34f23cf23c75",
    name: "Handicap Draw -2",
    price: "33/1",
    displayed: false,
    suspended: true
  }
};

describe("Outcome API", () => {
  test("convertBufferToStringArray converts Buffer to string array", () => {
    const CREATE_OUTCOME_STR = CREATE_OUTCOME.toString().trim();
    expect(convertBufferToStringArray(CREATE_OUTCOME)).toEqual([CREATE_OUTCOME_STR]);
  });
  
  test("parseSinglePacket must return an array of tokens stripped of every pipe or backlash", () => {
    const CREATE_OUTCOME_STR = convertBufferToStringArray(CREATE_OUTCOME);
    expect(parseSinglePacket(CREATE_OUTCOME_STR[0])).toEqual(CREATE_OUTCOME_ARR);
  });
  
  test("convertToJSON must return correct Outcome Object from given array of string tokens", () => {
    expect(convertPacketToJSON(CREATE_OUTCOME_ARR)).toMatchObject(CREATE_OUTCOME_JSON);
  });
});
