import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastName",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  location: {
    type: String,
    default: "my city",
  },
});

export default mongoose.model("User", UserSchema);
