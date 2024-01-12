import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { hashedPassword } from "../utils/hashedPassword.js";

//CREATE USER
export const register = async (req, res) => {
  const isFirstUser = (await User.countDocuments()) === 0;
  req.body.role = isFirstUser ? "admin" : "user";

  const passwordToStore = await hashedPassword(req.body.password)
  req.body.password = passwordToStore;
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "user registered" });
};

//LOGIN USER
export const login = async (req, res) => {
  res.send("login");
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
