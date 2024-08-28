import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 11);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(error);
  }
};
