import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  console.log(props);
  function load() {
    let apiKey = "cfda78dbc1d12739c0aa78fa0330cf73";
    let lat = props.forecastInfo.lat;
    let lon = props.forecastInfo.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.forecastInfo]);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row weather-forecast align-items-start">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className="col-2 daily-forecast" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
