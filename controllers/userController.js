import { StatusCodes } from "http-status-codes";
import Job from "../models/JobModel.js";
import User from "../models/UserModel.js";

//GET CURRENT USER
export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user: user.userToDisplay() });
};

//ADMIN STATS
export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

//EDIT USER
export const updateCurrentUser = async (req, res) => {
  console.log(req.file);
  const obj = { ...req.body };
  delete obj.password;
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "user updated" });
};
