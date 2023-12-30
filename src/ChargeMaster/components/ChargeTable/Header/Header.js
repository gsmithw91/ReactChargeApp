import React from "react";

function Header({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <h2>Charges for Selected System and Location</h2>
      <input
        type="text"
        placeholder="Search charges..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="charge-table-search"
      />
    </div>
  );
}

export default Header;
