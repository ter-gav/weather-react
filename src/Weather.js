import React from "react";
import Cities from "./Cities";
import Temperature from "./Temperature";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Saturday 14:00",
    description: "Clear Sky",
    humidity: 20,
    wind: 4,
    sunrise: "05:30",
    sunset: "21:35"
  };

  return (
    <div className="App">
      <div className="container">
        <div className="weather-box">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city"
                autoFocus="on"
                autoComplete="off"
                autoCapitalize="on"
              />
              <span>
                <button type="submit" className="btn btn-success search-button">
                  Search
                </button>
              </span>
              <span>
                <button type="button" className="btn btn-info current-button">
                  Current location
                </button>
              </span>
            </div>
          </form>
          <div className="current-city">
            <div className="row">
              <div className="col-3">
                <h1>
                  <Cities city="Berlin" />
                </h1>
              </div>
              <div className="col-3">
                <h2>
                  <span id="current-city-temp">
                    <Temperature temperature={25} />
                  </span>
                </h2>
              </div>
              <div className="row">
                <div className="col-4">
                  <ul>
                    <li>{weatherData.date}</li>
                    <li>{weatherData.description}</li>
                  </ul>
                </div>
                <div className="col-6">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="clear"
                    className="main-image"
                  />
                </div>
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-6 current-temp">
                    <span className="max-temperature">27º</span>
                    <span className="min-temperature">18º</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card weather-details">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Wind: {weatherData.wind}km/h</li>
              <li className="list-group-item">
                Humidity: {weatherData.humidity}%
              </li>
              <li className="list-group-item">
                Sunrise: {weatherData.sunrise}
              </li>
              <li className="list-group-item">Sunset: {weatherData.sunset}</li>
            </ul>
          </div>
          <div className="forecast"></div>
        </div>
        <div className="bottom-text">
          <a
            href="https://github.com/ter-gav/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code
          </a>
          <p>by Teresa Gavric</p>
        </div>
      </div>
    </div>
  );
}