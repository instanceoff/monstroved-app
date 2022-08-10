import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from './pages/Blog';
import Test from './pages/Test';
import Article from './pages/Article';
import { query, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { ECollections, articlesConverter } from './api/article';
import { firestore } from './api/firebaseCofig';
import ArticlesValidation from './components/articlesValidation';

const App: React.FC = () => {
  AOS.init();
  return (
    <>
      <div className='h-screen text-white bg-main-gray overflow-x-hidden'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/test' element={<Test />} />
            <Route path='/articles' element={<ArticlesValidation />}>
              <Route path=':id' element={<Article />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
