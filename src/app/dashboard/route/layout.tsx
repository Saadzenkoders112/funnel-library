'use client';

/* eslint-disable jsx-a11y/no-static-element-interactions */
import '@/styles/globals.css';
import { Providers } from '@/providers';
import { Book, MoveLeft } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { routes } from '../../../../data/route';
import { usePathname, useRouter } from 'next/navigation';
import SearchBar from '@/components/searchBar';
import Filters from '@/components/commons/filters';
import UserDetailsCard from '@/components/cards/userDetails';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [routeIndex, setRouteIndex] = useState<number>(0);

  const router = useRouter();

  const pathName = usePathname().split('/');
  return (
    <div>
      <div className='w-full h-60 relative'>
        <Image
          className={`${pathName.includes('creatorDetails') || pathName.includes('plans') ? 'hidden' : ''}`}
          src='/assets/images/dashboard_img.jpg'
          alt='dashboard_img'
          width={1600}
          height={900}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* DIV TEXT */}
        <div
          className={`absolute top-0 left-0 h-full flex justify-center w-full mt-6 ${pathName.includes('creatorDetails') || pathName.includes('plans') ? 'hidden' : ''}`}
        >
          <div className='flex flex-col gap-4 items-center w-[550px]'>
            <div className='flex items-center gap-2 text-white'>
              <Book className='h-4 w-4' />
              <p>Increase your Funnel Conversion</p>
            </div>
            <p className='text-3xl font-semibold text-white '>
              {pathName.includes('subscription')
                ? 'The High Converting Funnels'
                : ''}
            </p>
            <p className='text-gray-400 text-center'>
              We have the collection of popular marketing funnels that you can
              easily swipe to get the best practices for your own funnels.
            </p>
          </div>
        </div>

        <div
          className={`h-60 flex-col gap-2 ${pathName.includes('creatorDetails') ? 'flex' : 'hidden'}`}
        >
          <div className='flex'>
            <div className='flex items-center gap-2 font-bold text-xs w-full justify-center'>
              <MoveLeft className='h-4 w-4' />
              <span>Creators</span>
            </div>
            <button className='p-1 rounded-xl border-2 border-black text-semibold text-center'>
              Follow
            </button>
          </div>
          <div className='flex justify-center'>
            <UserDetailsCard />
          </div>
        </div>

        {/* SEARCH DIV */}
        <SearchBar />

        <div className='flex justify-center'>
          <div className='w-11/12 p-8 flex flex-col gap-4'>
            <div
              className={` items-center gap-4 hidden ${pathName.includes('creatorDetails') || pathName.includes('plans') ? 'hidden' : 'sm:flex'}`}
            >
              {routes?.map((route, index) => (
                <button
                  onClick={() => {
                    setRouteIndex(index);
                    router.push(`/dashboard/route/${route.route}`);
                  }}
                  key={index}
                  className={`text-2xl font-bold cursor-pointer ${index === routeIndex ? 'text-gray-700' : 'text-gray-400'}`}
                >
                  {route.name}
                </button>
              ))}
            </div>

            {/* FILTER DIV */}
            <Filters />

            <Providers>{children}</Providers>
          </div>
        </div>
      </div>
    </div>
  );
}
