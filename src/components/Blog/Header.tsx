import { FunctionComponent } from 'react';
import Button from '../UI/Button';
import logo from '../../assets/logo.png';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <img className='max-h-80 mx-auto -mb-16 -mt-32' src={logo} alt='logo' />
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
