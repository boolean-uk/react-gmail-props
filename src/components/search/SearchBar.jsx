import React from "react";

export default function SearchBar({ setSearch }) {
  return (
    <div className="search">
      <input
        className="search-bar"
        placeholder="Search mail"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
