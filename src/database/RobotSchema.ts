import { model, Schema } from "mongoose";

export const robotSchema = new Schema({
  name: String,
  image: String,
  creationDate: Date,
  endurance: Number,
  speed: Number,
});

export const Robot = model("Robot", robotSchema, "robots");
