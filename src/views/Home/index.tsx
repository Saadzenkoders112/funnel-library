import Image from 'next/image';
import React from 'react';

const HomeView = () => {
  return (
    <div>
      <Image
        src='/assets/images/dashboard_img.jpg'
        alt='dashboard_img'
        objectFit='contain'
        layout='fill'
      />
    </div>
  );
};

export default HomeView;
