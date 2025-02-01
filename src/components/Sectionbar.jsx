import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Section = ({ title, books }) => {
  const navigate = useNavigate()
  console.log("books", books)
  return(
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link to="/books" className="text-orange-500">See All</Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {books.map((book) => (
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
  export default Section