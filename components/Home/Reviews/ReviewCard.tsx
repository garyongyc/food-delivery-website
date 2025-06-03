import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

type Props = {
  title: string;
  review: string;
  image: string;
  name: string;
  job: string;
};

const ReviewCard = ({ title, review, image, name, job }: Props) => {
  return (
    <article className='bg-gray-100 rounded-lg w-[80%] mx-auto py-8 px-12'>
      <h3 className='text-lg font-bold mb-2'>{title}</h3>
      <div className='flex items-center text-amber-400 space-x-1 text-xl'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className='mt-6 leading-6'>{review}</p>
      <p className='h-[1px] bg-gray-300 my-6'></p>
      <div className='flex items-center space-x-4'>
        <Image src={image} alt={`Picture of ${name}`} width={50} height={50} />
        <div>
          <p className='font-semibold'>{name}</p>
          <p className='text-sm'>{job}</p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
