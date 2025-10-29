import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearchClick() {
    onSearch(searchTerm);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type a book title..."
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}
