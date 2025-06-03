import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
  tags: [string, string, string];
};

const RestaurantCard = ({ image, title, tags }: Props) => {
  return (
    <article className='flex flex-col justify-center bg-gray-200 p-6 rounded-md shadow-md'>
      <div className='w-full h-[250px]'>
        <Image
          src={image}
          alt={`Picture of ${title}`}
          height={250}
          width={250}
          className='object-cover w-full h-full rounded-md'
        />
      </div>
      <h3 className='font-semibold text-lg text-center mt-4'>{title}</h3>
      <div className='flex items-center justify-between mt-4'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='bg-blue-950 text-white rounded-full px-5 py-2 text-xs'
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default RestaurantCard;
