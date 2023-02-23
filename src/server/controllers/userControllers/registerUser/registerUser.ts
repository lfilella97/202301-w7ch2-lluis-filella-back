import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../../CustomError/CustomError.js";
import User from "../../../../database/models/userSchema.js";
import { type UserCredentials } from "../../../../types";

const createUser = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    UserCredentials
  >,
  res: Response,
  next: NextFunction
) => {
  const { userName, password } = req.body;
  let user;
  try {
    await User.create({ userName, password });
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newError = new CustomError(error.message, 409, "Can't create user");
    next(newError);
    return;
  }

  res.status(200).json({ user });
};

export default createUser;
