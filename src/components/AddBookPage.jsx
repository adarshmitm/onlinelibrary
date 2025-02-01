import React from "react";
import AddBookForm from "./AddBookForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/bookReducer";

const AddBookPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBook = (book) => {
    dispatch(addBook(book));
    navigate("/browse-books"); // Redirect to Browse Books page
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <AddBookForm onSubmit={handleAddBook} />
    </div>
  );
};

export default AddBookPage;
