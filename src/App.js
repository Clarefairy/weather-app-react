import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="singapore" />

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
