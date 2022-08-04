// import { DocumentData, QuerySnapshot } from '@firebase/firestore';
// import * as React from 'react';
import { FunctionComponent, useMemo, useState } from 'react';
import { getArticles, ECollections, articleConverter } from '../../api/article';
import ArticleBLock from './ArticleBlock';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../../api/firebaseCofig';
import { query, collection } from '@firebase/firestore';

interface ArticleListProps {}

const ArticleList: FunctionComponent<ArticleListProps> = (props) => {
  const [articles, loading, error] = useCollection(
    query(collection(firestore, ECollections.articles))
  );

  return (
    <>
      <div className={`flex flex-col justify-between m-4`}>
        {articles?.docs.map((article, i) => {
          const converted = articleConverter(article);
          return <ArticleBLock key={'article' + i} article={converted} />;
        })}
      </div>
    </>
  );
};

export default ArticleList;
