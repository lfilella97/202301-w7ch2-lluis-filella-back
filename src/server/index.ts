import express from "express";
import morgan from "morgan";
import cors from "cors";
import { getRobots } from "./controllers/robotsControllers.js";

const app = express();

app.use(cors());
app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.get("/robots", getRobots);

export default app;
