import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
  subtitle: string;
};

const FeatureCard = ({ image, title, subtitle }: Props) => {
  return (
    <article className='flex flex-col justify-center items-center'>
      <Image src={image} alt={`Picture of ${title}`} width={100} height={100} />
      <h3 className='text-center mt-4 font-bold text-lg mb-2'>{title}</h3>
      <p className='text-center w-[80%] mx-auto text-base text-gray-600'>
        {subtitle}
      </p>
    </article>
  );
};

export default FeatureCard;
