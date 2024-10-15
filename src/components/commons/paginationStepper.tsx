import React from 'react';

const PaginationStepper = () => {
  return (
    <div className='flex gap-4 items-center font-bold'>
      <p>Step 1 out of 2</p>
      <button className='rounded-xl p-2 text-center text-sm border border-black'>
        Prev
      </button>
      <button className='rounded-xl p-2 text-center text-sm border border-black'>
        Next
      </button>
    </div>
  );
};

export default PaginationStepper;
