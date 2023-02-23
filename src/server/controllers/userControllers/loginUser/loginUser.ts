import "../../../../loadEnvoirements.js";
import jwt from "jsonwebtoken";
import { type NextFunction, type Request, type Response } from "express";
import { type UserCredentials } from "../../../../types";
import CustomError from "../../../../CustomError/CustomError.js";
import User from "../../../../database/models/userSchema.js";

const loginUser = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    UserCredentials
  >,
  res: Response,
  next: NextFunction
) => {
  const { password, userName } = req.body;

  const user = await User.findOne({ userName, password });

  if (!user) {
    const customError = new CustomError(
      "Incorrect credentials",
      401,
      "Incorrect credentials"
    );
    next(customError);
    return;
  }

  const jwtPayload = {
    sub: user?._id,
  };

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET!);

  res.status(200).json({ token });
};

export default loginUser;
