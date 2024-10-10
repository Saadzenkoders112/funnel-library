'use client';

import { Book, ChevronLeft, Filter, Search } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { routes } from '../../../data/route';
import { filters } from '../../../data/filters';
import FunnelCard from '@/components/cards/funnelCard';

const HomeView = () => {
  const [routeIndex, setRouteIndex] = useState<number>(0);
  const [filterIndex, setFilterIndex] = useState<number>(0);
  const [filter, setFilter] = useState<boolean>(false);

  return (
    <div>
      <div className='w-full h-60 relative'>
        <Image
          src='/assets/images/dashboard_img.jpg'
          alt='dashboard_img'
          width={1600}
          height={900}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* DIV TEXT */}
        <div className='absolute top-0 left-0 h-full flex justify-center w-full mt-6'>
          <div className='flex flex-col gap-4 items-center w-[550px]'>
            <div className='flex items-center gap-2 text-white'>
              <Book className='h-4 w-4' />
              <p>Increase your Funnel Conversion</p>
            </div>
            <p className='text-3xl font-semibold text-white '>
              The High Converting Funnels
            </p>
            <p className='text-gray-400 text-center'>
              We have the collection of popular marketing funnels that you can
              easily swipe to get the best practices for your own funnels.
            </p>
          </div>
        </div>

        {/* SEARCH DIV */}
        <div className='absolute bottom-4 w-full flex justify-center'>
          <div className='w-4/5 border bg-white text-black rounded-lg flex items-center gap-4 p-2'>
            <div className='flex gap-2 items-center w-full'>
              <Search className='h-4 w-4 cursor-pointer' />
              <input
                type='text'
                placeholder='Search...'
                className='focus:outline-none w-full'
              />
            </div>
            <div className='flex gap-2 items-center'>
              <p>Popular</p>
              <ChevronLeft className='h-4 w-4 -rotate-90 cursor-pointer' />
            </div>
          </div>
        </div>

        {/* MAIN BODY CONTENT DIV */}
        <div className='flex justify-center'>
          <div className='w-11/12 p-8 flex flex-col gap-4'>
            <div className='sm:flex items-center gap-4 hidden'>
              {routes?.map((route, index) => (
                <button
                  onClick={() => setRouteIndex(index)}
                  key={index}
                  className={`text-2xl font-bold cursor-pointer ${index === routeIndex ? 'text-gray-700' : 'text-gray-400'}`}
                >
                  {route}
                </button>
              ))}
            </div>
            <div className='flex relative sm:justify-start justify-end gap-8 items-start text-sm font-semibold'>
              <div
                onClick={() => setFilter(!filter)}
                className='flex cursor-pointer items-center gap-2 bg-slate-100 rounded-xl p-2'
              >
                <Filter className='h-3 w-3' />
                <p>Filters</p>
              </div>
              <div className='sm:flex flex-wrap gap-4 hidden'>
                {filters?.map((filter, index) => (
                  <button
                    onClick={() => setFilterIndex(index)}
                    key={index}
                    className={`${filterIndex === index ? 'bg-blue-800 text-white' : ''} p-2 rounded-xl`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              {filter && (
                <div className='absolute sm:hidden top-12 -right-6 shadow-2xl flex flex-col items-start w-[120px] p-1 bg-white z-10'>
                  {filters?.map((filter, index) => (
                    <button
                      className='p-1 hover:bg-slate-100 duration-200 cursor-pointer w-full text-start'
                      key={index}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className='text-sm text-slate-400'>21 templates</p>
            <div className='flex sm:flex-row flex-col items-center sm:gap-3 gap-1 flex-wrap'>
              <FunnelCard />
              <FunnelCard />
              <FunnelCard />
              <FunnelCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
