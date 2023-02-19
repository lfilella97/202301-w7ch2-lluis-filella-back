import mongoose from "mongoose";
import debug from "debug";

const createDebug = debug("robots:database");
mongoose.set("strictQuery", false);

export const startDatabase = async () => {
  await mongoose.connect(process.env.DATABASE_URL!);
  createDebug("Database conected");
};
