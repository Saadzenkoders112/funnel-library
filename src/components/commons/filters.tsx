'use client';

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { filters } from '../../../data/filters';
import { Filter } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { collectionFilter } from '../../../data/collectionFilters';
import Image from 'next/image';

const Filters = () => {
  const [filterIndex, setFilterIndex] = useState<number>(0);
  const [filter, setFilter] = useState<boolean>(false);
  const pathName = usePathname().split('/');
  return (
    <div className={`flex relative sm:justify-start justify-end gap-8 items-start text-sm font-semibold ${pathName.includes('plans') ? "hidden": ""}`}>
      <div
        onClick={() => setFilter(!filter)}
        className='flex cursor-pointer items-center gap-2 bg-slate-100 rounded-xl p-2 relative'
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

      {/* FILTER DIV */}
      {filters && filter && (
        <div className='absolute sm:hidden sm:w-80 w-auto top-8 p-4 rounded-lg shadow-2xl z-10 grid grid-cols-2 gap-2 bg-white'>
          {pathName.includes('collections') ? (
            <div className='flex flex-col gap-2'>
              {collectionFilter.map((filter, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 hover:bg-slate-100 duration-200 p-1 rounded-lg cursor-pointer'
                >
                  <Image
                    src={`/assets/images/filter_${index + 1}.jpg`}
                    alt='filter'
                    height={30}
                    width={30}
                  />
                  <p>{filter}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className='flex flex-col gap-2 text-xs'>
            {filters?.map((filter, index) => (
              <p
                className='hover:bg-slate-100 duration-200 p-1 rounded-lg cursor-pointer'
                key={index}
              >
                {filter}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
