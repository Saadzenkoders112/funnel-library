'use client';

import React, { useState } from 'react';
import { collections } from '../../../data/collections';
import { Plus } from 'lucide-react';
import SaveCollectionForm from '../forms/saveCollectionForm';

const SaveCollection = () => {
  const [newCollection, setNewCollection] = useState<boolean>(false);
  
  return (
    <div className='absolute top-7 right-1 bg-white rounded-lg w-[350px] h-[400px] shadow-lg p-4'>
      {newCollection ? (
        <SaveCollectionForm />
      ) : (
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <p className='font-bold text-lg'>Add to my collection</p>
            <button onClick={() => setNewCollection(!newCollection)} className='text-xs flex items-center justify-center rounded-lg shadow-md p-1'>
              <Plus size={15} />
              <p>New collection</p>
            </button>
          </div>
          <input
            type='text'
            placeholder='Search...'
            className='text-gray-500 text-xs p-1 rounded-lg w-full focus:outline-none border border-slate-200'
          />
          <ul>
            {collections.map((collection, index) => (
              <li
                className='flex justify-between items-center hover:bg-slate-100 duration-200 text-xs p-1 group'
                key={index}
              >
                <p>{collection}</p>
                <p className='hidden group-hover:block bg-white rounded-lg p-1 cursor-pointer'>
                  Save
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SaveCollection;
