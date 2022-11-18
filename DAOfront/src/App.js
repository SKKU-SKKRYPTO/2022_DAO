import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Main, Login } from './pages';
import './styles/default.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
