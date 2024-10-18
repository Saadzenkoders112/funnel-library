import FunnelCard from '@/components/cards/funnelCard';
import { Globe, UserRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ProfileView = () => {
  return (
    <div>
      <div className='w-full h-[300px] relative'>
        <Image
          src='/assets/images/profile_bg.png'
          alt='profile'
          height={1600}
          width={900}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className='absolute flex flex-col items-center w-full -bottom-[220px]'>
          <div className='lg:2/5 w-4/5 flex flex-col gap-4 items-center'>
            <div className='h-[70px] w-[70px] text-[#E4E4E4] border bg-white p-1 rounded-lg'>
              <UserRound className='w-full h-full' />
            </div>
            <p className='font-bold text-2xl'>My name</p>
            <div className='text-gray-700 text-sm flex items-center gap-2'>
              <Globe size={15} />
              <p>mywebsite.com</p>
            </div>
            <p className='text-gray-700 text-xs text-center'>
              Expert in creating ads, email templates, and landing pages,
              leveraging expertise to drive impactful digital marketing
              strategies.
            </p>
            <div className='flex items-center gap-2 font-bold'>
              <p className='p-2 text-xs rounded-lg border shadow-md text-center'>
                2 Funnels
              </p>
              <p className='p-2 text-xs rounded-lg border shadow-md text-center'>
                4 Emails
              </p>
              <p className='p-2 text-xs rounded-lg border shadow-md text-center'>
                12 Ads
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-full'>
        <div className='p-4 w-11/12 flex flex-col gap-4 mt-60'>
          <p className='text-3xl font-bold'>Funnel</p>
          <div className='flex flex-wrap gap-4 flex-col sm:flex-row sm:justify-start items-center'>
            <FunnelCard />
            <FunnelCard />
            <FunnelCard />
            <FunnelCard />
            <FunnelCard />
            <FunnelCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
