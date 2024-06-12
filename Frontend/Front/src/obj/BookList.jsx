import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => (
  <div>
    <h3>Book List</h3>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Link to={`/book/${book.id}`}>{book.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default BookList;