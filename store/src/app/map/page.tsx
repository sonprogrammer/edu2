'use client';

import React from 'react';
import KakaoMap from './KakaoMap';

const Page: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', 
        padding: '16px',
        zIndex: 10,
      }}
    >
      <KakaoMap />
    </div>
  );
};

export default Page;
