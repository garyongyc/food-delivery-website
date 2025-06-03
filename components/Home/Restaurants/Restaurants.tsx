import React from 'react';
import RestaurantCard from './RestaurantCard';

const Restaurants = () => {
  return (
    <section className='py-16'>
      <div className='w-[80%] mx-auto flex flex-col justify-center'>
        <h2 className='font-extrabold text-2xl text-center capitalize mb-10'>
          Recommended restaurants nearby
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div>
            <RestaurantCard
              image='/images/r1.jpg'
              title='Pizza Hut Delicious Pizza'
              tags={['American', 'Fast Food', 'Traditional']}
            />
          </div>
          <div>
            <RestaurantCard
              image='/images/r2.jpg'
              title='Pizza Hut Delicious Pizza'
              tags={['American', 'Fast Food', 'Traditional']}
            />
          </div>
          <div>
            <RestaurantCard
              image='/images/r3.jpg'
              title='Pizza Hut Delicious Pizza'
              tags={['American', 'Fast Food', 'Traditional']}
            />
          </div>
          <div>
            <RestaurantCard
              image='/images/r4.jpg'
              title='Pizza Hut Delicious Pizza'
              tags={['American', 'Fast Food', 'Traditional']}
            />
          </div>
          <div>
            <RestaurantCard
              image='/images/r5.jpg'
              title='Pizza Hut Delicious Pizza'
              tags={['American', 'Fast Food', 'Traditional']}
            />
          </div>
          <div>
            <RestaurantCard
              image='/images/r6.jpg'
              title='Pizza Hut Delicious Pizza'
              tags={['American', 'Fast Food', 'Traditional']}
            />
          </div>
        </div>
        <button className='bg-cyan-700 text-white py-4 px-9 rounded-full mt-7 self-center cursor-pointer font-bold hover:bg-cyan-300 hover:text-black transition-all duration-300 capitalize'>
          Discover more &rarr;
        </button>
      </div>
    </section>
  );
};

export default Restaurants;
