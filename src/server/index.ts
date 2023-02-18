import express from "express";
import startServer from "./startServer.js";

const app = express();
app.use(express.json());

const port = process.env.PORT ?? 4000;

startServer();

export { app, port };
