import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [newBook, setNewBook] = useState({
    title: '',
    description: '',
    isbn: '',
    imageUrl: '',
    pageCount: 0,
    categoryId: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const categoriesRes = await axios.get('/api/categories');
      const booksRes = await axios.get('/api/books');
      setCategories(categoriesRes.data);
      setBooks(booksRes.data);
    };

    fetchData();
  }, []);

  const handleCategorySubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/categories', { name: newCategory });
    setNewCategory('');
  };

  const handleBookSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/books', newBook);
    setNewBook({
      title: '',
      description: '',
      isbn: '',
      imageUrl: '',
      pageCount: 0,
      categoryId: ''
    });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <form onSubmit={handleCategorySubmit}>
        <h3>Add Category</h3>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Category Name"
        />
        <button type="submit">Add Category</button>
      </form>

      <form onSubmit={handleBookSubmit}>
        <h3>Add Book</h3>
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
          placeholder="Description"
        />
        <input
          type="text"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
          placeholder="ISBN"
        />
        <input
          type="text"
          value={newBook.imageUrl}
          onChange={(e) => setNewBook({ ...newBook, imageUrl: e.target.value })}
          placeholder="Image URL"
        />
        <input
          type="number"
          value={newBook.pageCount}
          onChange={(e) => setNewBook({ ...newBook, pageCount: parseInt(e.target.value) })}
          placeholder="Page Count"
        />
        <select
          value={newBook.categoryId}
          onChange={(e) => setNewBook({ ...newBook, categoryId: e.target.value })}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>

      <h3>Manage Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <h3>Manage Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;