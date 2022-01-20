import React from "react";
import "./Weather.css";

export default function WeatherInfo() {
  return (
    <div className="weather-info">
      <div className="row">
        <div className="col-6">
          <span>
            <span className="pindrop-emoji">📍</span>
            <h1 className="city-name" id="city-name">
              Singapore
            </h1>
          </span>
          <ul>
            <li>
              <strong>
                <span id="day">Friday</span> <span id="time">12:59</span>
                <br />
                <span id="date">5th January 2022</span>
              </strong>
            </li>
            <li>
              <div className="weather-description" id="weather-description">
                cloudy with a chance of meatballs{" "}
              </div>
              Humidity:{" "}
              <span className="humidity" id="humidity">
                89%
              </span>
              , Wind:
              <span className="wind-speed" id="wind-speed">
                11km/h
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <image src="" alt="" className="weather-icon" id="weather-icon" />
            <div>
              <span className="temperature" id="temperature">
                35
              </span>
              <span className="units">
                <a href="#" id="celsius-link" className="active">
                  °C
                </a>
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
