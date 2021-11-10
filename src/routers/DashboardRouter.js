import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import { Routes, Route } from 'react-router-dom';

import { MarvelScreen } from '../pages/marvel';
import { DcScreen } from '../pages/dcScreen';
import { HeroScreen } from '../components/heroes';

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-3'>
        <Routes>
          <Route exact path='/marvel' element={<MarvelScreen />} />
          <Route exact path='/heroe/:heroeId' element={<HeroScreen />} />
          <Route exact path='/dc' element={<DcScreen />} />
          <Route path='*' element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
