import Wrapper from "../assets/wrappers/PaginationContainer.js";
import { useAllJobsContext } from "../hooks/useAllJobsContext.jsx";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

export const PaginationContainer = () => {
  const {
    data: { currentPage, numOfPages },
  } = useAllJobsContext();
  const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);

  return (
    <Wrapper>
      <button className="btn prev-btn">
        <TbPlayerTrackPrevFilled />
        PREV
      </button>
      <div className="btn-container">
        {pages.map((page) =>  (
            <button
              key={page}
              className={`btn page-btn ${page === currentPage && "active"}`}
            >
              {page}
            </button>
          ))}
      </div>
      <button className="btn next-btn">
        NEXT
        <TbPlayerTrackNextFilled />
      </button>
    </Wrapper>
  );
};
