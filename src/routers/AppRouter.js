import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../components/login';
import { DashboardRouter } from './';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/*' element={<DashboardRouter />} />
          <Route exact path='/login' element={<LoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
