import Image from 'next/image';
import React from 'react';

const BillingForm = () => {
  return (
    <div className='flex flex-col gap-2'>
        <button className='rounded-lg bg-[#F5F5F5] p-2 w-full flex justify-center'>
            <Image src='/assets/images/paypal.png' alt='paypal' height={70} width={70}/>
        </button>
      <div className='flex flex-col gap-6 p-8 border border-slate-200 rounded-xl shadow-2xl w-[400px]'>
        <p className='font-bold text-lg'>Pay with cards</p>
        <div className='flex flex-col gap-1'>
          <label htmlFor='card_number'>Card number</label>
          <div className='flex items-center justify-between  p-2  rounded-lg border border-slate-200 '>
            <input
              type='text'
              placeholder='xxxx xxxx xxxx xxxx'
              className='focus:outline-none rounded-lg border-slate-200 w-full'
            />
            <Image
              src='/assets/images/visa.png'
              height={30}
              width={30}
              alt='visa_img'
            />
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name'>Name on card</label>
          <div className='flex items-center justify-between  p-2  rounded-lg border border-slate-200 '>
            <input
              type='text'
              placeholder='Cardholder name'
              className='focus:outline-none rounded-lg border-slate-200 w-full'
            />
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Expiration date</label>
            <div className='flex items-center justify-between  p-2  rounded-lg border border-slate-200 '>
              <input
                type='date'
                placeholder='MM / YY'
                className='focus:outline-none rounded-lg border-slate-200 w-full'
              />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Security code</label>
            <div className='flex items-center justify-between  p-2  rounded-lg border border-slate-200 '>
              <input
                type='text'
                placeholder='CVV'
                className='focus:outline-none rounded-lg border-slate-200 w-full'
              />
            </div>
          </div>
        </div>
        <button className='p-2 rounded-lg text-white bg-[#4E37DB]'>
          Save and Pay
        </button>
        <p className='text-center'>
          This order process is conducted by our online reseller & Merchant of
          Record, Digital Marketing Library, who also handles order-related
          inquiries and returns.
        </p>
        <p className='text-[#4E37DB] text-center'>Terms of conditions</p>
      </div>
    </div>
  );
};

export default BillingForm;
