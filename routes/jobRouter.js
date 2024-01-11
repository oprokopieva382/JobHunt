import { Router } from "express";
const router = Router();

import {
  allJobs,
  deleteJob,
  updateJob,
  getJob,
  createJob,
} from "../controllers/jobController";

router.route("/").get(allJobs).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);
