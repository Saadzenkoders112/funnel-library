import FunnelCard from '@/components/cards/funnelCard';
import Image from 'next/image';
import React from 'react';

const SubscriptionView = () => {
  return (
    <div className='flex flex-col gap-4 items-center w-full'>
      <div className='flex flex-wrap gap-4'>
        <FunnelCard />
        <FunnelCard />
        <FunnelCard />
        <FunnelCard />
        <FunnelCard />
      </div>
      <div className='flex flex-col gap-4 items-center justify-center mt-40 w-3/5'>
        <p className='text-4xl font-bold text-center'>
          Take All the Stress, Uncertainty, & Hard Work Out of Funnel Creation
        </p>
        <p className='text-center text-gray-500'>
          We have painstakingly amassed a huge library of the best funnels ever
          created. Now, you can easily search our funnel database to get the
          most effective designs, offers, images, and more.
        </p>
        <p className='text-blue-800 font-semibold'>
          You will save time and money while giving your new funnels the
          absolute best chance for success.
        </p>
      </div>
      <div className='flex gap-4 flex-wrap'>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Image
              key={index}
              src={`/assets/images/subs_${index + 1}.png`}
              alt='subs_img'
              height={300}
              width={300}
            />
          ))}
      </div>
      <p className='text-center w-3/5 text-gray-500 text-xs'>
        With the Funnel Library, you get unlimited access to complete funnels
        including ads, images, copy, and more. You can run unlimited searches
        and create unlimited new projects. We are constantly expanding our
        funnel database, so you will always have access to the hottest funnels.
      </p>

      {/* SUBSCRIPTION PLAN VIEW */}
      <div className='bg-[#1E1362] rounded-tl-3xl rounded-tr-3xl w-full flex flex-col items-center gap-4 p-4 mt-20 pt-20'>
        <p className='text-4xl font-semibold text-white'>
          Choose your plan to get started
        </p>
        <div className='flex gap-4 '>
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <Image
                key={index}
                src={`/assets/images/plan_${index + 1}.png`}
                alt='plan'
                height={400}
                width={300}
              />
            ))}
        </div>
        <ul className='flex items-center gap-6 text-sm text-gray-300'>
            <li>&copy; Funnel library</li>
            <li>Terms of services</li>
            <li>Privacy Policy</li>
            <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionView;
