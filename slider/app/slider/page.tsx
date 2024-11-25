'use client'

import React, { useMemo } from 'react'
import Slider, { Settings} from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banners from './data'



interface sliderProps {

  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}
const page = ({className, autoplay, speed, loop}: sliderProps) => {
  const settings = useMemo<Settings>(() => ({
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 3, 
    autoplay: true,
    pauseOnHover: true
    // loop: true
  }),[autoplay, loop, speed])
  return (
    <section className={`relative white ${className || ''}`}>
    <Slider {...settings}>
      {banners.map((banner) => (
        <div key={banner.no}>
          <div
            className="h-72 flex items-center justify-center"
            style={{
              backgroundColor: banner.color,
              backgroundImage: `url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="text-center text-white p-4">
              <h2 className="text-xl font-bold whitespace-pre-line">
                {banner.title}
              </h2>
              {banner.link && (
                <a
                  href={banner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline mt-2 block"
                >
                  자세히 보기
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </section>
  )
}

export default page
