import { Router } from "express";
import { getRobots } from "../controllers/robotsControllers.js";
import auth from "../middleweres/auth.js";

const robotsRouter = Router();

robotsRouter.get("/", auth, getRobots);

export default robotsRouter;
