import { type Response, type Request, type NextFunction } from "express";
import { Robot } from "../../database/RobotSchema";
import { getRobots } from "./robotsControllers";

const robotsList = [
  {
    id: "63efceecacd282fea9798fb9",
    image: "image.png",
    name: "Joseph",
    creationDate: 1676815571621,
    endurance: 10,
    speed: 10,
  },
];

const next: NextFunction = jest.fn();
const request: Partial<Request> = {};
const response: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn().mockResolvedValue(robotsList),
};

Robot.find = jest.fn().mockReturnValue(robotsList);

describe("Given the getRobots controller", () => {
  describe("When it is called", () => {
    test("Then it should call status method giving 200 status", async () => {
      await getRobots(request as Request, response as Response, next);

      const status = 200;

      expect(response.status).toBeCalledWith(status);
    });

    test("Then it should call jest method whith a robots list propierty on it", async () => {
      await getRobots(request as Request, response as Response, next);

      expect(response.json).toBeCalledWith({ robots: robotsList });
    });
  });
});
