import React from 'react';
import Description from '../../components/Description';
import Divider from '../../components/Divider';
import Features from '../../components/Features';
import AOS from 'aos';

function MainPage() {
  // AOS.init();
  return (
    <div className=' bg-bgGray overflow-x-hidden'>
      <div className='mx-auto max-h-screen bg-top bg-mainBack bg-no-repeat bg-contain bg-clip-border'>
        <Description />
      </div>
      <Divider />
      <Features />
      <Divider />
    </div>
  );
}

export default MainPage;
