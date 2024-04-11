
import React from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBar.scss';
function SearchBar({ value, onChange }) {
  const handleInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className="input-wrapper">
     <FaSearch id="search-icon" />
    <input
      type="text"
      placeholder="Search users"
      value={value}
      onChange={handleInputChange}
    />
    </div>
  );
}

export default SearchBar;
