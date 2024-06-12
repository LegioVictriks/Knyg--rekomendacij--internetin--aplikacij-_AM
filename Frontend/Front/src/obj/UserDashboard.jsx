import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList';

const UserDashboard = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await axios.get('/api/books');
      setBooks(result.data);
    };

    fetchBooks();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const result = await axios.get(`/api/books/search?title=${searchQuery}`);
    setBooks(result.data);
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search books by title"
        />
        <button type="submit">Search</button>
      </form>
      <BookList books={books} />
    </div>
  );
};

export default UserDashboard;
