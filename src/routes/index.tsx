import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import React from 'react';

const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router