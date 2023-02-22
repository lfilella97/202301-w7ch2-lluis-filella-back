import express from "express";
import morgan from "morgan";
import cors from "cors";
import robotsRouter from "./routers/robotsRouter/robotsRouter.js";
import userRouter from "./routers/userRouter/userRouter.js";
import { generalError, notFoundError } from "./middleweres/errorMiddlewares.js";

const app = express();

app.use(cors());
app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.use("/user", userRouter);
app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
