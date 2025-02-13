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

              const store1 = new window.kakao.maps.LatLng(36.7881311, 127.1137473); 
              const store2 = new window.kakao.maps.LatLng(36.80440059597869, 127.1119463550031); 
              
              
              
              const mapContainer = mapRef.current;
              if (!mapContainer) return;
              
              const mapOption = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 3,
              };
              
              const map = new window.kakao.maps.Map(mapContainer, mapOption);

              const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

              const imageSrc = './click.png'
              const meImage = './me.png'
              const imageSize = new window.kakao.maps.Size(52, 52)
              const imageOptions = {
                offset: new window.kakao.maps.Point(32, 64)
              }

              const markerImage = new window.kakao.maps.MarkerImage(meImage, imageSize, imageOptions)
              const storeImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOptions)
              

              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImage
              })
              marker.setMap(map)


            const marker1 = new window.kakao.maps.Marker({
              position: store1,
              title: "cloudset 쌍용점",
              image: storeImage
            });
            marker1.setMap(map);

            const marker2 = new window.kakao.maps.Marker({
              position: store2,
              title: "cloudset 불당점", 
              image: storeImage
            });
            marker2.setMap(map);
              
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


// 위도(Latitude) : 36.7881311 / 경도(Longitude) : 127.1137473