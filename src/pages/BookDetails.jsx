import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetailsPage = () => {
    const { id } = useParams();
    const books = useSelector((state) => state.books);
    console.log("book", books.books)
    const book = books.books.find((b) => b.id === parseInt(id));
    const navigate = useNavigate();
  
    console.log("Image", book.image)
    if (!book) return <div>Book not found</div>;
  
    return (
      <div className="p-4 bg-gradient-to-br from-pink-100 to-white min-h-screen">
        <button className="bg-gray-300 px-4 py-2 rounded-lg mb-4" onClick={() => navigate(-1)}>Back</button>
        <div className="bg-white shadow rounded-lg p-6 flex gap-6"> 
            <img src={`/${book.image}`} alt={book.title} className="w-1/3 h-54 object-cover rounded-lg" />
            {/* <img src={book.image} alt={book.title}/> */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-gray-500 mb-4">by {book.author}</p>
            <p className="text-orange-500 mb-4">Rating: {book.rating}/5</p>
            <p className="text-gray-700 mb-4">{book.description}</p>
            <p className="font-semibold">Price: {book.price}</p>
          </div>
        </div>
      </div>
    );
  };

  export default BookDetailsPage