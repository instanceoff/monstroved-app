// import { DocumentData, QuerySnapshot } from '@firebase/firestore';
// import * as React from 'react';
import { FunctionComponent, useMemo, useState } from 'react';
import { ECollections, articlesConverter } from '../../api/article';
import ArticleBLock from './ArticleBlock';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../../api/firebaseCofig';
import { query, collection } from '@firebase/firestore';

interface ArticleListProps {}

const ArticleList: FunctionComponent<ArticleListProps> = (props) => {
  const [articles, loading, error] = useCollection(
    query(
      collection(firestore, ECollections.articles).withConverter(
        articlesConverter
      )
    )
  );

  return (
    <>
      <div className={`flex flex-col justify-between m-4`}>
        {articles?.docs.map((article, i) => {
          return <ArticleBLock key={'article' + i} article={article.data()} />;
        })}
      </div>
    </>
  );
};

export default ArticleList;
