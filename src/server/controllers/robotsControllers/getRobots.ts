import type { NextFunction, Request, Response } from "express";
import CustomError from "../../../CustomError/CustomError.js";
import Robot from "../../../database/models/robotSchema.js";

const getRobots = async (req: Request, res: Response, next: NextFunction) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });

  if (!robots) {
    const error = new CustomError("robots not found", 404, "robots not found");

    next(error);
  }
};

export default getRobots;
