import { Router } from "express";
import login from "../controllers/loginController.js";

const userRouter = Router();

userRouter.get("/", login);

export default userRouter;
