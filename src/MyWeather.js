import React from "react";

function MyWeather({ lat, lon, data }) {
  const tempC = data.main.temp;
  const loc = data.name + ", " + data.sys.country;
  const desc = data.weather[0].main;
  const tempF = (tempC * 9) / 5 + 32;

  let weather;
  switch (desc) {
    case "Clouds":
      weather = <div className="weahter cloud"></div>;
      break;
    case "Rain":
      weather = <div className="weather rain"></div>;
      break;
    case "Snow":
      weather = <div className="weahter snow"></div>;
      break;
    case "Sun":
      weather = <div className="weather sun"></div>;
      break;
    default:
      break;
  }

  return (
    <div>
      {weather}
      <p>
        my coordinates: lat: {lat}, lon: {lon}
      </p>
      <p>my location: {loc} </p>
    </div>
  );
}

export default MyWeather;
