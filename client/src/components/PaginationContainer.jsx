import Wrapper from "../assets/wrappers/PaginationContainer.js";
import { useAllJobsContext } from "../hooks/useAllJobsContext.jsx";

export const PaginationContainer = () => {
  const {
    data: { currentPage, numOfPages },
  } = useAllJobsContext();

  return (
    <Wrapper>
      {currentPage} {numOfPages}
    </Wrapper>
  );
};
