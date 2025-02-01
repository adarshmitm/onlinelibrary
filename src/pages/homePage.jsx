import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/searchbar';
import { useSelector } from 'react-redux';
import Section from '../components/sectionbar';
import initialBooks from '../store/initialBook';

const HomePage = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const books = useSelector((state) => state.books);
    console.log("initialBooks", initialBooks.books)
  
    const filteredBooks =books.books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="p-4 bg-gradient-to-br from-pink-100 to-white min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Discover your best books now</h1>
          <div className="rounded-full bg-cyan-200 border border-gray-500 p-2">
          <img src="userico.svg" alt="User" className="rounded-full" />
          </div>
        </div>
        <p className="text-gray-600 mb-4">Find your dream book according to your preferences and join our family. What are you waiting for?</p>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {searchQuery !== "" && <Section title="Search Results" books={filteredBooks} />}
        <Section title="Popular Now" books={initialBooks.books.slice(0, 3)} />
        <Section title="Bestsellers" books={initialBooks.books} />
      </div>
    );
};

export default HomePage;