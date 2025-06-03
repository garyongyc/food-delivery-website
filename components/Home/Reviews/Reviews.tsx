'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Reviews = () => {
  return (
    <section className='py-16'>
      <div className='w-[80%] mx-auto'>
        <h2 className='font-extrabold text-2xl text-center capitalize mb-10'>
          What people say about us.
        </h2>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={3000}>
          <div>
            <ReviewCard
              title='Awesome work!'
              review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur officiis laudantium numquam aliquam eum veniam ad sit. Excepturi, ex nisi.'
              image='/images/c1.png'
              name='Jane Doe'
              job='UI/UX Designer'
            />
          </div>
          <div>
            <ReviewCard
              title='Creative work!'
              review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur officiis laudantium numquam aliquam eum veniam ad sit. Excepturi, ex nisi.'
              image='/images/c2.png'
              name='Alex Sims'
              job='AI Engineer'
            />
          </div>
          <div>
            <ReviewCard
              title='Insanely fantastic work!'
              review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur officiis laudantium numquam aliquam eum veniam ad sit. Excepturi, ex nisi.'
              image='/images/c3.png'
              name='Jennifer Docile'
              job='Web Developer'
            />
          </div>
          <div>
            <ReviewCard
              title='Highly recommended!'
              review='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur officiis laudantium numquam aliquam eum veniam ad sit. Excepturi, ex nisi.'
              image='/images/c1.png'
              name='Simone Nellis'
              job='Database Architect'
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
