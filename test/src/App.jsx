
import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'

function App() {
  const [wearherData, setWeatherData] = useState(null)


  useEffect(() =>{
    const fetchWeather = async() => {
      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=07b4a2fe64be361d2302c8f93d83642e`)
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


