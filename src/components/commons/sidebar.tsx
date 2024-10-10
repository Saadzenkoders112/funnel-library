import { CircleDollarSign, LogOut, User } from 'lucide-react';
import React from 'react';
import { routes } from '../../../data/route';

const Sidebar = () => {
  return (
    <div className='mt-5 text-lg'>
      <ul className='p-1'>
        <li className='menu_bar_li'>
          <p>Adam</p>
          <User className='h-4 w-4' />
        </li>
        <li className='menu_bar_li'>
          <p>Pricing</p>
          <CircleDollarSign className='h-4 w-4' />
        </li>
      </ul>
      <hr />
      <ul className='p-1'>
        {routes?.map((route, index) => (
          <li
            className='menu_bar_li'
            key={index}
          >
            {route}
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
