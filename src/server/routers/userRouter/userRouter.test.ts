import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { connectDatabase } from "../../../database/connectDatabase";
import User from "../../../database/models/userSchema";
import { type UserCredentials } from "../../types";
import request from "supertest";
import app from "../..";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectDatabase(server.getUri());
});

afterAll(async () => {
  await server.stop();
  await mongoose.connection.close();
});

describe("Given a POST user/login ", () => {
  describe("When it receives a request with name lluis and password 1234", () => {
    const newUser: UserCredentials = {
      userName: "lluis",
      password: "1234",
    };
    describe("And the userName and the password are the same in the database", () => {
      test("Then it should return token", async () => {
        const newUser: UserCredentials = {
          userName: "lluis",
          password: "1234",
        };
        await User.create(newUser);
        const mockUser: UserCredentials = newUser;
        const status = 200;
        const response = await request(app)
          .post("/user/login")
          .send(mockUser)
          .expect(status);
        expect(response.body).toHaveProperty("token");
      });
    });
  });
});
