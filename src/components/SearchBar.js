import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  // const [query, setQuery] = useState('');

  const handleChange = (e) => {
    // setQuery(e.target.value);
    onSearch(e.target.value); // Pass the query up to the parent component
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
