import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Moviecomponent = () => {
    const [movieInfo, setMovieInfo] = useState(null)
    const [title, setTitle] = useState('')

    const titleValue = (e) => {
        setTitle(e.target.value)
    }


    const fetchMovie = async() => {
        if(title.trim() === ''){
            alert('Please enter')
            return
        }
        try {
            const res = await axios.get(`http://www.omdbapi.com/?apikey=ed9cb08b&t=${title}`)
            console.log('res', res)
            if(res.data.Response === 'True'){
                setMovieInfo(res.data)
            }else if (res.data.Response === 'False') {
                alert('Movie not found');
                setMovieInfo(null); 
              }
        } catch (error) {
            console.error(error)
        }
    }

    const pressEnter = (e) => {
        if(e.key === 'Enter'){
            fetchMovie()
        }
    }
    
    
  return (
    <div className='h-screen bg-indigo-950'>
        <div className='text-[100px] text-center pt-20'>
            search movie
        </div>
        <div className='flex w-full justify-center gap-5 h-[32px]'>
            <input onKeyDown={pressEnter} value={title} onChange={titleValue} className='rounded-md pl-2 h-full' type="text" />
            <button 
                className='bg-orange-500 text-white px-3 text-center items-center h-full rounded-md hover:bg-orange-300 hover:text-red-500'
                onClick={fetchMovie}
                
                >search</button>
        </div>
        {
            movieInfo ? (
                <div className='text-white text-center mt-[30px]'>
                    <h2>영화 이름 : {movieInfo.Title}</h2>
                    <h2>영화 장르 : {movieInfo.Genre}</h2>
                </div>
            )
            : (
                <div className='text-white text-center mt-[30px]'>
                    there is no movie
                </div>

            )
        }
    </div>
  )
}

export default Moviecomponent
