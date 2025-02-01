import React, { useState } from 'react'

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search for a book"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border rounded-full px-4 py-2 shadow-sm focus:outline-none"
      />
    </div>
  );

  export default SearchBar