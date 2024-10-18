import { Globe, UserRound } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CreatorCard = () => {
  return (
    <Link href="/dashboard/route/creators/creatorDetails" className='p-4 flex flex-col gap-2 items-center justify-center rounded-lg bg-[#F5F5F5] w-[300px] h-[220px]'>
      <div className='flex gap-2 w-full'>
        <div className='h-[60px] w-[60px] rounded-lg border border-slate-100 text-slate-300 bg-white'>
          <UserRound className='h-full w-full' />
        </div>
        <div>
          <p className='font-semibold text-lg'>Unais ahmed</p>
          <div className='flex items-center gap-1 text-sm bg-white'>
            <Globe className='h-3 w-3' />
            <p>unaisahmed.com</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-sm'>Expert in creating ads, email templates, and landing pages, leveraging expertise to drive impactful digital marketing strategies.</p>
        <p className='text-sm text=-center bg-white rounded-lg shadow-lg p-1 w-max font-semibold'>View funnels</p>
      </div>
    </Link>
  );
};

export default CreatorCard;
