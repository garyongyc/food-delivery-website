import React from 'react';
import HowItWorksCard from './HowItWorksCard';

const HowItWorks = () => {
  return (
    <section className='py-16'>
      <div className='w-[80%] mx-auto'>
        <h2 className='font-extrabold text-2xl text-center capitalize mb-10'>
          How It Works
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-14'>
          <HowItWorksCard
            num='01'
            image='/images/w1.png'
            title='Become a Delivery Rider'
            description="As a delivery driver, you'll make reliable money—working anytime, anywhere."
          />
          <HowItWorksCard
            num='02'
            image='/images/w2.png'
            title='Become a Partner'
            description='Grow your business and reach new customers by partnering with us.'
          />
          <HowItWorksCard
            num='03'
            image='/images/w3.png'
            title='Try Android/iOS App'
            description='Get the best DoorDash experience with live order tracking.'
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
