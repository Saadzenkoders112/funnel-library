'use client'

import AdTemplateCard from '@/components/cards/adTemplateCard';
import EmailTemplateCard from '@/components/cards/emailTemplateCard';
import React from 'react';

const CreatorDetailsView = () => {
  return (
    <div className="flex-col gap-8">
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
  );
};

export default CreatorDetailsView;
