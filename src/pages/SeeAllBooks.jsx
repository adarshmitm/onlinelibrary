import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const SeeAllBooks = () => {
const books = useSelector((state) => state.books);
  const navigate = useNavigate()
  const allBooks =books.books
  console.log("allBooks", allBooks)
  return(
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
      <button className="bg-gray-300 px-4 py-2 rounded-lg mb-4" onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {allBooks.map((book) => (
          <div key={book.id} className="bg-white shadow rounded-lg p-4" onClick={()=>{navigate(`/book/${book.id}`)}}>
            <div className="w-full h-54 mb-2"><img src={book.image} alt={book.title} className="w-full h-full object-scale-down rounded-lg" /></div>
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-600">{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
};
  export default SeeAllBooks