import { FunctionComponent, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { addBlock, blocksConverter, ECollections } from '../../api/article';
import Description from '../../components/Description';
import Divider from '../../components/Divider';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Button from '../../components/UI/Button';
import { firestore } from '../../api/firebaseCofig';
import { collection, orderBy, query } from 'firebase/firestore';
import { EBlockType } from '../../types/article';

interface ArticleProps {}

const Article: FunctionComponent<ArticleProps> = () => {
  // const URL = window.location.href.substring(
  //   window.location.href.lastIndexOf('/') + 1
  // );
  // tests
  const [textContent, setTextContent] = useState('');
  const [imgContent, setImgContent] = useState<FileList>();
  const [position, setPosition] = useState('');
  const [type, setType] = useState(EBlockType.text);
  const [path, setPath] = useState('');
  //tests end

  const URL = 'UZR5E9Ntjn7b4eeDWVNe';
  const [blocks, loading, error] = useCollection(
    query(
      collection(firestore, ECollections.articles, URL, 'blocks').withConverter(
        blocksConverter
      ),
      orderBy('position')
    )
  );
  console.log(blocks, loading, error);
  return (
    <>
      <div>
        {blocks?.docs.map((blockSnap, i) => {
          const block = blockSnap.data();
          return (
            <div>
              <p className='text-black'>{block.position}</p>
              <p>{block.content}</p>
              <p>{block.type}</p>
              <p>{block.path}</p>
            </div>
          );
        })}
        <div>
          {type === EBlockType.text && (
            <input
              type='text'
              placeholder='Контент'
              onChange={(e) => setTextContent(e.target.value)}
            />
          )}
          {type === EBlockType.image && (
            <input
              type='file'
              placeholder='Контент'
              onChange={(e) => setImgContent(e.target.files!)}
            />
          )}
          {/* <input
            type='text'
            placeholder='Позиция'
            onChange={(e) => setPosition(e.target.value)}
          /> */}
          {/* <input
            type='text'
            placeholder='Тип'
            onChange={(e) => setType(e.target.value)}
          />  */}

          <select
            name='select'
            onChange={(e) => setType(e.target.value as EBlockType.text)}
          >
            <option value={EBlockType.text} selected>
              Текст
            </option>
            <option value={EBlockType.image}>Картинка</option>
          </select>
          {/* <input
            type='text'
            placeholder='Путь'
            onChange={(e) => setPath(e.target.value)}
          /> */}
          <button
            className='text-red'
            onClick={() =>
              addBlock(
                {
                  position: blocks!.docs.length + 1,
                  content: textContent,
                  type: EBlockType.text,
                },
                URL,
                imgContent
              )
            }
          >
            ОТПРАВИТЬ
          </button>
        </div>
      </div>
    </>
  );
};

export default Article;
