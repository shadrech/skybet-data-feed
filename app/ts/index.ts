import * as net from "net";
import {persistDataToDB} from "./models";
import { setupTheGoose } from "./setup/mongoose";

async function startServer() {
  await setupTheGoose();

  const client = net.createConnection({
    host: "localhost",
    port: 8282
  }, async () => {
    console.log("Connect to Provider Service");
  });

  client.on("data", data => {
    persistDataToDB(data);
  });

  client.on("end", () => {
    console.log("Disconnected from Porvider Service");
  });
}

startServer();
