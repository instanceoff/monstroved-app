import {
  addDoc,
  collection,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  SnapshotOptions,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { IArticle, IArticleInput, IBlock } from '../types/article';
import { firestore, storage } from './firebaseCofig';

export enum ECollections {
  articles = 'articles',
}

//Converters
export const articlesConverter = {
  toFirestore: (article: IArticle) => {
    return {
      title: article.title,
      description: article.description,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<IArticle>,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    return {
      title: data?.title,
      description: data?.description,
      imagePath: data?.imagePath,
      imageURL: data?.imageURL,
    } as IArticle;
  },
};

export const blocksConverter = {
  toFirestore: (block: IBlock) => {
    return {
      position: block.position,
      type: block.type,
      content: block.content,
      path: block.path,
      URL: block.URL,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<IBlock>,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    return {
      position: data?.position,
      type: data?.type,
      content: data?.content,
      path: data?.path,
      URL: data?.URL,
    } as IBlock;
  },
};

const uploadImage = async (image: FileList, path: string) => {
  const fileRef = ref(storage, `${path}/${image[0].name}`);
  await uploadBytes(fileRef, image[0]);
  return { fileRef, fileURL: await getDownloadURL(fileRef) };
};

export const addArticle = async (article: IArticleInput, bgImage: FileList) => {
  // const fileRef = ref(storage, `articles/${bgImage[0].name}`);
  // await uploadBytes(fileRef, bgImage[0]);
  // const imageURL = await getDownloadURL(fileRef);

  const imageObj = await uploadImage(bgImage, `articles`);

  const newDocRef = await addDoc(
    collection(firestore, ECollections.articles).withConverter(
      articlesConverter
    ),
    {
      ...article,
      imageURL: imageObj.fileURL,
      imagePath: imageObj.fileRef.fullPath,
    }
  );

  if (bgImage && bgImage.length > 0) {
    await updateDoc(newDocRef, {
      imageURL: imageObj.fileURL,
      imagePath: imageObj.fileRef.fullPath,
    });
  }
};

export const addBlock = async (
  block: IBlock,
  parentArticle: string,
  image?: FileList
) => {
  // const fileRef = ref(storage, `articles/${parentArticle}`);
  // await uploadBytes(fileRef, image[0]);
  // const imageURL = await getDownloadURL(fileRef);

  const newDocRef = await addDoc(
    collection(
      firestore,
      ECollections.articles,
      parentArticle,
      'blocks'
    ).withConverter(blocksConverter),
    { ...block }
  );

  if (image && image.length > 0) {
    const imageObj = await uploadImage(image!, `articles`);
    await updateDoc(newDocRef, {
      URL: imageObj.fileURL,
      path: imageObj.fileRef.fullPath,
    });
  }
};

// export const getArticles = async (col: ECollections) => {
//   const q = query(collection(firestore, col));
//   return await getDocs(q);
// };

// export const articleConverter = (snap: QueryDocumentSnapshot<DocumentData>) => {
//   return {
//     title: snap.get('title'),
//     description: snap.get('description'),
//     imagePath: snap.get('imagePath'),
//     imageURL: snap.get('imageURL'),
//   } as IArticle;
// };

// export const getArticleImageURL = async (imagePath: string) => {
//   let imageUrl = '';
//   getDownloadURL(ref(storage, imagePath)).then(
//     (downloadUrl) => (imageUrl = downloadUrl)
//   );
//   return imageUrl;
// };

// export const articlesConverter = async (snap: QuerySnapshot<DocumentData>) => {
//   let result: IArticle[] = [];
//   snap.docs.forEach(async (doc, i) => {
//     const dat = doc as unknown as IArticle;
//     result.push({
//       title: doc.get('title'),
//       description: doc.get('description'),
//       imagePath: doc.get('imagePath'),
//       imageURL: doc.get('imageURL'),
//     });
//   });
//   return result;
// };
