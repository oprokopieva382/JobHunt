import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/customError.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import Job from "../models/JobModel.js";
import mongoose from "mongoose";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no job")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthenticatedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("company is required").trim(),
  body("position").notEmpty().withMessage("position is required").trim(),
  body("jobLocation").notEmpty().withMessage("job location is required").trim(),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("status is not valid"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("type is not valid"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("invalid MongoDB id");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job with id : ${value}`);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === job.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new UnauthenticatedError("not authorized to access this route");
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required").trim(),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .trim()
    .isEmail()
    .withMessage("email is not valid")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) throw new BadRequestError("email already exist");
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .trim()
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
  body("lastName").notEmpty().withMessage("last name is required").trim(),
  body("location").notEmpty().withMessage("user location is required").trim(),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .trim()
    .isEmail()
    .withMessage("email is not valid"),
  body("password").notEmpty().withMessage("password is required").trim(),
]);
