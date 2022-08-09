import { FunctionComponent } from 'react';
import Button from '../UI/Button';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <nav className='w-fit mx-auto flex flex-row justify-between space-x-7'>
        <Button title={'Главная'} />
        <Button title={'Медиа'} />
        <Button title={'Блог'} />
        <Button title={'Галерея'} />
        <Button title={'О нас'} />
      </nav>
    </>
  );
};

export default Header;
