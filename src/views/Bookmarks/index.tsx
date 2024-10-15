'use client';

import FunnelCard from '@/components/cards/funnelCard';
import { MoveLeft, Pencil } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const BookmarksView = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center p-4 gap-4'>
      <Link
        href='/dashboard/route'
        className='flex items-center gap-2'
      >
        <MoveLeft className='h-4 w-4' />
        <p className='font-semibold text-sm'>Back to Home</p>
      </Link>
      <div className='p-4 flex flex-col gap-2 sm:items-start items-center'>
        <div className='flex items-center gap-2'>
          <p className='text-3xl font-bold'>Trending</p>
          <Pencil
            onClick={() => router.push('bookmarks/collections')}
            className='h-4 w-4 cursor-pointer'
          />
        </div>
        <p className='text-gray-500 text-xs sm:w-full w-3/4'>
          Join 3,000+ developers & designers using Devias to power modern web
          projects
        </p>
        <div className='flex gap-4 flex-wrap sm:justify-start justify-center'>
          <FunnelCard />
          <FunnelCard />
          <FunnelCard />
          <FunnelCard />
        </div>
      </div>
      <div className='p-4 flex flex-col gap-2 sm:items-start items-center'>
        <div className='flex items-center gap-2'>
          <p className='text-3xl font-bold'>Recipe</p>
          <Pencil
            onClick={() => router.push('bookmarks/collections')}
            className='h-4 w-4 cursor-pointer'
          />
        </div>
        <p className='text-gray-500 text-xs  sm:w-full w-3/4'>
          Join 3,000+ developers & designers using Devias to power modern web
          projects
        </p>
        <div className='flex gap-4 flex-wrap sm:justify-start justify-center'>
          <FunnelCard />
          <FunnelCard />
          <FunnelCard />
          <FunnelCard />
        </div>
      </div>
      <div className='p-4 flex flex-col gap-2 sm:items-start items-center'>
        <div className='flex items-center gap-2'>
          <p className='text-3xl font-bold'>Categories</p>
          <Pencil
            onClick={() => router.push('bookmarks/collections')}
            className='h-4 w-4 cursor-pointer'
          />
        </div>
        <p className='text-gray-500 text-xs  sm:w-full w-3/4'>
          Join 3,000+ developers & designers using Devias to power modern web
          projects
        </p>
        <div className='flex gap-4 flex-wrap sm:justify-start justify-center'>
          <FunnelCard />
          <FunnelCard />
          <FunnelCard />
          <FunnelCard />
        </div>
      </div>
    </div>
  );
};

export default BookmarksView;
