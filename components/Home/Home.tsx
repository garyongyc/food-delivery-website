import React from 'react';
import Hero from './Hero/Hero';
import Restaurants from './Restaurants/Restaurants';

const Home = () => {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Restaurants />
    </main>
  );
};

export default Home;
