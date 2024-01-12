import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { hashedPassword, comparePassword } from "../utils/hashedPassword.js";
import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customError.js";
import { createJWT } from "../utils/tokenUtils.js";

//CREATE USER
export const register = async (req, res) => {
  const isFirstUser = (await User.countDocuments()) === 0;
  req.body.role = isFirstUser ? "admin" : "user";

  const passwordToStore = await hashedPassword(req.body.password);
  req.body.password = passwordToStore;
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "user registered" });
};

//LOGIN USER
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  const oneDay = 1000 * 60 * 60 * 24;
  const token = createJWT({ userId: user._id, role: user.role });

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

//DELETE USER
// export const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findByIdAndDelete(id);
//   res
//     .status(StatusCodes.OK)
//     .json({ msg: `user ${user.name} successful removed` });
// };

//EDIT USER
// export const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findByIdAndUpdate(id, req.body, {
//     new: true,
//   });
//   res.status(StatusCodes.OK).json({ msg: "user modified", user });
// };
