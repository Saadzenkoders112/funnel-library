/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  AppWindow,
  Bookmark,
  CircleDollarSign,
  LogOut,
  Settings2,
  User,
} from 'lucide-react';
import React, { useState } from 'react';
import { routes } from '../../../data/route';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [profileOptions, setProfileOptions] = useState<boolean>(false);

  const router = useRouter()
  return (
    <div className='mt-5 text-lg'>
      <ul className='p-1'>
        <li
          onClick={() => setProfileOptions(!profileOptions)}
          className='menu_bar_li'
        >
          <p>Adam</p>
          <User className='h-4 w-4' />
        </li>
        {profileOptions && (
          <ul className='text-sm ml-4'>
            <li className='flex items-center gap-2 p-1 cursor-pointer hover:bg-slate-100 duration-200'>
              <Bookmark className='h-3 w-3' />
              <p>Collections</p>
            </li>
            <li className='flex items-center gap-2 p-1 cursor-pointer hover:bg-slate-100 duration-200'>
              <Settings2 className='w-3 h-3' />
              <p>Settings</p>
            </li>
            <li className='flex items-center gap-2 p-1 cursor-pointer hover:bg-slate-100 duration-200'>
              <AppWindow className='h-3 w-3' />
              <p>Subscription</p>
            </li>
          </ul>
        )}
        <li className='menu_bar_li'>
          <p>Pricing</p>
          <CircleDollarSign className='h-4 w-4' />
        </li>
      </ul>
      <hr />
      <ul className='p-1'>
        {routes?.map((route, index) => (
          <li
          onClick={() => router.push(`/dashboard/route/${route.route}`)}
            className='menu_bar_li'
            key={index}
          >
            {route.name}
          </li>
        ))}
        <li className='menu_bar_li text-red-500'>
          <p>Logout</p>
          <LogOut className='h-4 w-4' />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
