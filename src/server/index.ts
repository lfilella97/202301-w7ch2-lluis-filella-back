import express from "express";
import morgan from "morgan";
import { getRobots } from "./controllers/robotsControllers.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/robots", getRobots);

export default app;
