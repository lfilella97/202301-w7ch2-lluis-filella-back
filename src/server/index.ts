import express from "express";
import { getRobots } from "./controllers/robotsControllers.js";

const app = express();
app.use(express.json());

app.get("/robots", getRobots);

export default app;
