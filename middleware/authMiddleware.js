export const authMiddleware = (req, res, next) => {
  console.log("auth middleware");
  next();
};
