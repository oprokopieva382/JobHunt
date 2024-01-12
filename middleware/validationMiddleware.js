import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customError.js";

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

export const validateTest = withValidationErrors([
  body("name").notEmpty().withMessage("name is required").trim(),
]);
