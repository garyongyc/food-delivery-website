import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className='py-16'>
      <div className='w-[80%] mx-auto'>
        <h2 className='font-extrabold text-2xl text-center capitalize mb-15'>
          Our features at one glance.
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-12'>
          <FeatureCard
            image='/images/f1.svg'
            title='Analytics Business'
            subtitle='We’re driven beyond just finishing the projects. We want to find smart solutions.'
          />
          <FeatureCard
            image='/images/f2.svg'
            title='People Business'
            subtitle='We’re driven beyond just finishing the projects. We want to find smart solutions.'
          />
          <FeatureCard
            image='/images/f3.svg'
            title='Widest Network'
            subtitle='We’re driven beyond just finishing the projects. We want to find smart solutions.'
          />
          <FeatureCard
            image='/images/f4.svg'
            title='Artificial Intelligence'
            subtitle='We’re driven beyond just finishing the projects. We want to find smart solutions.'
          />
          <FeatureCard
            image='/images/f5.svg'
            title='Trusted And Secure'
            subtitle='We’re driven beyond just finishing the projects. We want to find smart solutions.'
          />
          <FeatureCard
            image='/images/f6.svg'
            title='Mobile-First'
            subtitle='We’re driven beyond just finishing the projects. We want to find smart solutions.'
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
