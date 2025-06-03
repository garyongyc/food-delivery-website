import Image from 'next/image';
import React from 'react';
import { FaApple, FaPlay } from 'react-icons/fa';

const MobileApp = () => {
  return (
    <section className='py-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center gap-10'>
        <div>
          <Image
            src='/images/app.png'
            alt='Mobile app download image'
            width={600}
            height={600}
          />
        </div>
        <div>
          <h2 className='font-extrabold text-4xl leading-12 text-left capitalize mb-6 w-[90%] mx-auto'>
            Connecting our user with iOS & Android apps. Download from App Store
            and Play store
          </h2>
          <p className='font-medium leading-8 text-gray-700 w-[90%] mx-auto'>
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool. We’re
            driven beyond just finishing the projects. We want to find solutions
            using our website & apps.
          </p>
          <div className='mt-8 flex items-center space-x-4 w-[90%] mx-auto'>
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
      </div>
    </section>
  );
};

export default MobileApp;
