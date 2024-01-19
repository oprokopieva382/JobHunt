import { Router } from "express";
const router = Router();

import {
  allJobs,
  deleteJob,
  updateJob,
  getJob,
  createJob,
  displayStats,
} from "../controllers/jobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";
import { isUserTestOnly } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(allJobs)
  .post(isUserTestOnly, validateJobInput, createJob);

  router.route("/stats").get(displayStats);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(isUserTestOnly, validateJobInput, validateIdParam, updateJob)
  .delete(isUserTestOnly, validateIdParam, deleteJob);

export default router;
