import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages || totalPages === 0;

  const handlePageChange = (pageNumber) => {
    if (pageNumber === currentPage) return;
    onPageChange(pageNumber);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      const isActive = pageNumber === currentPage;
      paginationItems.push(
        <li
          key={pageNumber}
          className={`mx-1 mb-4 px-4 pt-1.5 text-sm font-semibold ring-1 ring-inset ring-gray-300  ${
            isActive
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-50"
          } rounded-md px-2 py-1 cursor-pointer`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </li>
      );
    }

    return paginationItems;
  };

  return (
    <ul className="flex flex-wrap md:justify-center mt-4">
      <li
        className={`mx-1 mb-4 ${
          currentPage === 1
            ? "bg-gray-200 text-gray-700"
            : "bg-primary text-white"
        } rounded-md px-2 py-1 cursor-pointer`}
        onClick={() => !isFirstPage && handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Previous
      </li>
      {renderPaginationItems()}
      <li
        className={`mx-1 mb-4 ${
          isLastPage ? "bg-gray-200 text-gray-700" : "bg-primary text-white"
        } rounded-md px-2 py-1 cursor-pointer`}
        onClick={() => !isLastPage && handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
