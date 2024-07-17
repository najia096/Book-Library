import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const AddBook = ({ setBooks }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/books/add/', { title, author, description })
      .then(response => {
        setBooks(prevBooks => [...prevBooks, response.data]);
        setTitle('');
        setAuthor('');
        setDescription('');
        alert('Book added successfully!');
      })
      .catch(error => {
        console.error('There was an error adding the book!', error);
      });
  };

  return (
    <div className="container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author: </label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>Description: </label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} maxLength="200"/>
        </div>
        <button type="submit" className="add-book-button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
