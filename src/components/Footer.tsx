import { FunctionComponent } from 'react';
import Button from './UI/Button';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <div className='min-w-full h-fit mt-auto'>
        <div className='mx-auto w-1/2 flex justify-around'>
          <Button
            title={'STEAM'}
            onClick={(e) => console.log('Кнопка сработала')}
          />
          <Button
            title={'TWITTER'}
            onClick={function (event): void {
              throw new Error('Function not implemented.');
            }}
          />
          <Button
            title={'INSTAGRAM'}
            onClick={function (event): void {
              throw new Error('Function not implemented.');
            }}
          />
          <Button
            title={'REDDIT'}
            onClick={function (event): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
