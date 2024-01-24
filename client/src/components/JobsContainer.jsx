import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "./../hooks/useAllJobsContext";
import { Job } from "./Job";
import { PaginationContainer } from "./PaginationContainer";

export const JobsContainer = () => {
  const { data: {jobs, totalJobs, currentPage, numOfPages} } = useAllJobsContext();
 

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
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      {numOfPages > 1 && <PaginationContainer />}
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PaginationContainer />}
    </Wrapper>
  );
};
