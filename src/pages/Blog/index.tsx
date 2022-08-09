import { useState } from 'react';
import { addArticle } from '../../api/article';
import ArticleList from '../../components/Blog/ArticleList';
import Header from '../../components/Blog/Header';
import Footer from '../../components/Footer';

function Blog() {
  return (
    <div className='h-screen bg-main-gray overflow-x-hidden'>
      <Header />
      <ArticleList />
      {/* <Footer /> */}
    </div>
  );
}

export default Blog;
