import Image from 'next/image';
import React from 'react';

const Proposition = () => {
  return (
    <section className='py-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center'>
        <div>
          <Image
            src='/images/a.png'
            alt='proposition image of delivery rider'
            width={800}
            height={800}
          />
        </div>
        <div>
          <h2 className='font-extrabold text-4xl leading-12 text-left capitalize mb-4'>
            We deliver our products as fast as superman can do
          </h2>
          <p className='leading-8 text-base font-medium'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quos
            distinctio eaque deserunt porro doloremque.
          </p>
          <div className='flex items-center space-x-6 mt-8'>
            <span className='text-5xl font-bold text-gray-400'>01</span>
            <div>
              <h3 className='text-lg font-bold mb-3'>
                Easy to use application
              </h3>
              <p className='text-base font-medium'>
                We’re driven beyond just finishing the projects. We want to find
                solutions using our website & apps
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-6 mt-8'>
            <span className='text-5xl font-bold text-gray-400'>02</span>
            <div>
              <h3 className='text-lg font-bold mb-3'>
                Deliver Food within 30 min
              </h3>
              <p className='text-base font-medium'>
                We’re driven beyond just finishing the projects. We want to find
                solutions using our website & apps
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-6 mt-8'>
            <span className='text-5xl font-bold text-gray-400'>03</span>
            <div>
              <h3 className='text-lg font-bold mb-3'>
                100% Reliable with Privacy
              </h3>
              <p className='text-base font-medium'>
                We’re driven beyond just finishing the projects. We want to find
                solutions using our website & apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposition;
