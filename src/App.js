import logo from './logo.svg';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Home />
      </BrowserRouter>
      
    </div>
  )
}

export default App;
