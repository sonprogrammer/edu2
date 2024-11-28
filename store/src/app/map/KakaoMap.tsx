'use client';

import React, { useEffect, useRef } from 'react';

interface KakaoMapProps {
  onLoadComplete: () => void;
}

const KakaoMap: React.FC<KakaoMapProps> = ({ onLoadComplete }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;
      script.async = true;
  
      script.onload = () => {
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            navigator.geolocation.getCurrentPosition((position) => {
              const { latitude, longitude } = position.coords
              console.log('geolocation', latitude, longitude)
              
              const mapContainer = mapRef.current;
              if (!mapContainer) return;
              
              const mapOption = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 3,
              };
              
              const map = new window.kakao.maps.Map(mapContainer, mapOption);

              const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

              const imageSrc = './click.png'
              const imageSize = new window.kakao.maps.Size(52, 52)
              const imageOptions = {
                offset: new window.kakao.maps.Point(32, 64)
              }

              const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOptions)
              

              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImage
              })
              marker.setMap(map)
              
            })

            onLoadComplete(); 
          });
        } else {
          console.error('Kakao Map SDK failed to load.');
        }
      };
  
      document.head.appendChild(script);
    }
  }, [onLoadComplete]);
  

  return (
    <div
      ref={mapRef}
      style={{
        width: '80%',
        height: '80%',
        borderRadius: '50px',
      }}
    ></div>
  );
};

export default KakaoMap;
