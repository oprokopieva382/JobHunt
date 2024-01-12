import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customError.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import Job from "../models/JobModel.js";
import mongoose from "mongoose";

export const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((error) => error.msg);
        if (errorMessage[0].startWith("no job")) {
          throw new NotFoundError(errorMessage);
        }
        throw new BadRequestError(errorMessage);
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
  param("id").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);

    if (!isValidId) throw BadRequestError("invalid MongoDB id");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job with such ${value}`);
  }),
]);
