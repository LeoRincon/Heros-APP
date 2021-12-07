import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../components/login';
import { DashboardRouter } from '.';
import { PrivateRoute } from '.';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LoginScreen />} />

        <Route
          path='/*'
          element={
            <PrivateRoute>
              <DashboardRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
