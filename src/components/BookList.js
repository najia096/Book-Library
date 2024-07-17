import React from 'react';
import axios from 'axios';
import '../App.css';

const BookList = ({ books, setBooks }) => {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/books/${id}/delete/`)
      .then(response => {
        setBooks(books.filter(book => book.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the book!', error);
      });
  };

  return (
    <div className="container">
      <h1>Book List</h1>
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id} className="book-item">
            <div className="book-title">Title: {book.title}</div>
            <div className="book-author">Author: {book.author}</div>
            <div className="book-description">Description: {book.description}</div>
            <button className="delete-button" onClick={() => handleDelete(book.id)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
