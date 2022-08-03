import { useState } from 'react';
import { addArticle } from '../../api/article';
import ArticleList from '../../components/Blog/ArticleList';
import Footer from '../../components/Footer';

function Test() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [bgImage, setBgImage] = useState<FileList>();

  return (
    <div className='h-screen bg-main-gray overflow-x-hidden'>
      {/* <ArticleList /> */}

      <div>
        <input type='text' onChange={(e) => setTitle(e.target.value)} />
        <input type='text' onChange={(e) => setDescription(e.target.value)} />
        <input type='file' onChange={(e) => setBgImage(e.target.files!)} />
        <button
          className='text-white'
          onClick={() => addArticle({ title, description }, bgImage!)}
        >
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  );
}

export default Test;
