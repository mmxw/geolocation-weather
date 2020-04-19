import React from "react";
import WeatherIcon from './weatherIcon';

function MyWeather({ lat, lon, data }) {
  const tempC = data.main.temp;
  const loc = data.name + ", " + data.sys.country;
  const desc = data.weather[0].main.toLowerCase();
  const tempF = (tempC * 9) / 5 + 32;


  return (
    <div className="container">
      <WeatherIcon desc={desc} />
      <h2>{tempC} °C</h2>
      <h2>{loc} </h2>
      <h2>
        lat: {lat}, lon: {lon}
      </h2>
    </div>
  );
}

export default MyWeather;
