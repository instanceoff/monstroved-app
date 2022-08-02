import * as React from 'react';
import { FunctionComponent, ReactNode } from 'react';

interface ArticleBLockProps {
  title: string;
  description: string;
  image: string;
}

const ArticleBLock: FunctionComponent<ArticleBLockProps> = (props) => {
  return (
    <>
      <div className={`flex flex-col flex-wrap justify-between m-4`}></div>
    </>
  );
};

export default ArticleBLock;
