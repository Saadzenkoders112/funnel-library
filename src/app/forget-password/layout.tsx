import Image from 'next/image';
import React from 'react';

const ForgetPassLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='w-[500px]'>
        <div className='flex justify-end'>
          <Image
            className='mix-blend-color-burn'
            src='/assets/images/forget_img_1.jpg'
            alt='forget_img_1'
            height={100}
            width={100}
          />
        </div>
        <div>
          <Image
            className='mix-blend-color-burn'
            src='/assets/images/forget_img_2.jpg'
            alt='forget_img_2'
            height={100}
            width={100}
          />
        </div>
      </div>
      <div className='absolute'>{children}</div>
    </div>
  );
};

export default ForgetPassLayout;
