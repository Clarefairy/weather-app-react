import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="row">
        <div className="col-6">
          <span>
            <span className="pindrop-emoji">📍</span>
            <h1 className="city-name">{props.info.city}</h1>
          </span>
          <ul>
            <li>
              <FormattedDate currentDate={props.info.date} />
            </li>
            <li>
              <div className="weather-description" id="weather-description">
                {props.info.description}
              </div>
              Humidity:{" "}
              <span className="humidity" id="humidity">
                {props.info.humidity}%
              </span>
              , Wind:
              <span className="wind-speed" id="wind-speed">
                {Math.round(props.info.wind * 3.6)}km/h
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <img src={props.info.icon} alt={props.info.description} className="weather-icon" />
            {console.log(props.info.icon)}
            <div>
              <span className="temperature">{Math.round(props.info.temperature)}</span>
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
  );
}
