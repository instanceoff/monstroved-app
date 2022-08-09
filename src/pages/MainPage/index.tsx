import Description from '../../components/Description';
import Divider from '../../components/Divider';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Button from '../../components/UI/Button';

function MainPage() {
  return (
    <div className=' bg-main-gray overflow-x-hidden'>
      <div className='mx-auto max-h-screen bg-top bg-mainBack bg-no-repeat bg-contain bg-clip-border'>
        <Description />
      </div>
      <Divider />
      <Features />
      <Divider />
      <Footer />
    </div>
  );
}

export default MainPage;
