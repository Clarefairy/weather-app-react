import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function icon() {
    let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return iconUrl;
  }

  return (
    <div className="weather-forecast-preview">
      <div className="forecast-day">{day()}</div>
      <img className="icon" src={icon()} alt={props.data.weather[0].description} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
