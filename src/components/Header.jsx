import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HeaderBar = () => (
    <header className="bg-white shadow p-4 mb-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-orange-500">Online Library</Link>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
        <Link to="/browse-books" className="text-gray-700 hover:text-orange-500">Browse</Link>
        <Link to="/add-book" className="text-gray-700 hover:text-orange-500">Add Book</Link>
      </nav>
    </header>
  );

  export default HeaderBar;