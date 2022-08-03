import { useState } from 'react';
import { addArticle } from '../../api/article';
import ArticleList from '../../components/Blog/ArticleList';
import Footer from '../../components/Footer';

function Blog() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='h-screen bg-main-gray overflow-x-hidden'>
      <ArticleList />
      {/* <Footer /> */}
    </div>
  );
}

export default Blog;
