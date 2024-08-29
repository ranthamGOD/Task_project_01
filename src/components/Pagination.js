import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange, itemsPerPage, totalItems }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="border rounded-lg border-gray p-4 mt-4 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
      {/* Showing text */}
      <div className="text-md text-gray-600 mb-3 sm:mb-0 sm:mr-4">
        Showing <span className="font-bold">{startItem}</span>-<span className="font-bold">{endItem}</span> of <span className="font-bold">{totalItems}</span>
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center">
        <button
          className={`mx-1 px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {renderPageNumbers()}

        <button
          className={`mx-1 px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>

  );
};

export default Pagination;
