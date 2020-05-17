//React
import React from 'react';

//Assets
import './App.css';

//Router
import { BrowserRouter } from 'react-router-dom'

//Routes
import Routes from '../../routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
