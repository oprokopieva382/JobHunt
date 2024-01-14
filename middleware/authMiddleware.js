import { UnauthenticatedError } from "../errors/customError.js";

export const authMiddleware = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw UnauthenticatedError("unauthenticated error");
  console.log(token);
  next();
};
