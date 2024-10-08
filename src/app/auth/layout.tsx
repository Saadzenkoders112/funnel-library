'use client';

import Image from 'next/image';
import React from 'react';
// import SignInView from '@/views/Authentication/Login';
// import RegistrationView from '@/views/Authentication/Registeration';

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex md:justify-start w-full h-screen  justify-center'>
      <div className='w-1/2 h-full md:block relative hidden'>
        <Image
          src='/assets/images/login_img.jpg'
          alt='login_img'
          objectFit='cover'
          layout='fill'
        />
      </div>
      {children}
    </div>
  );
};

export default Auth;
