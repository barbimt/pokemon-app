import React, { FC, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { PaginationContext } from "./../../context/PaginationContext";
import "./pagination.css";
import { useTheme } from "../../hooks/useTheme";

const Pagination: FC = () => {
  const { darkMode } = useTheme();
  const { nextPage, page, prevPage } = useContext(PaginationContext);

  return (
    <div className={darkMode ? "pagination-container darkButton" : "pagination-container" }>
      <button disabled={page === 1} onClick={prevPage}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        Previous
      </button>
      <button onClick={nextPage}>
        Next
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};

export default Pagination;
