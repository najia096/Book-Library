import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';
import bookIcon from './images/book.png';  // Import the image

const App = () => {
  const [books, setBooks] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/books/')
      .then(response => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const displayedBooks = viewAll ? books : books.slice(-6).reverse();

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div>
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
        <label>{darkMode ? 'Light Mode' : 'Dark Mode'}</label>
      </div>
      <h1>Najia's Library</h1>
      <AddBook setBooks={setBooks} />
      <BookList books={displayedBooks} setBooks={setBooks} />
      <button className="view-all-button" onClick={() => setViewAll(!viewAll)}>
        <img src={bookIcon} alt="Book Icon" />
        {viewAll ? 'Show Less' : 'View All Books'}
      </button>
    </div>
  );
};

export default App;
