import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../../CustomError/CustomError.js";
import User from "../../../../database/models/userSchema.js";
import { type ImageContentFile, type UserCredentials } from "../../../../types";
import bcryptjs from "bcryptjs";

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
  const image = req.file?.filename;
  const saltLength = 9;

  const hashedPassword = await bcryptjs.hash(password, saltLength);

  try {
    const user = await User.create({
      userName,
      password: hashedPassword,
      image,
    });

    res.status(200).json({ user });
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newError = new CustomError(error.message, 409, "Can't create user");

    next(newError);
  }
};

export default createUser;
