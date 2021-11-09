import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/ui/NavBar';
import { LoginScreen } from '../components/login';
import { Marvel } from '../pages/marvel';
import { DcScreen } from '../pages/dcScreen/DcScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/login' element={<LoginScreen />} />
          <Route exact path='/marvel' element={<Marvel />} />
          <Route exact path='/' element={<Marvel />} />
          <Route exact path='/dc' element={<DcScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
