import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authMiddleware = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("Unauthenticated error");

  try {
    const { userId, role } = verifyJWT(token);
    const userTestOnly = userId === "65a956f67d1fb94ca71ee41a";
    req.user = { userId, role, userTestOnly };
    next();
  } catch (err) {
    throw new UnauthenticatedError("Unauthenticated error");
  }
};

export const authPermission = (...roles) => {
  return (req, res, next) => {
    console.log(roles);
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};

export const isUserTestOnly = (req, res, next) => {
  if (req.user.userTestOnly) {
    throw new BadRequestError(
      "❗You're in a demo exploring and it's a read-only"
    );
  }
  next();
};
