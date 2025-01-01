import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxDisplayedPages = 5;

    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxDisplayedPages / 2)
    );
    let endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);

    if (endPage - startPage < maxDisplayedPages - 1) {
      startPage = Math.max(1, endPage - (maxDisplayedPages - 1));
    }

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((page, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageChange(page)}
        disabled={page === currentPage || page === "..."}
        className={`pagination-btn ${page === currentPage ? "active" : ""}`}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="d-flex justify-content-center custom-pagination align-items-center">
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className={`pagination-btn`}
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`pagination-btn `}
      >
        <MdKeyboardArrowLeft />
      </button>
      <span className="pagination-menu">{renderPageNumbers()}</span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`pagination-btn`}
      >
        <MdKeyboardArrowRight />
      </button>
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`pagination-btn`}
      >
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default CustomPagination;
