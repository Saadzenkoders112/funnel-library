import { Check } from 'lucide-react';
import React from 'react';

const PlansCard1 = () => {
  return (
    <div className='rounded-xl p-4 h-[450px] gap-6 w-[300px] shadow-2xl border border-t-8 border-t-[#F5F5F5] border-slate-200 flex flex-col'>
      <div>
        <p className='font-bold text-xl'>Startup</p>
        <p className='text-gray-500 text-sm'>
          Latest Template designs uploaded weekly for free.
        </p>
      </div>
      <hr />
      <div>
        <p className='text-4xl font-bold'>$0 / mo</p>
        <p className='text-gray-500 text-sm'>For individuals</p>
      </div>
      <button className='rounded-full p-4 text-xl font-bold text-gray-500 bg-[#F0F0F0]'>
        Current Plan
      </button>
      <ul className='text-gray-600 text-sm'>
        <li className='flex items-center gap-2'>
          <Check size={10} />
          <p>Browse latest screens & apps</p>
        </li>
        <li className='flex items-center gap-2'>
          <Check size={10} />
          <p>Limited filter & search results</p>
        </li>
        <li className='flex items-center gap-2'>
          <Check size={10} />
          <p>Up to 3 collections</p>
        </li>
      </ul>
    </div>
  );
};

export default PlansCard1;
