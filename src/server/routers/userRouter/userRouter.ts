import { Router } from "express";
import login from "../../controllers/loginController.js";

const userRouter = Router();

userRouter.post("/login", login);

export default userRouter;
