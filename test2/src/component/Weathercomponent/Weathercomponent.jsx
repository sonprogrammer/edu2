import React, { useRef, useState } from 'react'
import { Styledhi, StyledInfo, StyledInput, StyledTitle } from './style'
import { Button } from '@mui/material'
import axios from 'axios'

const Weathercomponent = () => {
  const [inputValue, setInputValue] = useState('')
  const [weatherData, setWeatherData] = useState(null)


  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearch = async() => {
    if(inputValue.trim() === '')return
    const apiKey = '07b4a2fe64be361d2302c8f93d83642e'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric&lang=kr`

    try {
      const res = await axios.get(apiUrl)
      console.log('res', res)
      if(res.status === 200){
        setWeatherData(res.data)
      }else{
        alert('지역명을 확인해주세요')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleEnter = (e) => {
    if(e.key ==='Enter'){

      handleSearch()
    }
  }
  
  
  return (
    <Styledhi>
      <StyledTitle>
        날씨
      </StyledTitle>
      <StyledInput>
        <input type="text" value={inputValue} placeholder='지역명을 영어로 검색하세요' onChange={handleInputChange} onKeyDown={handleEnter}/>
        <Button variant="contained" onClick={handleSearch}>검색</Button>
      </StyledInput>
      <StyledInfo>
      {weatherData ? (
          <div>
            <div className='flex'>
              <h3>{weatherData.name}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
              />
            </div>
            <p>날씨: {weatherData.weather[0].description}</p>
            <p>온도: {weatherData.main.temp}°C</p>
            <p>습도: {weatherData.main.humidity}%</p>
          </div>
        ) : (
          <p>날씨 정보를 검색하세요.</p>
        )}

      </StyledInfo>
    </Styledhi>
  )
}

export default Weathercomponent



