import { StatusCodes } from "http-status-codes"

export const getCurrentUser = (req, res)=> {
res.status(StatusCodes.OK).json({msg: "current user route"})
}

export const getApplicationStats = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "application stats" });
};

export const updateCurrentUser = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "user updated" });
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
