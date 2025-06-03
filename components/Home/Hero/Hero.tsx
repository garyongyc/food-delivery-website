import Image from 'next/image';
import React from 'react';
import { FaApple, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='py-16 mt-24'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div>
          <h1 className='font-extrabold text-5xl leading-16'>
            Your favourite food,{' '}
            <span className='text-pink-600'>delivered</span> to you.
          </h1>
          <p className='mt-4 font-medium text-gray-800'>
            Food, drinks, groceries, and more available for delivery and pickup.
          </p>
          <p className='text-sm mt-12'>Apps available for download</p>
          <div className='mt-4 flex items-center space-x-4'>
            <button className='flex items-center py-2 px-5 border border-gray-300 rounded-md space-x-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
              <FaApple className='text-xl' />
              <div>
                <p className='text-xs text-left'>Download via</p>
                <p className='font-semibold text-left'>App Store</p>
              </div>
            </button>
            <button className='flex items-center py-2 px-5 border border-gray-300 rounded-md space-x-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
              <FaPlay className='text-xl' />
              <div>
                <p className='text-xs text-left'>Download via</p>
                <p className='font-semibold text-left'>Play Store</p>
              </div>
            </button>
          </div>
        </div>
        <div>
          <Image
            src='/images/hero.png'
            alt='hero image of Foodie'
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
