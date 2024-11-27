'use client';

import React, { useEffect, useRef } from 'react';

const KakaoMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;
      script.async = true;
      
      script.onload = () => {
        console.log('window', window.kakao)
        if (window.kakao && window.kakao.maps) {
          // Kakao Maps API 로드 완료 후 지도 생성
          window.kakao.maps.load(() => {
            console.log('mapref.current', mapRef.current)
            const mapContainer = mapRef.current;
            if (!mapContainer) return;

            const mapOption = {
              center: new window.kakao.maps.LatLng(37.5665, 126.9780),
              level: 3,
            };

            const map = new window.kakao.maps.Map(mapContainer, mapOption);

            const markerPosition = new window.kakao.maps.LatLng(
              37.5665,
              126.9780
            );
            const marker = new window.kakao.maps.Marker({
              position: markerPosition,
            });
            marker.setMap(map);
          });
        } else {
          console.error('Kakao Map SDK failed to load.');
        }
      };

      document.head.appendChild(script);
    }
  }, []);
  return (
    <div
      ref={mapRef}
      style={{
        width: '80%',
        height: '80%',
        borderRadius: '50px'
      }}
    ></div>
  );
};

export default KakaoMap;
