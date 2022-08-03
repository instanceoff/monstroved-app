import * as React from 'react';
import { FunctionComponent } from 'react';
import { IArticle } from '../../types/article';

interface ArticleBLockProps {
  article: IArticle;
}

const ArticleBLock: FunctionComponent<ArticleBLockProps> = ({ article }) => {
  return (
    <>
      <div
        className={`justify-between text-white rounded-xl mx-auto w-5/12 bg-main-orange px-10 py-6`}
      >
        <span className='w-fit h-fit my-auto'>
          <p className='text-3xl'>{article.title}</p>
          <p className='truncate'>{article.description}</p>
        </span>
      </div>
    </>
  );
};

export default ArticleBLock;
