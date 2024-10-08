import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex bg-indigo-800'>
      <div className='flex items-center justify-between w-full text-white text-sm p-2 border border-black'>
        <div></div>
        <div className='flex items-center gap-2'>
          <Image
            className='mix-blend-color-burn'
            src='/assets/images/dashboard_icon.jpg'
            alt='dashboard_icon'
            height={25}
            width={25}
          />
          <p>FunnelLibrary</p>
        </div>
        <ul className='flex items-center gap-8 font-semibold'>
          <li>Pricing</li>
          <li className='p-1 rounded-xl flex items-center gap-1 border border-slate-400'>
            <div className='bg-white h-4 w-4 rounded-full'></div>
            <p>Adam</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
