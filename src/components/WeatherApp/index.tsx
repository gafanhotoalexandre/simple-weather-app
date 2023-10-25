import searchIcon from '../../assets/search.png'
// import clearIcon from '../../assets/clear.png'
import cloudIcon from '../../assets/cloud.png'
// import drizzleIcon from '../../assets/drizzle.png'
import humidityIcon from '../../assets/humidity.png'
// import rainIcon from '../../assets/rain.png'
// import snowIcon from '../../assets/snow.png'
import windIcon from '../../assets/wind.png'

export function WeatherApp() {
  return (
    <div className="main-container">
      <header className="top-bar">
        <input type="text" className="city-input" />
        <button className="search-icon">
          <img src={searchIcon} alt="ícone de busca" />
        </button>
      </header>

      <section className="weather-image">
        <img className="w-40" src={cloudIcon} alt="" />
      </section>

      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>

      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
