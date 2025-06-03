import React from 'react';
import RestaurantCard from './RestaurantCard';

const Restaurants = () => {
  return (
    <section className='py-16'>
      <h2 className='font-extrabold text-2xl text-center capitalize mb-10'>
        Recommended restaurants nearby
      </h2>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10'>
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
    </section>
  );
};

export default Restaurants;
