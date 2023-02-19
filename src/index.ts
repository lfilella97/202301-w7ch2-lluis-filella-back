import "./loadEnvoirements.js";
import { startDatabase } from "./database/conectDatabase.js";
import startServer from "./server/startServer.js";
import "./server/index.js";

const port = process.env.PORT ?? 4000;

try {
  await startDatabase();
  startServer(+port);
} catch (error) {}
