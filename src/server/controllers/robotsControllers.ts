import type { NextFunction, Request, Response } from "express";
import { robots } from "../../robots";

export const getRobots = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(robots);
};
