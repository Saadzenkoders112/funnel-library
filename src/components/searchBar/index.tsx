import { ChevronLeft, Search } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
  return (
    <div className='absolute bottom-4 w-full flex justify-center'>
      <div className='w-4/5 border bg-white text-black rounded-lg shadow-2xl flex items-center gap-4 p-2'>
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
  );
};

export default SearchBar;
