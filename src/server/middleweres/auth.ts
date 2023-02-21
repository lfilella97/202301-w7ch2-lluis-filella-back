import { type NextFunction, type Response } from "express";
import CustomError from "../../customError/CustomError.js";
import jwt from "jsonwebtoken";
import { type CustomJwtPayload, type CustomRequest } from "./types";

const auth = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (!req.header("Authorization")) {
    const error = new CustomError(
      "Dont have Authorization",
      403,
      "Dont have Authorization"
    );

    next(error);
    return;
  }

  if (!req.header("Authorization")?.includes("Bearer")) {
    const error = new CustomError(
      "Missing authorization header",
      401,
      "Missing token"
    );

    next(error);
    return;
  }

  const token = req.header("Authorization")?.replace(/^Bearer\s*/i, "");

  try {
    const { sub: userId } = jwt.verify(
      token!,
      process.env.JWT_SECRET!
    ) as CustomJwtPayload;

    req.userInfo = userId;

    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
