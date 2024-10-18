import { Check } from 'lucide-react';
import React from 'react';

const PlansCard2 = () => {
  return (
      <div className='p-4 h-[450px] gap-4 w-[300px] rounded-xl shadow-2xl border border-t-8 border-t-[#4734C0] border-slate-200 flex flex-col'>
        <div>
          <p className='font-bold text-xl'>Standard</p>
          <p className='text-gray-500 text-sm'>
            Search & filter design references across apps, screens and flows.
          </p>
        </div>
        <hr />
        <div>
          <p className='text-4xl font-bold'>$8</p>
          <p className='text-gray-500 text-sm'>per month</p>
          <p>billed 96$ yearly</p>
        </div>
        <button className='rounded-full p-4 text-xl font-bold bg-black text-white'>
          Upgrade
        </button>
        <ul className='text-gray-600 text-sm'>
          <li className='flex items-center gap-2'>
            <Check size={10} />
            <p>Unlimited filter & search results</p>
          </li>
          <li className='flex items-center gap-2'>
            <Check size={10} />
            <p>Unlimited collections</p>
          </li>
          <li className='flex items-center gap-2'>
            <Check size={10} />
            <p>Version travel</p>
          </li>
          <li className='flex items-center gap-2'>
            <Check size={10} />
            <p>Access to flows</p>
          </li>
          <li className='flex items-center gap-2'>
            <Check size={10} />
            <p>Batch download</p>
          </li>
        </ul>
      </div>
  );
};

export default PlansCard2;
