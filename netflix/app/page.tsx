'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Link from "next/link";



const API_KEY = '5e0983adc501093f81b30a4b801128d2'

const fetchMovies = async(category: Number) => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${category}&language=en-US`);
  const data = await res.json();
  return data.results || []
}

const fetchPopularMovies = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();
  return data.results || [];
}


export default function Home() {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [adventureMovies, setAdventureMovies] = useState<any[]>([]);
  const [comedyMovies, setComedyMovies] = useState<any[]>([]);
  const [dramaMovies, setDramaMovies] = useState<any[]>([]);
  const [actionMovies, setActionMovies] = useState<any[]>([]);

  useEffect(() => {
    const getMovies = async() => {
      const comedy = await fetchMovies(35)
      const drama = await fetchMovies(18)
      const action = await fetchMovies(28)
      const adventure = await fetchMovies(12)

      setComedyMovies(comedy)
      setAdventureMovies(adventure)
      setDramaMovies(drama)
      setActionMovies(action)
    } 
    getMovies()
    
  })
  

  useEffect(() => {
    const getPopularMovies = async () => {
      const movies = await fetchPopularMovies();
      setPopularMovies(movies);
    }

    getPopularMovies();
  }, []);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomArrow />, // 이전 화살표
  nextArrow: <CustomArrow />, // 다음 화살표
  };
  
  
  return (
    <div className="h-screen relative">
      <div className="w-screen h-full relative">
        <img 
          className="h-full w-full object-cover"
        src="./bg.jpg" alt="background" />

        {/* 밑에 그라데이션 효과 */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-transparent to-transparent"
        ></div>

        <div className="p-4 text-white">
          <h1 className="mb-4 text-3xl">popular movie</h1>
          {/* 이곳에 무비가 랜덤으로 보여짐 슬라이더 구현 */}
          <Slider {...sliderSettings}>
            {popularMovies.map((movie: any) => (
              <div key={movie.id}>
                <Link href={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg"
                />
                <p>{movie.title}</p>
                </Link>
              </div>
            ))}
          </Slider>
          <h1 className="text-3xl mt-8 mb-4">Adventure Movies</h1>
          <Slider {...sliderSettings}>
            {adventureMovies.map((movie) => (
              <div key={movie.id} className="p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded-lg"
                />
                <p className="mt-2">{movie.title}</p>
              </div>
            ))}
          </Slider>

          <h1 className="text-3xl mt-8 mb-4">Action Movies</h1>
          <Slider {...sliderSettings}>
            {actionMovies.map((movie) => (
              <div key={movie.id} className="p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded-lg"
                />
                <p className="mt-2">{movie.title}</p>
              </div>
            ))}
          </Slider>

          <h1 className="text-3xl mt-8 mb-4">Comedy Movies</h1>
          <Slider {...sliderSettings}>
            {comedyMovies.map((movie) => (
              <div key={movie.id} className="p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded-lg"
                />
                <p className="mt-2">{movie.title}</p>
              </div>
            ))}
          </Slider>

          <h1 className="text-3xl mt-8 mb-4">Drama Movies</h1>
          <Slider {...sliderSettings}>
            {dramaMovies.map((movie) => (
              <div key={movie.id} className="p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded-lg"
                />
                <p className="mt-2">{movie.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}


function CustomArrow({ className, style, onClick }: any) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)", // 화살표 배경색
        borderRadius: "50%", // 원형으로 만들기
        zIndex: 10,
        padding: "5px",
        width: "20px"
      }}
      onClick={onClick}
    />
  );
}