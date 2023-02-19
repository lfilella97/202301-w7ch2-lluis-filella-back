import type { NextFunction, Request, Response } from "express";
import { Robot } from "../../database/RobotSchema.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Robots = await Robot.find();
  res.status(200).json({ Robots });
};
