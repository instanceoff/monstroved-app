import { doc } from 'firebase/firestore';
import { FunctionComponent } from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { ECollections } from '../api/article';
import { firestore } from '../api/firebaseCofig';
import Blog from '../pages/Blog';

interface ArticlesValidationProps {}

const ArticlesValidation: FunctionComponent<ArticlesValidationProps> = () => {
  const { id } = useParams();
  const [article, loading, error] = useDocument(
    doc(firestore, ECollections.articles, id!)
  );
  return !loading ? (
    article?.exists() ? (
      <Outlet />
    ) : (
      <Navigate to='/' />
    )
  ) : (
    <Blog />
  );
};

export default ArticlesValidation;
