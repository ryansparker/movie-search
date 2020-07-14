import React from 'react';
import './style.css';
import SearchMovies from './components/SearchMovies/index';

function App() {
  return (
    <div className="container">
    <h1 className="title">Movie Search</h1>
    <SearchMovies />
    </div>
  );
}

export default App;
