import { FunctionComponent } from 'react';
import { IArticle } from '../../types/article';

interface ArticleHeaderProps {
  article: IArticle;
}

const ArticleHeader: FunctionComponent<ArticleHeaderProps> = ({ article }) => {
  return (
    <>
      <div className='w-full h-40 overflow-hidden'>
        {article.imageURL && (
          <img className='object-fill mx-auto' src={article.imageURL} alt='' />
        )}
      </div>
    </>
  );
};

export default ArticleHeader;
