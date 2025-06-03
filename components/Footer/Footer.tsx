import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { MdDeliveryDining } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='py-16 bg-gray-800'>
      <div className='w-[80%] mx-auto'>
        <div className='grid lg:grid-cols-4 place-content-center place-items-start gap-14'>
          {/* column 1 */}
          <div>
            <div className='flex items-center space-x-4'>
              <div className='bg-white w-10 h-10 rounded-full flex flex-col items-center justify-center text-blue-950'>
                <MdDeliveryDining className='text-2xl' />
              </div>
              <span className='font-bold text-white text-2xl'>Foodie</span>
            </div>
            <p className='text-white my-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              ullam consequuntur voluptate eligendi, blanditiis ab quae maiores!
            </p>
            <div className='flex items-center space-x-4'>
              <div className='bg-blue-800 text-white w-10 h-10 flex flex-col items-center justify-center rounded-full cursor-pointer'>
                <FaFacebook className='text-xl' />
              </div>
              <div className='bg-pink-700 text-white w-10 h-10 flex flex-col items-center justify-center rounded-full cursor-pointer'>
                <FaInstagram className='text-xl' />
              </div>
              <div className='bg-blue-600 text-white w-10 h-10 flex flex-col items-center justify-center rounded-full cursor-pointer'>
                <FaLinkedin className='text-xl' />
              </div>
              <div className='bg-red-600 text-white w-10 h-10 flex flex-col items-center justify-center rounded-full cursor-pointer'>
                <FaYoutube className='text-xl' />
              </div>
            </div>
          </div>
          {/* column 2 */}
          <div className='text-white flex flex-col'>
            <h3 className='font-bold text-lg'>Company</h3>
            <ul className='text-sm'>
              <li className='mt-4'>
                <Link href='#_'>About Us</Link>
              </li>
              <li className='mt-4'>
                <Link href='#_'>News & Press</Link>
              </li>
              <li className='mt-4'>
                <Link href='#_'>Our Customers</Link>
              </li>
              <li className='mt-4'>
                <Link href='#_'>Leadership</Link>
              </li>
              <li className='mt-4'>
                <Link href='#_'>Careers</Link>
              </li>
            </ul>
          </div>
          {/* column 3 */}
          <div className='text-white flex flex-col'>
            <h3 className='font-bold text-lg'>Company</h3>
            <ul className='text-sm'>
              <li className='mt-4'>
                <Link href='#_'>About Us</Link>
              </li>
              <li className='mt-4'>
                <Link href='#_'>News & Press</Link>
              </li>
              <li className='mt-4'>
                <Link href='#_'>Our Customers</Link>
              </li>
              <li className='mt-4'>
                <Link href='#_'>Leadership</Link>
              </li>
              <li className='mt-4'>
                <Link href='#_'>Careers</Link>
              </li>
            </ul>
          </div>
          {/* column 4 */}
          <div className='text-white flex flex-col gap-6'>
            <h3 className='font-bold text-lg'>Contact us</h3>
            <div>
              <h4 className='font-bold text-sm mb-2'>Mobile Number</h4>
              <p className='text-yellow-300 font-medium text-lg'>
                +1893842134923
              </p>
            </div>
            <div>
              <h4 className='font-bold text-sm mb-2'>Email</h4>
              <p className='text-yellow-300 font-medium text-lg'>
                example@gmail.com
              </p>
            </div>
          </div>
        </div>
        <p className='h-[1px] bg-gray-400 mt-6'></p>
        <div className='flex justify-between mt-6'>
          <div>
            <p className='text-white text-sm'>
              Copyright © {new Date().getFullYear()} Foodie Inc. All rights
              reserved.{' '}
            </p>
          </div>
          <div>
            <p className='text-white text-sm'>123 Success St. Postal 883868</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
