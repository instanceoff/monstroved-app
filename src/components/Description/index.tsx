import React from 'react';
import logo from './logo.png';
import animlogo from './animlogo.mp4';
import trailer_placeholder from './trailer_placeholder.png';

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
        <img
          data-aos='fade-right'
          data-aos-duration='1500'
          data-aos-once='true'
          data-aos-delay='800'
          className=''
          src={trailer_placeholder}
          alt=''
        />
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
