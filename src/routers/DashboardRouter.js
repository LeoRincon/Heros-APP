import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import { Routes, Route } from 'react-router-dom';

import { MarvelScreen } from '../pages/marvel';
import { DcScreen } from '../pages/dcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div>
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
