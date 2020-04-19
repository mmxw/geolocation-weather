import React from "react";

export default function WeatherIcon({desc}) {
  let weather;
  switch (desc) {
    case "clouds":
      weather = (
        <div className="weather cloudy clouds">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case "rain":
      weather = (
        <div className="weather rainy rain">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );
      break;
    case "snow":
      weather = (
        <div className="weather flurries snow">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );
      break;
    case "clear":
      weather = (
        <div className="weather sunny clear">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case "thunderstorm":
      weather = (
        <div className="weather thunder-storm thunderstom">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      );
      break;
    case "drizzle":
      weather = (
        <div className="weather sun-shower ">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
        </div>
      );
      break;
    default:
      break;
  }
  return weather;
}
