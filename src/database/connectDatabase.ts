import mongoose from "mongoose";
import debug from "debug";

const createDebug = debug("robots:database");
mongoose.set("strictQuery", false);

export const connectDatabase = async (url: string) => {
  await mongoose.connect(url);
  createDebug("Database conected");
};
