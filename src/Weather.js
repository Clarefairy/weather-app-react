import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7bf3ba8d3f15df7b82b1c7bfba361d28";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit} className="Search">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control search-input"
            onChange={updateCity}
          />
        </div>
        <div className="col-3 p-0">
          <input type="submit" className="btn btn-primary w-100" value="🔍" />
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <div className="weather-info">
          <div className="row">
            <div className="col-6">
              <span>
                <span className="pindrop-emoji">📍</span>
                <h1 className="city-name" id="city-name">
                  {weather.city}
                </h1>
              </span>
              <ul>
                <li>
                  {weather.date.getDay}
                  <FormattedDate currentDate={weather.date} />
                </li>
                <li>
                  <div className="weather-description" id="weather-description">
                    {weather.description}
                  </div>
                  Humidity:{" "}
                  <span className="humidity" id="humidity">
                    {weather.humidity}%
                  </span>
                  , Wind:
                  <span className="wind-speed" id="wind-speed">
                    {Math.round(weather.wind * 3.6)}km/h
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <img src={weather.icon} alt={weather.description} className="weather-icon" />
                <div>
                  <span className="temperature">{Math.round(weather.temperature)}</span>
                  {/* <span className="units">
                    <a href="#" id="celsius-link" className="active">
                      °C
                    </a>
                    |
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
