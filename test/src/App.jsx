
import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config()


function App() {
  const [wearherData, setWeatherData] = useState(null)


  useEffect(() =>{
    const fetchWeather = async() => {
      try {
        const result = await axios.get(process.env.WEATHER)
        console.log('result',result.data)
        setWeatherData(result.data.weather[0].main)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchWeather()
  },[])

  return (
    <div className='div'>
      {wearherData ? (
        <p>{JSON.stringify(wearherData)}</p>
      ) : (
        <p>날씨데이터 불러오는중</p>
      )}
    </div>  )
}

export default App


