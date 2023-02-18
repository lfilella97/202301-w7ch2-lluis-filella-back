import type { NextFunction, Request, Response } from "express";

export const getRobots = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ pong: 200 });
};
