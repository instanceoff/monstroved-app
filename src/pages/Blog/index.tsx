import ArticleList from '../../components/Blog/ArticleList';
import Footer from '../../components/Footer';

function Blog() {
  return (
    <div className=' bg-main-gray overflow-x-hidden'>
      <ArticleList />
      <Footer />
    </div>
  );
}

export default Blog;
