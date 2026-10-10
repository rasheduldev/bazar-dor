import React, { Suspense } from 'react';
import logo from '@/assets/logo-icon.png'
import Image from 'next/image';
import CurrentDate from './CurrentDate';
import CategoryLinks from './CategoryLinks';
import UserInfo from './UserInfo';

const Navbar =async () => {
    return (
        <div className='bg-base-100 shadow-sm py-2' >
    <div className="navbar flex justify-between items-center container mx-auto">
  <div className="flex gap-2 items-center">
    <Image src={logo} alt='Navbar Logo' className='w-10 h-10 bg-[#05893E] p-2 rounded-md'></Image>
    <div>
        <p className='font-bold text-2xl'>বাজার দর</p>
        <p className='text-xs text-gray-500'>
        <Suspense fallback={<span>তারিখ লোড হচ্ছে...</span>}>
          <CurrentDate/>
        </Suspense>
          </p>
    </div>
  </div>
  <UserInfo></UserInfo>
</div>
 <Suspense fallback={<span>ক্যাটেগোরি লোড হচ্ছে...</span>}>
  <CategoryLinks/>
 </Suspense>
        </div>
    );
};

export default Navbar;