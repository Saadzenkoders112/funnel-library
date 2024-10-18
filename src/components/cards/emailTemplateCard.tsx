'use client';

import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import SaveCollection from './saveCollection';

const EmailTemplateCard = () => {
  const [saveCollection, setSaveCollection] = useState<boolean>(false);
  const pathName = usePathname().split('/');
  return (
    <div className='flex flex-col gap-2 items-start'>
      <div className='w-[321px] h-[282px] bg-[#F5F5F5] rounded-lg relative'>
        <Image
          src='/assets/images/email_img_1.jpg'
          alt='email_img'
          width={321}
          height={282}
          style={{ objectFit: 'contain' }}
        />
        {pathName.includes('creatorDetails') ? (
          <div className='absolute right-6 font-semibold top-6 flex items-center gap-2 p-1 rounded-lg text-xs bg-white shadow-lg'>
            <Bookmark className='h-3 w-3 text-blue-500' />
            <button onClick={() => setSaveCollection(!saveCollection)}>Bookmark</button>
            {saveCollection && (
              <SaveCollection />
            )}
          </div>
        ) : null}
      </div>
      <p className='text-2xl font-semibold'>Template name</p>
      <button className='p-1 text-sm border rounded-lg shadow-lg text-center'>
        Use template
      </button>
    </div>
  );
};

export default EmailTemplateCard;
