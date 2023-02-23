import { Router } from "express";
import loginUser from "../../controllers/userControllers/loginUser/loginUser.js";
import createUser from "../../controllers/userControllers/registerUser/registerUser.js";
import multer from "multer";
import storage from "../../storage.js";

const userRouter = Router();
const upload = multer({ storage });

userRouter.post("/login", loginUser);
userRouter.post("/register", upload.single("image"), createUser);

export default userRouter;
