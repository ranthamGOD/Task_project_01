import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  console.log("totalPages", totalPages)
  console.log("pages", pages)
  return (
    <div className="flex justify-center my-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 mx-1 rounded ${page === currentPage ? 'bg-darkBlack text-white' : 'bg-gray-200 text-darkBlack'
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
