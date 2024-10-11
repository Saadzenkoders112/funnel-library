import { Bookmark } from 'lucide-react'
import React from 'react'

const FunnelTitleCard = () => {
  return (
    <div className='w-[321px] h-[282px] relative group'>
    <p className='text-xl text-center bg-[#F5F5F5] rounded-lg h-full'>Hello </p>
    <div className='absolute top-0 left-0  w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-80 group-hover:cursor-pointer group-hover:bg-[#6D6D6D] duration-200'>
      <div className='flex gap-2 text-sm'>
        <p className=' bg-white rounded-lg p-2 '>View</p>
        <div className='flex items-center gap-2 bg-white rounded-lg p-2'>
          <Bookmark className='h-3 w-3' />
          <p>Bookmark</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FunnelTitleCard