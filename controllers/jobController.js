import mongoose from "mongoose";
import day from "dayjs";
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
  console.log(req.user);
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

//CREATE JOB
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
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

//SHOW STATS
export const displayStats = async (req, res) => {
  const defaultValue = {
    pending: 10,
    interview: 15,
    declined: 4,
  };

  const monthlyValue = [
    {
      date: "Nov 23",
      count: 15,
    },
    {
      date: "Dec 23",
      count: 25,
    },
    {
      date: "Jan 24",
      count: 19,
    },
  ];

  res.status(StatusCodes.OK).json({ defaultValue, monthlyValue });
};
