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
        height: '100vh', // 화면 전체 높이
        padding: '16px',
      }}
    >
      <KakaoMap />
    </div>
  );
};

export default Page;
