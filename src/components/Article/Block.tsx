import { FunctionComponent } from 'react';
import { EBlockType, IBlock } from '../../types/article';

interface BlockProps {
  block: IBlock;
}

const Block: FunctionComponent<BlockProps> = ({ block }) => {
  return (
    <div>
      <div>
        {(() => {
          if (block.type === EBlockType.text) {
            return <p className='text-justify indent-6'> {block.content} </p>;
          }
          if (block.type === EBlockType.image) {
            return <img className='mx-auto' src={block.URL} alt={block.type} />;
          }
          return <p>Тут ничего нет</p>;
        })()}
      </div>
    </div>
  );
};

export default Block;
