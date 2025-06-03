import React from 'react';
import Hero from './Hero/Hero';
import Restaurants from './Restaurants/Restaurants';
import Cuisines from './Cuisines/Cuisines';
import HowItWorks from './HowItWorks/HowItWorks';
import Proposition from './Proposition/Proposition';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import MobileApp from './MobileApp/MobileApp';

const Home = () => {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Restaurants />
      <Cuisines />
      <HowItWorks />
      <Proposition />
      <Features />
      <Reviews />
      <MobileApp />
    </main>
  );
};

export default Home;
