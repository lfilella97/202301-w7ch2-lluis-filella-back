import { startDatabase } from "./database/conectDatabase.js";
import "./loadEnvoirements.js";
import "./server/index.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;

try {
  await startDatabase();
  startServer(+port);
} catch (error) {}
