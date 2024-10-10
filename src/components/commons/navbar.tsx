import { Menu } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Sidebar from './sidebar';

const Navbar = () => {
  return (
    <div className='flex bg-[#1E1362] text-white p-4'>
      <div className='flex items-center justify-between w-full text-white text-sm p-2'>
        <div></div>
        <div className='flex items-center gap-2 sm:ml-32'>
          <Image
            className='mix-blend-color-burn'
            src='/assets/images/dashboard_icon.jpg'
            alt='dashboard_icon'
            height={25}
            width={25}
          />
          <p className='text-lg'>FunnelLibrary</p>
        </div>
        <ul className='sm:flex items-center gap-8 font-semibold hidden'>
          <li>Pricing</li>
          <li className='p-1 rounded-xl flex items-center gap-1 border border-slate-400'>
            <div className='bg-white h-4 w-4 rounded-full'></div>
            <p>Adam</p>
          </li>
        </ul>
        <div className='sm:hidden block'>
        <Sheet>
          <SheetTrigger>
            <Menu className='h-4 w-4 cursor-pointer' />
          </SheetTrigger>
          <SheetContent className='bg-white w-3/5 shadow-2xl'>
            <Sidebar />
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
