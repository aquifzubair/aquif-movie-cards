import React from 'react';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';

class App extends React.Component { 
  
  render() {

    return (
      <div>
        <Header />
        <Cards />        
      </div>
     
    );
  }
  
}

export default App;
