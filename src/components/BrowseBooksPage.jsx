import React from "react";
import { useSelector } from "react-redux";

const BrowseBooksPage = () => {
  const books = useSelector((state) => state.books.books);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <span className="text-yellow-500 text-lg">
        {"★".repeat(fullStars)}
        {hasHalfStar && "☆"} {/* Half Star */}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };



  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Books</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="border rounded-lg p-4 shadow-md bg-white">
            {book.image ? (
              <img
                src={typeof book.image === "string" ? book.image : URL.createObjectURL(book.image)}
                alt={book.title}
                className="w-full h-40 object-contain mb-2"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-2">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">by {book.author}</p>
            <p className="text-gray-500">Category: {book.category}</p>
            <p className="text-gray-700">{book.description}</p>
            <div>{renderStars(book.rating)}</div>
            <p className="text-green-600 font-bold">{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooksPage;
