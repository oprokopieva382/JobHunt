import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "./../hooks/useAllJobsContext";
import { Job } from "./Job";

export const JobsContainer = () => {
  const { data } = useAllJobsContext();

  if (data.jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs yet...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="jobs">
        {data.jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};
