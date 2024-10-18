import React from 'react';

const SaveCollectionForm = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-lg font-bold'>New collection</p>
      <div className='flex flex-col gap-1'>
        <label
          className='text-sm'
          htmlFor='name'
        >
          Collection name
        </label>
        <input
          className='p-2 rounded-lg text-sm focus:outline-none border border-slate-200 text-gray-500'
          type='text'
          placeholder='Collection name...'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label
          className='text-sm'
          htmlFor='name'
        >
          Description
        </label>
        <textarea
          className='p-2 rounded-lg text-sm focus:outline-none border border-slate-200 text-gray-500 h-[100px]'
          placeholder='Description...'
        />
      </div>
      <button className='p-2 rounded-lg bg-blue-800 text-white'>Save collection</button>
      <button className='p-2 rounded-lg border-2'>Cancel</button>
    </div>
  );
};

export default SaveCollectionForm;
