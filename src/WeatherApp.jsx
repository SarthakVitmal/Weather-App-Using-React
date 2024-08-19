import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
function WeatherApp() {
  const [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        temp: 25,
        minTemp: 22,
        maxTemp: 28,
        humidity: 47,
        feelsLike: 24,
        weather: "rainy",
  })
  let updateInfo = (weatherresult) => {
      setWeatherInfo(weatherresult);
  }
  return (
    <div>
        <h2>Weather App By Sarthak</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp