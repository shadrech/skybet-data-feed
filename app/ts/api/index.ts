import {
  mapEventPacketToJSON,
  mapMarketPacketToJSON,
  mapOutcomePacketToJSON,
  Event, Market, Outcome
} from "../mappings";

export default (data: Buffer) => {
  const packets: string[] = convertBufferToStringArray(data);
  return packets.map(p => {
    const feed: string[] = parseSinglePacket(p);
    return convertPacketToJSON(feed);
  });
};

export function convertBufferToStringArray (data: Buffer): string[] {
  const arr = data.toString().split("\n");
  return arr.slice(0, arr.length - 1);
}

export function parseSinglePacket(packet: string): string[] {
  const cleanPacket = packet.replace(/\\\|/g, "");
  const trimmedPacket = cleanPacket.substring(1, cleanPacket.length - 1);

  const regex = /\|/;
  return trimmedPacket.split(regex);
}

export function convertPacketToJSON(feed: string[]): Event | Market | Outcome {
  switch (feed[2]) {
    case "event":
      return mapEventPacketToJSON(feed);
    case "market":
      return mapMarketPacketToJSON(feed);
    case "outcome":
      return mapOutcomePacketToJSON(feed);
  }
}
