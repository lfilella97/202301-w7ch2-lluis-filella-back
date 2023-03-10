import jwt from "jsonwebtoken";
import { type NextFunction, type Request, type Response } from "express";
import { type UserCredentials } from "../../../../types";
import CustomError from "../../../../CustomError/CustomError.js";
import User from "../../../../database/models/userSchema.js";
import bcrypt from "bcryptjs";

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

  const user = await User.findOne({ userName });

  if (!user) {
    const customError = new CustomError(
      "Incorrect user",
      401,
      "Incorrect credentials"
    );
    next(customError);
    return;
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    const customError = new CustomError(
      "Incorrect password",
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
