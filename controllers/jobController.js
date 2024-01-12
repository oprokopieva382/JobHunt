import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
//200 OK OK
//201 CREATED Created
//400 BAD_REQUEST Bad Request
//401 UNAUTHORIZED Unauthorized
//403 FORBIDDEN Forbidden
//404 NOT_FOUND Not Found
//500 INTERNAL_SERVER_ERROR Internal Server Error

//GET ALL JOBS
export const allJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

//CREATE JOB
export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });
  res.status(StatusCodes.CREATED).json({ job });
};

//GET SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  res.status(StatusCodes.OK).json({ job });
};

//DELETE JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);
  res
    .status(StatusCodes.OK)
    .json({ msg: `job ${job.position} in ${job.company} successful removed` });
};

//EDIT JOB
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "job modified", job });
};
