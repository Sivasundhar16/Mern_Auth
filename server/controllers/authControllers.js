import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { verificationToken } from "../utils/generateVerificationCode.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || password || name) {
      throw new Error("All fields are required");
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString(); //returns a random 6-digit number as a string.
    const user = new User({
      email: email,
      password: hashPassword,
      name: name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await user.save();
  } catch (error) {
    res.status(400).json({ sucess: false, message: error.message });
  }
};
export const login = async (req, res) => {
  res.send("login page");
};
export const logout = async (req, res) => {
  res.send("logout page");
};
