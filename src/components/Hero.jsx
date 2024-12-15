import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  const manRef = useRef(null);

  useGSAP(() => {
     gsap.to(manRef.current, { 
      y: -200, 
      opacity: 0, 
      duration: 3, 
      repeat: -1,
      scrollTrigger: { 
        trigger: manRef.current, 
        start: "top 90%", 
        end: "top 40%", 
        scrub: true, 
        onEnter: () => gsap.to(manRef.current, { opacity: 1 }),
         onLeave: () => gsap.to(manRef.current, { opacity: 0 }), 
        }, 
      });
     }, { scope: manRef });

  return (
    <div className='relative flex justify-center items-center w-full h-auto'>
      <img src="/logo.webp" alt="logo" className="w-auto max-w-full h-96" />
      <div className="absolute bg-happySky w-[15%] h-36 top-[55%] left-[] md:w-[6%] md:h-[40%] md:top-[50%] lg:w-[4.5%] lg:h-44 lg:top-[45%]">
        <img ref = {manRef} src = "/man.png" alt="man" className="absolute top-[100%] left-[36%] transform -translate-x-1/2 -translate-y-1/2 max-w-full h-auto lg:top-[100%] lg:left-[40%] lg:max-w-[110%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"/>
      </div>
      <img src="/ufo.webp" alt="ufo" className="absolute top-[31%] left-[29%] transform -translate-x-1/2 max-w-[40%] sm:top-[29%] sm:left-[40%] sm:max-w-[30%] md:top-[5%] md:left-[50%] md:max-w-[20%] lg:top-[29%] lg:left-[42%] lg:max-w-[15%] vibrate-1" />
    </div>
  );
}

export default Hero;
