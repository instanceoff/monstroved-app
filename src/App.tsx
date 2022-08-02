import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from './pages/Blog';

const App: React.FC = () => {
  AOS.init();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/closed' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
