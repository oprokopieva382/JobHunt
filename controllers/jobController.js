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
  const { search, jobStatus, jobType, sort } = req.query;

  const searchQueryObj = {
    createdBy: req.user.userId,
  };

  if (search) {
    searchQueryObj.$or = [
      { position: { $regex: search.trim(), $options: "i" } },
      { company: { $regex: search.trim(), $options: "i" } },
    ];
  }

  if (jobStatus && jobStatus !== "all") {
    searchQueryObj.jobStatus = jobStatus;
  }

  if (jobType && jobType !== "all") {
    searchQueryObj.jobType = jobType;
  }

  const sortProps = {
    new: "-createdAt",
    old: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const sortParams = sortProps[sort] || sortProps.new;

  const jobs = await Job.find(searchQueryObj).sort(sortParams);
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
  let statsTotal = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);

  //total stats by status
  statsTotal = statsTotal.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const totalApplicationsByStatus = {
    pending: statsTotal.pending || 0,
    interview: statsTotal.interview || 0,
    declined: statsTotal.declined || 0,
  };

  //total applications by month
  let totalApplicationsByMonth = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);

  totalApplicationsByMonth = totalApplicationsByMonth.map((app) => {
    const {
      _id: { year, month },
      count,
    } = app;

    const date = day()
      .month(month - 1)
      .year(year)
      .format("MMM YY");
    return { date, count };
  });

  res
    .status(StatusCodes.OK)
    .json({ totalApplicationsByStatus, totalApplicationsByMonth });
};
