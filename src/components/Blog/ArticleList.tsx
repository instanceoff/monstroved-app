// import { DocumentData, QuerySnapshot } from '@firebase/firestore';
// import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { getArticles, ECollections } from '../../api/article';
import { IArticle } from '../../types/article';
import ArticleBLock from './ArticleBlock';

interface ArticleListProps {}

const ArticleList: FunctionComponent<ArticleListProps> = (props) => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  getArticles(ECollections.articles).then((docs) => setArticles(docs));

  return (
    <>
      <div className={`flex flex-col justify-between m-4`}>
        {articles.map((article, i) => {
          return <ArticleBLock key={'article' + i} article={article} />;
        })}
      </div>
    </>
  );
};

export default ArticleList;
