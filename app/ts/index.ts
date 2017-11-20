import * as net from "net";
import TransformData from "./models";

const client = net.createConnection({
  host: "localhost",
  port: 8282
}, () => {
  console.log("Connect to Provider Service");
});

client.on("data", data => {
  TransformData(data);
});

client.on("end", () => {
  console.log("Disconnected from Porvider Service");
});
