import express from "express";
import morgan from "morgan";
import cors from "cors";
import robotsRouter from "./routers/router.js";
import loginRouter from "./routers/routerLogin.js";

const app = express();

app.use(cors());
app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());
app.use("/login", loginRouter);
app.use("/robots", robotsRouter);

export default app;
