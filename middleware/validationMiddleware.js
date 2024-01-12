import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customError.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

export const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((error) => error.msg);
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
