'use client';

import PlansCard1 from '@/components/cards/Subscription Cards/plansCard1';
import PlansCard2 from '@/components/cards/Subscription Cards/plansCard2';
import BillingForm from '@/components/forms/billingForm';
import React, { useState } from 'react';

const PlansView = () => {
  const [active, setActive] = useState<string>('plans');
  return (
    <div className='w-full h-full flex flex-col items-center gap-4'>
      <div className='flex flex-col gap-4 text-center'>
      <p className='font-bold text-xs'>SUBSCRIPTION PLAN</p>
      <p className='text-4xl font-bold'>Start today. Boost up your services.</p>
      <p className='text-gray-500 text-xs'>
        {' '}
        Join 3,000+ developers & designers using Devias to power modern web
        projects
      </p>
      </div>
      <div className='flex gap-4 text-gray-400 text-2xl font-bold'>
        <button
          onClick={() => setActive('plans')}
          className={`${active === 'plans' ? 'text-[#4C36D3]' : ''}`}
        >
          Plans
        </button>
        <button
          onClick={() => setActive('billing')}
          className={`${active === 'billing' ? 'text-[#4C36D3]' : ''}`}
        >
          Billing
        </button>
      </div>
      {active === "plans" ? (      <div className='flex gap-4 md:flex-row flex-col items-center flex-wrap'>
        <PlansCard1 />
        <PlansCard2 />
      </div>) :(<BillingForm />)}
    </div>
  );
};

export default PlansView;
