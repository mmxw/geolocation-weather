import React from "react";

function MyWeather({onClick, lat, lon, data}) {
  // console.log(...arguments)

  if (data === undefined) {debugger}
  
  return (
    <div>
      <button
        type="button" 
        onClick={onClick}
      >
        click to show local weather
      </button>
      <p>my location: lat: {lat}, lon: {lon}</p>
      <p>temperature: {data.temp}C</p>
    </div>
  );
}

export default MyWeather;
