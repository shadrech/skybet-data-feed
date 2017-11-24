import * as mongoose from "mongoose";
import setupEventSchema from "../models/event";
import setupMarketSchema from "../models/market";
import setupOutcomeSchema from "../models/outcome";

require("mongoose").Promise = Promise;
mongoose.set("useMongoClient", true);

export async function setupTheGoose(): Promise<() => void> {
  await connectGoose();

  return () => mongoose.connection.close();
}

function connectGoose() {
  return mongoose.connect("mongodb://localhost:27017", {
    useMongoClient: true
  }, err => {
    if (err) return Promise.reject(err);

    setupEventSchema();
    setupMarketSchema();
    setupOutcomeSchema();
  });
}
