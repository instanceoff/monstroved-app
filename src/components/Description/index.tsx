import React from 'react';
import logo from './logo.png';
import animlogo from './animlogo.mp4';
import trailer_placeholder from './trailer_placeholder.png';

const Description: React.FC = () => {
  return (
    <div className='flex flex-col max-w-5xl bg-cover bg-center mx-auto'>
      <img
        className='mx-auto max-w-2xl mt-28 mb-28 floating'
        src={logo}
        alt=''
      />
      {/* <video src={animlogo} autoPlay loop /> */}
      <div className='flex flex-row align-middle justify-center'>
        <img className='max-h-64' src={trailer_placeholder} alt='' />
        <p className='text-white text-2xl h-fit my-auto mx-10 font-semibold'>
          Монстровед это игра - симулятор в средневековом сеттинге. Вы играете
          за молодого монстроведа, который помогает отважным рыцарям и обычным
          жителям справляться с разнообразными опасными чудищами
        </p>
      </div>
    </div>
  );
};

export default Description;
