// import { DocumentData, QuerySnapshot } from '@firebase/firestore';
// import * as React from 'react';
import { FunctionComponent, useMemo, useState } from 'react';
import { ECollections, articlesConverter } from '../../api/article';
import ArticleBLock from './ArticleBlock';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../../api/firebaseCofig';
import { query, collection } from '@firebase/firestore';
import LoadingSpinner from '../UI/LoadingSpinner';

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
      <div
        className={`flex flex-col mx-auto w-fit max-w-full min-w-[50%] px-4 py-2 justify-between m-4 border-main-gray100 bg-main-gray100 border-4 rounded-xl`}
      >
        {loading ? (
          <LoadingSpinner />
        ) : (
          articles?.docs.map((article, i) => {
            return <ArticleBLock key={'article' + i} article={article} />;
          })
        )}
      </div>
    </>
  );
};

export default ArticleList;
