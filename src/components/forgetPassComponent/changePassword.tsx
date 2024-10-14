import { Eye } from 'lucide-react';
import React from 'react';

const ChangePass = () => {
  return (
    <div>
      <p className='text-xl font-bold text-center'>Change password</p>
      <div className='flex flex-col gap-1 p-1'>
        <label
          className='font-semibold'
          htmlFor='password'
        >
          Old password
        </label>
        <div className='flex gap-2 items-center border border-gray-300 rounded-lg p-3'>
          <input
            className='text-slate-500 focus:outline-none w-full'
            type='text'
            placeholder='Password'
          />
          <Eye className='h-4 w-4 text-gray-400 cursor-pointer' />
        </div>
      </div>
      <div className='flex flex-col gap-1 p-1'>
        <label
          className='font-semibold'
          htmlFor='password'
        >
          New password
        </label>
        <div className='flex gap-2 items-center border border-gray-300 rounded-lg p-3'>
          <input
            className='text-slate-500 focus:outline-none w-full'
            type='text'
            placeholder='Password'
          />
          <Eye className='h-4 w-4 text-gray-400 cursor-pointer' />
        </div>
      </div>
      <div className='flex flex-col gap-1 p-1'>
        <label
          className='font-semibold'
          htmlFor='password'
        >
          Re-enter password
        </label>
        <div className='flex gap-2 items-center border border-gray-300 rounded-lg p-3'>
          <input
            className='text-slate-500 focus:outline-none w-full'
            type='text'
            placeholder='Password'
          />
          <Eye className='h-4 w-4 text-gray-400 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default ChangePass;

{
  /* <div className='flex flex-col gap-1 p-1'>
<label
  className='font-semibold'
  htmlFor='password'
>
  Enter password
</label>
<div className='flex gap-2 items-center border border-gray-300 rounded-lg p-3'>
  <input
    className='text-slate-500 focus:outline-none w-full'
    type='text'
    placeholder='Password'
  />
  <Eye className='h-4 w-4 text-gray-400 cursor-pointer' />
</div>
</div> */
}
