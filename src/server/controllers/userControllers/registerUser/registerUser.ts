import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../../CustomError/CustomError.js";
import User from "../../../../database/models/userSchema.js";
import { type UserCredentials } from "../../../../types";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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

    const jwtPayload = {
      sub: user?._id,
    };

    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET!);

    res.status(200).json({ userName, token });
  } catch (error) {
    const newError = new CustomError(
      (error as Error).message,
      409,
      "Can't create user"
    );

    next(newError);
  }
};

export default createUser;
