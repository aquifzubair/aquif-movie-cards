import React from 'react';
import Header from './components/Header';
import './App.css';
import Cards from './components/Cards'

function App() {
  return (
    <div>
      <Header />
      <div className="movie-container">
        <Cards />
      </div>
      
    </div>
   
  );
}

export default App;
