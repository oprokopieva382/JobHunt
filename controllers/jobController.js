import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

export const allJobs = async (req, res) => {
  res.status(200).json({ jobs });
};
