import { Router } from "express";
const router = Router();

import {
  allJobs,
  deleteJob,
  updateJob,
  getJob,
  createJob,
} from "../controllers/jobController.js";
import { validateJobInput } from "../middleware/validationMiddleware.js";

router.route("/").get(allJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(getJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);


export default router