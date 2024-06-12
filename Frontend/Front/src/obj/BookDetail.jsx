import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchBook = async () => {
      const result = await axios.get(`/api/books/${id}`);
      setBook(result.data);
    };

    const fetchComments = async () => {
      const result = await axios.get(`/api/books/${id}/comments`);
      setComments(result.data);
    };

    fetchBook();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`/api/books/${id}/comments`, { text: newComment });
    setNewComment('');
    const result = await axios.get(`/api/books/${id}/comments`);
    setComments(result.data);
  };

  const handleRatingSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`/api/books/${id}/rating`, { rating });
    // Update book details with new rating
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <img src={book.imageUrl} alt={book.title} />
      <p>ISBN: {book.isbn}</p>
      <p>Pages: {book.pageCount}</p>

      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Rate this book</h3>
      <form onSubmit={handleRatingSubmit}>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookDetail;