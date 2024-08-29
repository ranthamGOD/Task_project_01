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
    <div className="border rounded-lg border-gray p-2 mt-4 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
      {/* Showing text */}
      <div className="text-md text-gray-600 mb-3 sm:mb-0 sm:mr-4">
        Showing <span className="font-bold">{startItem}</span>-<span className="font-bold">{endItem}</span> of <span className="font-bold">{totalItems}</span>
      </div>

      {/* Pagination Buttons */}
      <div className="flex flex-wrap items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
        {/* First Page Button */}
        <button
          className={`[@media(max-width:650px)]:mt-2 w-12  px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>

        {/* Previous Button */}
        <button
          className={`w-24 mx-1 px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex flex-wrap justify-center">
          {renderPageNumbers()}
        </div>

        {/* Next Button */}
        <button
          className={`w-24 mx-1 px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        {/* Last Page Button */}
        <button
          className={`w-12 mx-1 px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
