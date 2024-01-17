import cloudinary from "cloudinary";
import { promises as fs } from "fs";
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
  const newUser = { ...req.body };
  delete newUser.password;
  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
  if (req.file && updatedUser.avatarPubId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPubId);
  }
  res.status(StatusCodes.OK).json({ msg: "user updated" });
};
