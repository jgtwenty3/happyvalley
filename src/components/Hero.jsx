import React from 'react';

const Hero = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-auto'>
      <img src="/logo.webp" alt="logo" className="w-auto max-w-full h-96" />
      <img src="/ufo.webp" alt="ufo" className="absolute top-[31%] left-[29%] transform -translate-x-1/2 max-w-[40%] sm:top-[29%] sm:left-[40%] sm:max-w-[30%] md:top-[5%] md:left-[50%] md:max-w-[20%] lg:top-[29%] lg:left-[42%] lg:max-w-[15%] vibrate-1" />
    </div>
  );
}

export default Hero;
