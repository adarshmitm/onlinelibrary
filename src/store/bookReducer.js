import { createSlice } from "@reduxjs/toolkit";
import initialBooks from "./initialBook";



// const booksSlice = createSlice({
//   name: 'books',
//   initialState: initialBooks,
//   reducers: {
//     addBook: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });
// console.log("booksReducer loaded");

// export const { addBook } = booksSlice.actions;
// export default booksSlice.reducer;

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      console.log(state.books, action)
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook, setBooks } = booksSlice.actions;
export default booksSlice.reducer;