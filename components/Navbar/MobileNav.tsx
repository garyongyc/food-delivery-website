import { Navlinks } from '@/constants/constant';
import Link from 'next/link';
import React from 'react';

type Props = {
  mobileNavOpen: boolean;
};

const MobileNav = ({ mobileNavOpen }: Props) => {
  return (
    <nav
      className={`w-[75%] h-screen bg-blue-700 flex flex-col justify-center items-start transition-all duration-500
    ${mobileNavOpen ? 'translate-x-[0%] fixed' : 'translate-x-[-110%] fixed'}
    
    `}
    >
      <ul className='ml-8 sm:ml-12'>
        {Navlinks.map(({ id, url, label }) => {
          return (
            <li key={id} className='mb-6 sm:mb-10'>
              <Link href={url} className='text-white font-semibold sm:text-2xl'>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <button className='lg:hidden capitalize px-6 py-2 text-sm bg-white text-blue-950 font-bold rounded-lg cursor-pointer hover:bg-blue-300 transition-all duration-300 ml-8 mt-6 sm:ml-12 sm:px-10 sm:py-5 sm:text-xl'>
        Join now
      </button>
    </nav>
  );
};

export default MobileNav;
