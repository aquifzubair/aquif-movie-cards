import React from 'react';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import About from './components/About'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () =>  { 

    return (
      <Router>
        <div>
          <div className= 'nav-container'>
            <Link to="/">
              <button  className='header-btn'>Home</button>
            </Link>  

            <Link to="/about">
              <button  className='header-btn'>About</button>
              </Link>
          </div>

          <Switch>

            <Route exact path="/about">
              <About />
            </Route>

            <Route path="/">
              <Header />
              <Cards />
            </Route>
            
          </Switch>          
        </div> 
      </Router>
          
    );
    
  }
  

export default App;
