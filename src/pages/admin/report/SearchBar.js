import React, { useState } from 'react';

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
    // Notify parent component about filter change
    onFilterChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <select value={filterCriteria} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="date">Date</option>
        <option value="destination">Destination</option>
        {/* Add more filter options as needed */}
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
