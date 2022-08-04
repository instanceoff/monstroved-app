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
        className={`group overflow-hidden justify-between text-white rounded-xl mx-auto w-5/12 bg-main-orange px-10 py-6`}
      >
        <span className='w-fit h-fit my-auto'>
          <h3 className='text-3xl translate-y-3 transition-all duration-300 group-hover:translate-y-0'>
            {article.title}
          </h3>
          <p className='truncate transition-all duration-300 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>
            {article.description}
          </p>
        </span>
      </div>
    </>
  );
};

export default ArticleBLock;
