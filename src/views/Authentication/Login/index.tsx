'use client';

import { Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// React Imports
import { FC } from 'react';
// Custom Component Imports

interface ISignInViewProps {}

const SignInView: FC<ISignInViewProps> = () => {
  return (
    <div className='h-full md:w-1/2 w-full flex flex-col justify-center items-center'>
      <form className='md:w-3/5 w-4/5 h-auto border border-slate-300 rounded-lg shadow-2xl flex flex-col gap-3 p-4'>
        <Image
          src='/assets/images/login_icon.jpg'
          alt='login_icon'
          height={60}
          width={60}
        />
        <p className='font-bold text-xl'>
          Login to your funnel library account
        </p>
        <div className='flex flex-col gap-1 p-1'>
          <label
            className='font-semibold'
            htmlFor='email'
          >
            Email address
          </label>
          <input
            className='text-slate-500 p-3 rounded-lg border border-gray-300 focus:outline-none'
            type='text'
            placeholder='Your email'
          />
        </div>
        <div className='flex flex-col gap-1 p-1'>
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
        </div>
        <p className='text-sm text-center'>
          By signin in, you are creating a Digital marketing account and agree
          to Digital marketing <span className='text-blue-500'>Terms</span> and{' '}
          <span className='text-blue-500'>Privacy Policy</span>
        </p>
        <button className='text-center bg-blue-800 text-white rounded-lg p-3'>
          Sign in
        </button>
        <p className='text-sm text-center'>
          Dont have an account?{' '}
          <Link
            href='/auth/register'
            className='text-blue-500 cursor-pointer'
          >
            Sign up
          </Link>
        </p>
        <p className='text-center text-sm text-blue-500'>Forgot password?</p>
      </form>
    </div>
  );
};

export default SignInView;
