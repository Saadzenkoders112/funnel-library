'use client';

import FunnelCard from '@/components/cards/funnelCard';
import Filters from '@/components/commons/filters';
import SearchBar from '@/components/searchBar';
import { MoveLeft, Pencil, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const MyCollectionView = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [collectionVal, setCollectionVal] = useState<string>('My Collections');
  const [deleteDiv, setDeleteDiv] = useState<boolean>(false);
  return (
    <div className='flex flex-col items-center'>
      <div className='flex relative flex-col gap-4 items-center mt-10 w-full h-[200px]'>
        <Link
          href='/dashboard/bookmarks'
          className='flex items-center gap-2'
        >
          <MoveLeft className='h-4 w-4' />
          <p className='font-semibold text-sm'>Templates</p>
        </Link>
        <div className='flex items-center gap-2'>
          {edit ? (
            <div className='flex justify-center'>
              <input
                onChange={e => setCollectionVal(e.target.value)}
                value={collectionVal}
                className='focus:outline-none text-3xl font-bold'
                type='text'
              />
            </div>
          ) : (
            <p className='text-3xl font-bold'>{collectionVal}</p>
          )}
          {edit ? null : (
            <Pencil
              onClick={() => setEdit(!edit)}
              className='w-5 h-5 cursor-pointer'
            />
          )}
          {edit && (
            <div className='flex items-center gap-2 absolute right-20'>
              <button
                onClick={() => setEdit(!edit)}
                className='text-sm text-center border-2 border-black font-semibold rounded-2xl w-16 p-2'
              >
                Save
              </button>
              <Trash
                onClick={() => setDeleteDiv(!deleteDiv)}
                className='h-4 w-4 text-gray-500 relative cursor-pointer'
              />
              {deleteDiv && (
                <div className='w-[350px] rounded-lg z-10 bg-white absolute top-10 right-2 p-8 flex flex-col items-center gap-3 shadow-2xl'>
                  <Image
                  
                    src='/assets/images/trash.jpg'
                    alt='trash'
                    height={100}
                    width={100}
                  />
                  <p className='text-xl font-bold'>Delete collection</p>
                  <p className='text-center'>Are you sure you want to delete this collection?</p>
                  <button className='text-center w-full rounded-lg bg-blue-800 p-1 text-white'>
                    Delete
                  </button>
                  <button onClick={() => setDeleteDiv(!deleteDiv)} className='text-center w-full rounded-lg border'>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <p className='text-sm text-gray-500 text-center w-4/5'>
          Join 3,000+ developers & designers using Devias to power modern web
          projects
        </p>
        <SearchBar />
      </div>
      <div className='p-8 sm:mt-0 mt-6 flex flex-col gap-2'>
        <Filters />
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

export default MyCollectionView;
