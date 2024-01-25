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

  const addButton = ({ page, activeButton }) => {
    return (
      <button
        key={page}
        className={`btn page-btn ${activeButton && "active"}`}
        onClick={() => handleCurrentPage(page)}
      >
        {page}
      </button>
    );
  };

  const renderButton = () => {
    let pageButtons = [];
    //first button
    pageButtons.push(addButton({ page: 1, activeButton: currentPage === 1 }));

    //dots before
    if (currentPage > 3) {
      pageButtons.push(
        <span className="page-btn dots" key="dots-1">
          ...
        </span>
      );
    }

    //one before current button
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addButton({ page: currentPage - 1, activeButton: false })
      );
    }

    //current button
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pageButtons.push(addButton({ page: currentPage, activeButton: true }));
    }

    //one after current button
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pageButtons.push(
        addButton({ page: currentPage + 1, activeButton: false })
      );
    }

    //dots after
    if (currentPage < numOfPages - 2) {
      pageButtons.push(
        <span className="page-btn dots" key="dots+1">
          ...
        </span>
      );
    }

    //lastButton
    pageButtons.push(
      addButton({ page: numOfPages, activeButton: currentPage === numOfPages })
    );
    return pageButtons;
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
      <div className="btn-container">{renderButton()}</div>
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
