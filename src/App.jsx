import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./store/bookReducer";
import HeaderBar from "./components/Header";
import HomePage from "./pages/homePage";
import BookDetailsPage from "./pages/bookdetails";
import SeeAllBooks from "./pages/SeeAllBooks";
import AddBookPage from "./components/AddBookPage";
import BrowseBooksPage from "./components/BrowseBooksPage";


// const store = configureStore({
//   reducer: booksReducer,
// });
const store = configureStore({
  reducer: {
    books: booksReducer, // Ensure this matches the reducer structure
  },
});

const App = () => (
  // <div>Online Library</div>
  // <Provider store={store}>
  //   <Router>
  //     <HeaderBar />
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/book/:id" element={<BookDetailsPage />} />
  //     </Routes>
  //   </Router>
  // </Provider>
  <div>
    {/* Online Library */}
    <Provider store={store}>
      <Router>
      <HeaderBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<SeeAllBooks/>}/>
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/browse-books" element={<BrowseBooksPage />} />
        </Routes>
      </Router>
    </Provider>
  </div>
);

export default App;
