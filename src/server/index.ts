import express from "express";
import morgan from "morgan";
import cors from "cors";
import { getRobots } from "./controllers/robotsControllers.js";
import auth from "./middleweres/auth.js";
import { generalError, notFoundError } from "./middleweres/errorMiddlewares.js";

const app = express();

app.use(cors());
app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.get("/robots", auth, getRobots);

app.use(notFoundError);
app.use(generalError);

export default app;
