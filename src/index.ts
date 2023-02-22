import "./loadEnvoirements.js";
import { connectDatabase } from "./database/connectDatabase.js";
import startServer from "./server/startServer.js";
import "./server/index.js";

const port = process.env.PORT ?? 4000;
const dataBaseUrl = process.env.DATABASE_URL!;

await connectDatabase(dataBaseUrl);
startServer(+port);
