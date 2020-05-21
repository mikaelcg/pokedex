//React
import React from 'react';

//Assets
import './App.css';

//Router
import { BrowserRouter } from 'react-router-dom'

//Routes
import Routes from '../../routes'

//Providers
import PaginationProvider from '../../contexts/PaginationContext'

function App() {
  return (
    <>
      <PaginationProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PaginationProvider>
    </>
  );
}

export default App;
