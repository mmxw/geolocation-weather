import React from "react";

function MyWeather({ lat, lon, data }) {
  const temp = data.main.temp;
  const loc = data.name + ", " + data.sys.country;
  const desc = data.weather[0].main;

  return (
    <div>
      <p>
        my coordinates: lat: {lat}, lon: {lon}
      </p>
      <p>my location: {loc} </p>
      <p>temperature: {temp}C</p>
      <p>description: {desc}</p>
    </div>
  );
}

export default MyWeather;
