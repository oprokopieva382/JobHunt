import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/UserModel.js";
import Job from "./models/JobModel.js";

try {
  await mongoose.connect(process.env.MONGO_URL);
  const demoUser = await User.findOne({ email: "test@test.com" });
  const randomJobs = JSON.parse(
    await readFile(new URL("./utils/ramdomData.json", import.meta.url))
  );
  const jobs = randomJobs.map((job) => {
    return { ...job, createdBy: demoUser._id };
  });

  await Job.deleteMany({ createdBy: demoUser._id });
  await Job.create(jobs);
  console.log("Done");
  process.exit(0);
} catch (err) {
  console.log(err);
  process.exit(1);
}
