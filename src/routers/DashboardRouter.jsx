import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import { Routes, Route } from 'react-router-dom';

import { MarvelScreen } from '../pages/marvel';
import { DcScreen } from '../pages/dcScreen';
import { HeroScreen } from '../components/heroes';
import { SearchScreen } from '../pages/search/SearchScreen';

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-3'>
        <Routes>
          <Route exact path='/marvel' element={<MarvelScreen />} />
          <Route exact path='/hero/:heroeId' element={<HeroScreen />} />
          <Route exact path='/dc' element={<DcScreen />} />
          <Route exact path='/search' element={<SearchScreen />} />
          <Route path='*' element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
