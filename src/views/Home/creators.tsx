import CreatorCard from '@/components/cards/creatorsCard';
import React from 'react';

const CreatorsView = () => {
  return (
    <div className='p-4'>
      <p className='text-sm text-slate-400'>21 templates</p>
      <div className='flex sm:flex-row flex-col items-center gap-2 flex-wrap mt-2'>
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
      </div>
    </div>
  );
};

export default CreatorsView;
