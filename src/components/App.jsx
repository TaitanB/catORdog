import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../page/Home/Home';
import Viewed from '../page/Viewed/Viewed';
import Favorites from '../page/Favorites/Favorites';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import NotFound from '../page/NotFound/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/viewed" element={<Viewed />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
