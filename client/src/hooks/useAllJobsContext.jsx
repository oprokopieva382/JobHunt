import { useContext } from "react";
import { AllJobsContext } from "../pages/AllJobs";

export const useAllJobsContext = () => useContext(AllJobsContext);