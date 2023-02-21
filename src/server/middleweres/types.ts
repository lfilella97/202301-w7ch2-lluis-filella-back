import { type Request } from "express";
import { type JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
  userInfo: string;
}

export interface CustomJwtPayload extends JwtPayload {
  sub: string;
}
