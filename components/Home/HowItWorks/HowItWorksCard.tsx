import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  num: string;
  title: string;
  image: string;
  description: string;
};

const HowItWorksCard = ({ num, title, image, description }: Props) => {
  return (
    <article className='flex flex-col justify-center relative'>
      <div className='font-bold text-xl bg-pink-600 w-14 h-14 rounded-full flex flex-col justify-center items-center text-white absolute top-0'>
        {num}
      </div>
      <Image
        src={image}
        alt={`Picture of ${title}`}
        width={250}
        height={250}
        className='object-cover mx-auto'
      />
      <h3 className='text-center font-bold text-lg mt-4 mb-3'>{title}</h3>
      <p className='text-center text-base font-medium w-[80%] mx-auto'>
        {description}
      </p>
      <Link href='#_' className='font-semibold mt-6 text-center text-blue-800'>
        Starting earning &rarr;
      </Link>
    </article>
  );
};

export default HowItWorksCard;
