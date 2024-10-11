import { Globe, UserRound } from 'lucide-react';
import React from 'react';

const UserDetailsCard = () => {
  return (
    <div className='flex gap-2 rounded-lg p-4 bg-[#F5F5F5] lg:w-2/4 w-4/5'>
      <div className='p-2 pt-4'>
        <div className='h-[70px] w-[70px] rounded-lg border border-slate-100 text-slate-300 bg-white'>
          <UserRound className='h-full w-full' />
        </div>
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <div className='flex items-center justify-between'>
          <p className='font-semibold text-lg'>Unais Ahmed</p>
          <button className='p-2 rounded-xl text-center border-2 border-black text-sm font-semibold'>Visit profile</button>
        </div>
        <div className='flex items-center gap-1 text-xs'>
          <Globe className='h-2 w-2' />
          <p>unaisahmed.com</p>
        </div>
        <p className='text-slate-500 text-xs'>Expert in creating ads, email templates, and landing pages, leveraging expertise to drive impactful digital marketing strategies.</p>
        <div className='flex items-center gap-4 text-xs text-semibold'>
            <p className='p-1 rounded-lg bg-white shadow-lg'>2 Funnels</p>
            <p className='p-1 rounded-lg bg-white shadow-lg'>4 Emails</p>
            <p className='p-1 rounded-lg bg-white shadow-lg'>12 Ads</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
