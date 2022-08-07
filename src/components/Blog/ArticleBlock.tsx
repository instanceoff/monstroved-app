import { FunctionComponent } from 'react';
import { IArticle } from '../../types/article';

interface ArticleBLockProps {
  article: IArticle;
}

const ArticleBLock: FunctionComponent<ArticleBLockProps> = ({ article }) => {
  const divStyle = {
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.1), rgba(20, 22, 23, 0.5) ), url(' +
      article.imageURL +
      ')',
  };

  return (
    <>
      <div
        id={article.title}
        style={divStyle}
        className={`group flex my-3 bg-no-repeat bg-cover overflow-hidde truncate justify-between text-white rounded-xl  h-28 bg-main-orange px-10 py-6n`}
      >
        <span className='w-fit h-fit my-auto'>
          <h3 className='text-4xl translate-y-2 truncate transition-all duration-[370ms] group-hover:-translate-y-1'>
            {article.title}
          </h3>
          <p className='truncate transition-all duration-[370ms] translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-80'>
            {article.description}
          </p>
        </span>
      </div>
    </>
  );
};

export default ArticleBLock;
