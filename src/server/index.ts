import express from "express";
import morgan from "morgan";
import cors from "cors";
import { getRobots } from "./controllers/robotsControllers.js";

const app = express();
const allowedOrigins = [
  "http://localhost:3000/",
  "https://202301-w6chwe-marcel-martino-lluis-fi.netlify.app/",
];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(morgan("dev"));
app.use(express.json());

app.get("/robots", getRobots);

export default app;
