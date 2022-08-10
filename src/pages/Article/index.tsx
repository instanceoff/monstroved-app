import { FunctionComponent, useEffect, useState } from 'react';
import {
  useCollection,
  useDocument,
  useDocumentData,
} from 'react-firebase-hooks/firestore';
import {
  addBlock,
  articlesConverter,
  blocksConverter,
  ECollections,
} from '../../api/article';
import { firestore } from '../../api/firebaseCofig';
import { collection, orderBy, query, doc } from 'firebase/firestore';
import { EBlockType } from '../../types/article';
import Block from '../../components/Article/Block';
import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/Article/Header';

interface ArticleProps {}

const Article: FunctionComponent<ArticleProps> = (props) => {
  const [textContent, setTextContent] = useState('');
  const [imgContent, setImgContent] = useState<FileList>();
  const [type, setType] = useState<EBlockType>(EBlockType.text);
  const { id } = useParams();

  const [article, aLoading, aError] = useDocumentData(
    doc(firestore, ECollections.articles, id!).withConverter(articlesConverter)
  );
  const [blocks, loading, error] = useCollection(
    query(
      collection(firestore, ECollections.articles, id!, 'blocks').withConverter(
        blocksConverter
      ),
      orderBy('position')
    )
  );

  const clickHandler = () => {
    const adderBlock = () =>
      addBlock(
        {
          position: blocks!.docs.length + 1,
          content: textContent,
          type: type,
        },
        id!,
        imgContent
      );

    switch (type) {
      case EBlockType.image:
        if (imgContent) {
          let img = new Image();
          img.src = window.URL.createObjectURL(imgContent![0]);
          img.onload = function () {
            if (img.naturalWidth < 1080 || img.naturalHeight < 300) {
              alert(
                'Изображение имеет слишком низкое разрешение. Минимальное разрешение: 300x1080. Ваше: ' +
                  img.naturalWidth +
                  'x' +
                  img.naturalHeight
              );
            } else {
              adderBlock();
            }
          };
        } else {
          alert('Изображение не загружено. Выберите изображение.');
        }
        break;
      case EBlockType.text:
        adderBlock();
        break;
    }

    if (type === EBlockType.image) {
    }
  };

  return (
    <>
      {!aLoading && <ArticleHeader article={article!} />}
      <div className='w-3/5 mx-auto'>
        <h2 className='text-4xl'>{article?.title}</h2>
        <div>
          {blocks?.docs.map((blockSnap, i) => {
            return <Block key={i} block={blockSnap.data()} />;
          })}
          <div>
            {type === EBlockType.text && (
              <input
                className='text-black'
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
              className='text-black'
              name='select'
              onChange={(e) => setType(e.target.value as EBlockType)}
            >
              <option value={EBlockType.text} defaultValue='true'>
                Текст
              </option>
              <option value={EBlockType.image}>Картинка</option>
            </select>
            <button className='text-red' onClick={() => clickHandler()}>
              ОТПРАВИТЬ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
