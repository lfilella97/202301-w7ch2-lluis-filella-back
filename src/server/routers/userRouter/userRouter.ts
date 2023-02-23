import { Router } from "express";
import loginUser from "../../controllers/userControllers/loginUser/loginUser.js";
import createUser from "../../controllers/userControllers/registerUser/registerUser.js";

const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", createUser);

export default userRouter;
