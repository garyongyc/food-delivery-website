'use client';

import { useEffect, useState } from 'react';
import { MdDeliveryDining } from 'react-icons/md';
import { Navlinks } from '@/constants/constant';
import Link from 'next/link';
import { RiMenu3Fill } from 'react-icons/ri';

type Props = {
  toggleNav: () => void;
};

const MainNav = ({ toggleNav }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`h-[12vh] flex items-center w-full fixed
        ${isScrolled ? 'bg-white shadow-md fixed' : 'fixed'}
    `}
    >
      <div className='w-[90%] lg:w-[80%] mx-auto'>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <div className='bg-blue-950 w-10 h-10 rounded-full flex justify-center items-center'>
              <MdDeliveryDining className='text-white text-2xl' />
            </div>
            <span className='hidden lg:block font-bold text-2xl'>Foodie</span>
          </div>
          <ul className='hidden lg:flex items-center'>
            {Navlinks.map(({ id, url, label }) => {
              return (
                <li key={id} className='ml-8'>
                  <Link
                    href={url}
                    className='font-bold text-md text-base hover:text-blue-700 transition-all duration-300 pb-2 hover:border-b-2 hover:border-blue-700'
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className='flex items-center space-x-4'>
            <button className='hidden lg:block capitalize px-7 py-3 bg-blue-950 text-white font-bold rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300'>
              Join now
            </button>
            <div className='lg:hidden bg-blue-950 w-10 h-10 rounded-full flex items-center justify-center'>
              <RiMenu3Fill
                className='text-xl text-white cursor-pointer'
                onClick={toggleNav}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainNav;
