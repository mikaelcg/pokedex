//React
import React from 'react';

//Assets
import './App.css';

//Router
import { BrowserRouter, Link } from 'react-router-dom'

//Routes
import Routes from '../../routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />

        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
      </BrowserRouter>
    </>
  );
}

export default App;
