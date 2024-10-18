/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';

import { AppWindow, Bookmark, LogOut, Menu, Settings2 } from 'lucide-react';
import React, { useState } from 'react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const pathName = usePathname();
  const pathArray = pathName.split("/")
  const [profileOptions, setProfileOptions] = useState<boolean>(false);
  return (
    <div
      className={`flex ${pathArray.includes("route") && !pathArray.includes("plans") && !pathArray.includes("creatorDetails") ? 'bg-[#1E1362] text-white ' : 'bg-white text-black'} p-4`}
    >
      <div className='flex items-center justify-between w-full text-sm p-2'>
        <div></div>
        <div className='flex items-center gap-2 sm:ml-32'>
          <svg
            width='25'
            height='26'
            viewBox='0 0 25 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M24.407 2.74609H12.6557H0.904297L6.77998 23.4323C6.77998 24.5581 9.41067 25.4706 12.6557 25.4706C15.9006 25.4706 18.5313 24.5581 18.5313 23.4323L24.407 2.74609Z'
              fill='#4C36D3'
            />
            <path
              d='M12.6557 5.49296C19.1458 5.49296 24.407 4.26332 24.407 2.74648C24.407 1.22964 19.1458 0 12.6557 0C6.16556 0 0.904297 1.22964 0.904297 2.74648C0.904297 4.26332 6.16556 5.49296 12.6557 5.49296Z'
              fill='#2C1A9B'
            />
            <g clipPath='url(#clip0_3192_5669)'>
              <path
                d='M13.2517 9.40804C13.1981 9.19349 13.0053 9.04297 12.7841 9.04297C12.563 9.04297 12.3702 9.19349 12.3166 9.40804L11.6893 11.9172C11.5587 12.4397 11.5147 12.591 11.4398 12.7079C11.3646 12.8254 11.2649 12.9252 11.1474 13.0003C11.0304 13.0752 10.8791 13.1192 10.3567 13.2498L7.8475 13.8771C7.63294 13.9307 7.48242 14.1235 7.48242 14.3447C7.48242 14.5659 7.63294 14.7587 7.8475 14.8122L10.3567 15.4395C10.8791 15.5702 11.0304 15.6142 11.1474 15.689C11.2649 15.7642 11.3646 15.864 11.4398 15.9814C11.5147 16.0984 11.5587 16.2497 11.6893 16.7721L12.3166 19.2813C12.3702 19.4959 12.563 19.6464 12.7841 19.6464C13.0053 19.6464 13.1981 19.4959 13.2517 19.2813L13.879 16.7721C14.0096 16.2497 14.0536 16.0984 14.1285 15.9814C14.2036 15.864 14.3034 15.7642 14.4209 15.689C14.5378 15.6142 14.6891 15.5702 15.2116 15.4395L17.7208 14.8122C17.9353 14.7587 18.0859 14.5659 18.0859 14.3447C18.0859 14.1235 17.9353 13.9307 17.7208 13.8771L15.2116 13.2498C14.6891 13.1192 14.5378 13.0752 14.4209 13.0003C14.3034 12.9252 14.2036 12.8254 14.1285 12.7079C14.0536 12.591 14.0096 12.4397 13.879 11.9172L13.2517 9.40804Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_3192_5669'>
                <rect
                  width='11.5674'
                  height='11.5674'
                  fill='white'
                  transform='translate(7 8.56055)'
                />
              </clipPath>
            </defs>
          </svg>
          <p className='text-lg'>FunnelLibrary</p>
        </div>

        <ul className='sm:flex items-center gap-8 font-semibold hidden relative'>
          <li>Pricing</li>
          <li
            onClick={() => setProfileOptions(!profileOptions)}
            className='p-1  cursor-pointer rounded-xl flex items-center gap-1 border border-slate-400'
          >
            <div className='bg-slate-200 h-4 w-4 rounded-full'></div>
            <p>Adam</p>
          </li>
          {profileOptions && (
            <ul className='absolute top-10 right-0 bg-white rounded-lg shadow-2xl text-black p-4 z-10'>
              <Link href="/dashboard/bookmarks" className='flex items-center gap-2 p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                <Bookmark className='h-4 w-4' />
                <p>Collections</p>
              </Link>
              <li className='flex items-center gap-2 p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                <Settings2 className='w-4 h-4' />
                <p>Settings</p>
              </li>
              <Link href="/dashboard/route/subscription/plans" className='flex items-center gap-2 p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                <AppWindow className='h-4 w-4' />
                <p>Subscription</p>
              </Link>
              <li className='flex items-center gap-2 p-1 cursor-pointer hover:bg-slate-100 duration-200'>
                <LogOut className='h-4 w-4' />
                <p>Logout</p>
              </li>
            </ul>
          )}
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
