import Description from '../../components/Description';
import Divider from '../../components/Divider';
import Features from '../../components/Features';
import Button from '../../components/UI/Button';

function MainPage() {
  return (
    <div className=' bg-main-gray overflow-x-hidden'>
      <div className='mx-auto max-h-screen bg-top bg-mainBack bg-no-repeat bg-contain bg-clip-border'>
        <Description />
      </div>
      <Button title={'Кнопочка'} onClick={(e) => console.log(e)} />
      <Divider />
      <Features />
      <Divider />
    </div>
  );
}

export default MainPage;
