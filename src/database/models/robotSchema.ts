import { model, Schema } from "mongoose";

const robotSchema = new Schema({
  name: String,
  image: String,
  creationDate: Date,
  endurance: Number,
  speed: Number,
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
