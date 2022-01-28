import React from "react";
import "./App.css";
import Weather from "./Weather";

// import WeatherForecast from "./WeatherForecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather />

          <br />
          {/* <WeatherForecast /> */}
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
