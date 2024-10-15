import AdTemplateCard from '@/components/cards/adTemplateCard';
import EmailTemplateCard from '@/components/cards/emailTemplateCard';
import FunnelTemplateCard from '@/components/cards/funnelTemplateCard';
import FunnelTitleCard from '@/components/cards/funnelTitleCard';
import UserDetailsCard from '@/components/cards/userDetails';
import PaginationStepper from '@/components/commons/paginationStepper';
import { MoveLeft } from 'lucide-react';
import React from 'react';

const UserInfoView = () => {
  return (
    <div className='h-full'>
      {/* USER DETAILS DIV */}
      <div className='flex flex-col gap-2 items-center mt-6 h-[350px]'>
        <div className='xl:w-2/5 w-4/5 flex flex-col  gap-2 items-center'>
          <div className='flex items-center gap-2 font-bold text-xs'>
            <MoveLeft className='h-4 w-4' />
            <span>JOURNEY BUILDER TEMPLATES</span>
          </div>
          <p className='font-semibold text-4xl'>
            Generate reviews after User Purchase
          </p>
          <p className='text-slate-500 text-sm text-center'>
            We have the collection of popular marketing funnels that you can
            easily swipe to get the best practices for your own funnels.
          </p>
        </div>
        <UserDetailsCard />
      </div>

      {/* TEMPLATES DIV */}
      <div className='flex justify-center'>
        <div className=' w-11/12 p-4 flex flex-col gap-6'>
          {/* FUNNEL TEMPLATES */}
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>Funnel</p>
            <PaginationStepper />
          </div>
          <div className='flex gap-2 flex-wrap'>
            <FunnelTemplateCard />
            <FunnelTemplateCard />
          </div>
          <div>
            <p className='text-xl font-semibold'>Title</p>
            <p className='text-sm text-gray-500'>
              Description expert in creating ads, email templates, and landing
              pages, leveraging expertise to drive impactful digital marketing
              strategies
            </p>
          </div>
          <div className='flex gap-2 flex-wrap'>
            <FunnelTitleCard />
            <FunnelTitleCard />
            <FunnelTitleCard />
          </div>
          {/* EMAIL TEMPLATES */}
          <div className='flex flex-col gap-2'>
            <p className='text-2xl font-bold'>Emails templates</p>
            <div className='flex gap-2 flex-wrap'>
              <EmailTemplateCard />
              <EmailTemplateCard />
              <EmailTemplateCard />
            </div>
          </div>
          {/* AD TEMPLATES */}
          <div className='flex flex-col gap-2'>
            <p className='text-2xl font-bold'>Ad templates</p>
            <div className='flex gap-2 flex-wrap'>
              <AdTemplateCard />
              <AdTemplateCard />
              <AdTemplateCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoView;
