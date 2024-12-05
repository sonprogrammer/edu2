'use client'

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const API_KEY = '5e0983adc501093f81b30a4b801128d2';

const page = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState<any>(null)

    useEffect(() => {
        if (!id) return

        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            const data = await res.json();
            setMovie(data);
        }
        fetchMovie()
    }, [id])

    if (!movie) return <p>Loading...</p>;


    return (
        <div className="p-4 text-white mt-12 flex px-10">
            <div className="flex-shrink-0">
                <h1 className="text-4xl mb-4">{movie.title}</h1>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg mb-4 w-[400px]"
                />
            </div>
            <div className='ml-10 flex flex-col justify-center'>
                <p className="mb-4">{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
            </div>
        </div>
    )
}

export default page
