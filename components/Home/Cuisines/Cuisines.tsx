import React from 'react';

const cuisines = [
  'Pizza',
  'Breakfast',
  'Japanese',
  'Halal',
  'Dessert',
  'Lebanese',
  'American',
  'Sushi',
  'Greek',
  'Thai',
  'Vegetarian',
  'Italian',
  'Mexican',
  'Indian',
  'Chinese',
  'Breakfast',
  'Burgers',
];

const Cuisines = () => {
  return (
    <section className='py-16'>
      <div className='w-[80%] mx-auto'>
        <h2 className='font-extrabold text-2xl text-center capitalize mb-10'>
          All your favourite cuisines under one roof.
        </h2>
        <div className='flex flex-wrap justify-center gap-5 w-[75%] mx-auto'>
          {cuisines.map((cuisine, index) => (
            <span
              key={index}
              className='capitalize px-6 py-3 bg-cyan-200 rounded-full font-semibold text-lg cursor-pointer hover:bg-cyan-800 hover:text-white transition-all duration-300'
            >
              {cuisine}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cuisines;
