import * as maps from "..";
import {
  CREATE_EVENT_ARR,
  CREATE_EVENT_JSON
} from "../../models/__tests__/event";
import {
  CREATE_OUTCOME_ARR,
  CREATE_OUTCOME_JSON
} from "../../models/__tests__/outcome";
import {
  UPDATE_MARKET_ARR,
  UPDATE_MARKET_JSON
} from "../../models/__tests__/market";

test("mapEventPacketToJSON returns correct json from string array", () => {
  expect(maps.mapEventPacketToJSON(CREATE_EVENT_ARR)).toEqual(CREATE_EVENT_JSON);
});

test("mapOutcomePacketToJSON returns correct json from string array", () => {
  expect(maps.mapOutcomePacketToJSON(CREATE_OUTCOME_ARR)).toEqual(CREATE_OUTCOME_JSON);
});

test("mapMarketPacketToJSON returns correct json from string array", () => {
  expect(maps.mapMarketPacketToJSON(UPDATE_MARKET_ARR)).toEqual(UPDATE_MARKET_JSON);
});
