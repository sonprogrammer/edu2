'use client';

import React, { useEffect, useRef } from 'react';

const KakaoMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=c94b38fd92f27930e5ec6e68015aeecd&autoload=false`;
      script.async = true;

      script.onload = () => {
        if (window.kakao && window.kakao.maps) {
          const mapContainer = mapRef.current;
          if (!mapContainer) return;

          const mapOption = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780),
            level: 2,
          };

          const map = new window.kakao.maps.Map(mapContainer, mapOption);

          const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        } else {
          console.error("Kakao Map SDK failed to load.");
        }
      };

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '500px',
      }}
    ></div>
  );
};

export default KakaoMap;
