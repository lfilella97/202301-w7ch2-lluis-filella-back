import { model, Schema } from "mongoose";

export const userSchema = new Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
});

export const User = model("User", userSchema, "users");
