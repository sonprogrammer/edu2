'use client';

import React, { useEffect, useState } from 'react';
import KakaoMap from './KakaoMap';

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '16px',
        zIndex: 10,
        backgroundColor: 'white'
      }}
    >
      <KakaoMap onLoadComplete={() => setIsLoading(false)} />
  {isLoading && (
    <img
      src="./loading.gif"
      alt="Loading..."
      style={{
        position: 'absolute',
        zIndex: 100,
      }}
    />
  )}
    </div>
  );
};

export default Page;
