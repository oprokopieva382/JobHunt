import bcrypt from "bcryptjs";

export const hashedPassword = async (value) => {
  // a random value that is added to the password before hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(value, salt);
  return hashedPassword;
};
