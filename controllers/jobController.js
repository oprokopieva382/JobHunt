import Job from "../models/JobModel.js";
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

//GET ALL JOBS
export const allJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

//CREATE JOB
export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });
  res.status(201).json({ job });
};

//GET SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return res.status(404).json({ error: `no job with such ${id}` });
  }
  res.status(200).json({ job });
};

//DELETE JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id)
  if (!job) {
    return res.status(404).json({ error: `no job with such ${id}` });
  }
  res.status(200).json({ msg: `job ${job.position} in ${job.company} successful removed` });
};

//EDIT JOB
export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res
      .status(400)
      .json({ error: "please provide company and position" });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ error: `no job with such ${id}` });
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "job modified", job });
};
