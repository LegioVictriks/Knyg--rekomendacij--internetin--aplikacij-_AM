import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const register = (user) => axios.post(`${API_URL}/auth/register`, user);
export const login = (user) => axios.post(`${API_URL}/auth/login`, user);
export const getCategories = () => axios.get(`${API_URL}/categories`);
export const createCategory = (category) => axios.post(`${API_URL}/categories`, category);
export const updateCategory = (id, category) => axios.put(`${API_URL}/categories/${id}`, category);
export const deleteCategory = (id) => axios.delete(`${API_URL}/categories/${id}`);
export const getBooks = () => axios.get(`${API_URL}/books`);
export const searchBooks = (title) => axios.get(`${API_URL}/books/search?title=${title}`);
export const getBooksByCategory = (categoryId) => axios.get(`${API_URL}/books/category/${categoryId}`);
export const createBook = (book) => axios.post(`${API_URL}/books`, book);
export const updateBook = (id, book) => axios.put(`${API_URL}/books/${id}`, book);
export const deleteBook = (id) => axios.delete(`${API_URL}/books/${id}`);
