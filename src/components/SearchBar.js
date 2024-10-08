import React from 'react';

const SearchBar = ({ onSearch }) => {

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        // value={query}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full px-4 py-2 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;
