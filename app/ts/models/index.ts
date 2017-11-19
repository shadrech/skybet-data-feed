import {
  mapEventPacketToJSON,
  mapMarketPacketToJSON,
  mapOutcomePacketToJSON
} from "../mappings";

export default (data: string) => {
  const packets: string[] = data.split("\n");
  for (let p of packets) {
    if (!p.length) continue;

    const feed: string[] = parseSinglePacket(p);
    console.log(convertToJSON(feed));
  }
};

export function parseSinglePacket(packet: string): string[] {
  let cleanPacket = packet.replace(/\\\|/g, "");
  cleanPacket = cleanPacket.substring(1, cleanPacket.length - 1);

  const regex = /\|/;
  return cleanPacket.split(regex);
}

export function convertToJSON(feed: string[]) {
  switch (feed[2]) {
    case "event":
      return mapEventPacketToJSON(feed);
    case "market":
      return mapMarketPacketToJSON(feed);
    case "outcome":
      return mapOutcomePacketToJSON(feed);
  }
}
