import React from 'react';
import BannerImage from '../assets/img/banner-image.jpg'; 
import Brands from './Brands';

const Hero = () => {
  return (
  <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden bg-hero-bg bg-cover md:bg-none'>
        <div className='container mx-auto h-full '>
          <div className='flex items-center  h-full pt-8 '>
            {/* left side */}
            <div className='flex-1 flex flex-col items-center lg:items-start'>
                <p className='text-xl text-accent mb-[22px]'>Hey, I am Dimitris Dekavallas</p>
                <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>Guitarist &<br/> Recording Artist</h1>
                <br/>                
                <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>Work with me</button>
            </div>
            {/* right side */}
            <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
              <img src={BannerImage} alt='banner' />
            </div>

          </div>
        </div>
  </section>
  );
};

export default Hero;
