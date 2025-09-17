import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter  } from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />   
      </BrowserRouter>
      
    </div>
  )
}

export default App;
