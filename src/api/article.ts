import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { IArticle, IArticleInput } from '../types/article';
import { firestore, storage } from './firebaseCofig';

export enum ECollections {
  articles = 'articles',
}

export const addArticle = async (article: IArticleInput, bgImage: FileList) => {
  const newDocRef = await addDoc(
    collection(firestore, ECollections.articles),
    article
  );
  if (bgImage && bgImage.length > 0) {
    const fileRef = ref(storage, `articles/${newDocRef.id}/${bgImage[0].name}`);

    await uploadBytes(fileRef, bgImage[0]);

    const imageURL = await getDownloadURL(fileRef);

    await updateDoc(newDocRef, {
      imageURL: imageURL,
      imagePath: fileRef.fullPath,
    });
  }
};

export const getArticles = async (col: ECollections) => {
  const q = query(collection(firestore, col));
  const snap = await getDocs(q);

  return await articleConverter(snap);
};

const articleConverter = async (snap: QuerySnapshot<DocumentData>) => {
  let result: IArticle[] = [];
  snap.docs.forEach(async (doc, i) => {
    result.push({
      title: doc.get('title'),
      description: doc.get('description'),
      imagePath: doc.get('imagePath'),
      imageURL: doc.get('imageURL'),
    });
  });
  return result;
};

export const getArticleImageURL = async (imagePath: string) => {
  let imageUrl = '';
  getDownloadURL(ref(storage, imagePath)).then(
    (downloadUrl) => (imageUrl = downloadUrl)
  );
  return imageUrl;
};
