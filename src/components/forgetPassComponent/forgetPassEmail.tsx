import React from 'react';

const ForgetPassEmail = () => {
  return (
    <div>
      <p className='text-xl font-bold text-center'>Forget password</p>
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
    </div>
  );
};

export default ForgetPassEmail;
