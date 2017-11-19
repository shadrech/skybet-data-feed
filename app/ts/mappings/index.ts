interface Type {
  msgId: number;
  operation: string;
  type: string;
  timestamp: number;
}
export interface Event extends Type {
  body: {
    eventId: string;
    category: string;
    subCategory: string;
    name: string;
    startTime: number;
    displayed: boolean;
    suspended: boolean;
  };
}
export interface Market extends Type {
  body: {
    eventId: string;
    marketId: string;
    name: string;
    displayed: boolean;
    suspended: boolean;
  };
}
export interface Outcome extends Type {
  body: {
    marketId: string;
    outcomeId: string;
    name: string;
    price: string;
    displayed: boolean;
    suspended: boolean;
  };
}

export function mapEventPacketToJSON(feed: string[]): Event {
  return {
    ...mapHeader(feed),
    body: {
      eventId: feed[4],
      category: feed[5],
      subCategory: feed[6],
      name: feed[7],
      startTime: Number(feed[8]),
      displayed: Boolean(Number(feed[9])),
      suspended: Boolean(Number(feed[10]))
    }
  };
}

export function mapMarketPacketToJSON(feed: string[]): Market {
  return {
    ...mapHeader(feed),
    body: {
      eventId: feed[4],
      marketId: feed[5],
      name: feed[6],
      displayed: Boolean(Number(feed[7])),
      suspended: Boolean(Number(feed[8]))
    }
  };
}

export function mapOutcomePacketToJSON(feed: string[]): Outcome {
  return {
    ...mapHeader(feed),
    body: {
      marketId: feed[4],
      outcomeId: feed[5],
      name: feed[6],
      price: feed[7],
      displayed: Boolean(Number(feed[8])),
      suspended: Boolean(Number(feed[9]))
    }
  };
}

function mapHeader(feed: string[]): Type {
 return {
   msgId: Number(feed[0]),
   operation: feed[1],
   type: feed[2],
   timestamp: Number(feed[3])
 };
}
