import * as React from 'react';
import { FunctionComponent, ReactNode } from 'react';

interface ArticleListProps {}

const ArticleList: FunctionComponent<ArticleListProps> = (props) => {
  return (
    <>
      <div className={`flex flex-col flex-wrap justify-between m-4`}></div>
    </>
  );
};

export default ArticleList;
