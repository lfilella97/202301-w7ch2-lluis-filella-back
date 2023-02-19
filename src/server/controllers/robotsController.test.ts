/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { type Response, type Request, type NextFunction } from "express";
import { robots } from "../../robots";
import { getRobots } from "./robotsControllers";

describe("Given the getRobots controller", () => {
  describe("When it is called", () => {
    const request = {} as Request;
    const response: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next: NextFunction = jest.fn();

    test("Then it should call status method giving 200 status", () => {
      getRobots(request, response as Response, next);

      const status = 200;

      expect(response.status).toBeCalledWith(status);
    });

    test("Then it should call jest method", () => {
      getRobots(request, response as Response, next);

      expect(response.json).toBeCalledWith(robots);
    });
  });
});
