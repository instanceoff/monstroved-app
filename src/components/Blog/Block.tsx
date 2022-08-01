import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { EBlogBlockType } from '../../types/blog';

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  type: EBlogBlockType;
  content: string;
}

interface TextBlockProps {
  content: string;
}

const TextBlock: FunctionComponent<TextBlockProps> = (props) => {
  return (
    <>
      <p>{props.content}</p>
    </>
  );
};

const Block: FunctionComponent<BlockProps> = (props) => {
  const { type, content, ...args } = props;

  const block = () => {
    switch (type) {
      case EBlogBlockType.text:
        return <TextBlock content={content} />;
      default:
        return <p>Nit tyt nichego</p>;
    }
  };
  return (
    <>
      <div className={`${args.className}`}>{block()}</div>
    </>
  );
};

export default Block;
