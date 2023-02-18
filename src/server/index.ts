import express from "express";
import startServer from "./startServer.js";
import { getRobots } from "./controllers/robotsControllers.js";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(express.json());

app.get("/robots", getRobots);

startServer(+port);

export { app };
