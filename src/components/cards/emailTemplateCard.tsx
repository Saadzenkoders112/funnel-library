import Image from 'next/image';
import React from 'react';

const EmailTemplateCard = () => {
  return (
    <div className='flex flex-col gap-2 items-start'>
      <div className='w-[321px] h-[282px] bg-[#F5F5F5] rounded-lg'>
        <Image
          src='/assets/images/email_img_1.jpg'
          alt='email_img'
          width={321}
          height={282}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className='text-2xl font-semibold'>Template name</p>
      <button className='p-1 text-sm border rounded-lg shadow-lg text-center'>
        Use template
      </button>
    </div>
  );
};

export default EmailTemplateCard;
