import React from 'react';
import logo from '../assets/logo.png';
import animlogo from '../assets/animlogo.mp4';
import trailer_placeholder from '../assets/trailer_placeholder.png';

const Description: React.FC = () => {
  return (
    <div className='flex flex-col max-w-screen-xl h-screen mx-auto'>
      <img
        data-aos='zoom-in'
        data-aos-duration='2500'
        data-aos-once='true'
        className='mx-auto mt-28 mb-14 floating'
        src={logo}
        alt=''
      />
      {/* <video src={animlogo} autoPlay loop /> */}
      <div className='flex flex-row align-middle justify-center'>
        {/* <img
          data-aos='fade-right'
          data-aos-duration='1500'
          data-aos-once='true'
          data-aos-delay='800'
          className=''
          src={trailer_placeholder}
          alt=''
        /> */}
        <div
          data-aos='fade-right'
          data-aos-duration='1500'
          data-aos-once='true'
          data-aos-delay='800'
          role='status'
          className='flex justify-center items-center w-full h-56 border-2 border-gray-500 bg-gray-300 rounded-lg dark:bg-bgGray'
        >
          <svg
            className='w-12 h-12 text-gray-500 dark:text-gray-500 animate-pulse'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 384 512'
          >
            <path d='M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z' />
          </svg>
          <span className='sr-only'>Загрузка...</span>
        </div>
        <p
          data-aos='fade-left'
          data-aos-duration='1500'
          data-aos-once='true'
          data-aos-delay='800'
          className='text-white text-2xl h-fit my-auto mx-10 font-semibold'
        >
          Монстровед это игра - симулятор в средневековом сеттинге. Вы играете
          за молодого монстроведа, который помогает отважным рыцарям и обычным
          жителям справляться с разнообразными опасными чудищами
        </p>
      </div>
    </div>
  );
};

export default Description;
