import React from 'react'

const FunnelTemplateCard = () => {
  return (
    <div className='w-[321px] h-[361px] flex flex-col gap-2'>
        <div className='h-full w-full bg-[#F5F5F5] rounded-lg'></div>
        <p className='p-1 text-sm font-semibold rounded-lg bg-slate-100 text-center w-max'>funnel step</p>
        <p className='text-2xl font-bold'>Page name</p>
    </div>
  )
}

export default FunnelTemplateCard