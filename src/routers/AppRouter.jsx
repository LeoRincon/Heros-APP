import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../components/login';
import { DashboardRouter } from '.';
import { PrivateRoute } from '.';
import { PublicRoute } from '.';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
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
