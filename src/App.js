import React from "react";
import "./App.css";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />
          <WeatherInfo />
          <br />
          <WeatherForecast />
          <p className="footer">
            <a href="https://github.com/Clarefairy/weather-app-react" rel="noreferrer" target="_blank">
              Open-source code
            </a>{" "}
            by Clarefairy
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
