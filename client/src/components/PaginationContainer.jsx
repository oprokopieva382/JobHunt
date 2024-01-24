import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/PaginationContainer.js";
import { useAllJobsContext } from "../hooks/useAllJobsContext.jsx";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

export const PaginationContainer = () => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const {
    data: { currentPage, numOfPages },
  } = useAllJobsContext();
  const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);

  const handleCurrentPage = (searchPage) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", searchPage);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = 1;
          handleCurrentPage(prevPage);
        }}
      >
        <TbPlayerTrackPrevFilled />
        PREV
      </button>
      <div className="btn-container">
        {pages.map((page) => (
          <button
            key={page}
            className={`btn page-btn ${page === currentPage && "active"}`}
            onClick={() => handleCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="btn next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = numOfPages;
          handleCurrentPage(nextPage);
        }}
      >
        NEXT
        <TbPlayerTrackNextFilled />
      </button>
    </Wrapper>
  );
};
