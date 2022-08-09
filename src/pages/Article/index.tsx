import { FunctionComponent, useState } from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { addBlock, blocksConverter, ECollections } from '../../api/article';
import Description from '../../components/Description';
import Divider from '../../components/Divider';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Button from '../../components/UI/Button';
import { firestore } from '../../api/firebaseCofig';
import { collection, orderBy, query, doc } from 'firebase/firestore';
import { EBlockType } from '../../types/article';
import Block from '../../components/Article/Block';
import { Link, Navigate, useParams } from 'react-router-dom';

interface ArticleProps {}

const Article: FunctionComponent<ArticleProps> = (props) => {
  // const URL = window.location.href.substring(
  //   window.location.href.lastIndexOf('/') + 1
  // );
  // tests
  const [textContent, setTextContent] = useState('');
  const [imgContent, setImgContent] = useState<FileList>();
  // const [position, setPosition] = useState('');
  const [type, setType] = useState<EBlockType>(EBlockType.text);
  const { id } = useParams();
  // const [path, setPath] = useState('');
  //tests end

  const [article, aLoading, aError] = useDocument(
    doc(firestore, ECollections.articles, id!)
  );

  const [blocks, loading, error] = useCollection(
    query(
      collection(firestore, ECollections.articles, id!, 'blocks').withConverter(
        blocksConverter
      ),
      orderBy('position')
    )
  );
  return (
    <>
      <div className='w-3/5 mx-auto'>
        <div>
          {blocks?.docs.map((blockSnap, i) => {
            return <Block block={blockSnap.data()} />;
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
            <select
              name='select'
              onChange={(e) => setType(e.target.value as EBlockType)}
            >
              <option value={EBlockType.text} defaultValue='true'>
                Текст
              </option>
              <option value={EBlockType.image}>Картинка</option>
            </select>
            <button
              className='text-red'
              onClick={() =>
                addBlock(
                  {
                    position: blocks!.docs.length + 1,
                    content: textContent,
                    type: type,
                  },
                  id!,
                  imgContent
                )
              }
            >
              ОТПРАВИТЬ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
