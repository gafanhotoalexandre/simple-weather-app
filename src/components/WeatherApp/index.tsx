import { useState } from 'react'

import searchIcon from '../../assets/search.png'
import clearIcon from '../../assets/clear.png'
import cloudIcon from '../../assets/cloud.png'
import drizzleIcon from '../../assets/drizzle.png'
import humidityIcon from '../../assets/humidity.png'
import rainIcon from '../../assets/rain.png'
import snowIcon from '../../assets/snow.png'
import windIcon from '../../assets/wind.png'
import { api } from '../../services/api'

const API_KEY = import.meta.env.VITE_API_KEY
export function WeatherApp() {
  const [searchedCity, setSearchedCity] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weatherData, setWeatherData] = useState<any>()
  const [wiIcon, setWiIcon] = useState(cloudIcon)

  async function toSearch() {
    if (searchedCity === '') return

    const response = await api.get(
      `weather?q=${searchedCity}&units=Metric&appid=${API_KEY}`,
    )
    const data = response.data
    if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
      setWiIcon(clearIcon)
    } else if (
      data.weather[0].icon === '02d' ||
      data.weather[0].icon === '02n'
    ) {
      setWiIcon(cloudIcon)
    } else if (
      data.weather[0].icon === '03d' ||
      data.weather[0].icon === '03n'
    ) {
      setWiIcon(drizzleIcon)
    } else if (
      data.weather[0].icon === '04d' ||
      data.weather[0].icon === '04n'
    ) {
      setWiIcon(drizzleIcon)
    } else if (
      data.weather[0].icon === '09d' ||
      data.weather[0].icon === '09n'
    ) {
      setWiIcon(rainIcon)
    } else if (
      data.weather[0].icon === '10d' ||
      data.weather[0].icon === '10n'
    ) {
      setWiIcon(rainIcon)
    } else if (
      data.weather[0].icon === '13d' ||
      data.weather[0].icon === '13n'
    ) {
      setWiIcon(snowIcon)
    } else {
      setWiIcon(clearIcon)
    }
    setWeatherData(data)
  }
  return (
    <div className="main-container">
      <header className="top-bar">
        <input
          type="text"
          placeholder="Ex: São Paulo..."
          className="city-input"
          value={searchedCity}
          onChange={(e) => setSearchedCity(e.target.value)}
        />
        <button onClick={toSearch} className="search-icon">
          <img src={searchIcon} alt="ícone de busca" />
        </button>
      </header>

      <section className="weather-image">
        <img className="w-40" src={wiIcon} alt="" />
      </section>

      <div className="weather-temp">
        {weatherData ? Math.floor(weatherData?.main?.temp) : ''}°c
      </div>
      <div className="weather-location">{weatherData?.name}</div>

      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">
              {weatherData?.main?.humidity}%
            </div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">{weatherData?.wind?.speed} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
