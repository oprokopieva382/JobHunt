import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "./../hooks/useAllJobsContext";
import { Job } from ".";
import { PaginationContainer } from "./PaginationContainer";
import { PiCloudArrowDownThin } from "react-icons/pi";

export const JobsContainer = () => {
  const { data: {jobs, totalJobs, numOfPages} } = useAllJobsContext();
 
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs yet...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found <span className="title-span"><PiCloudArrowDownThin /></span>
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PaginationContainer />}
    </Wrapper>
  );
};
