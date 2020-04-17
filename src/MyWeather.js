import React from "react";

function MyWeather({onClick, lat, lon, data}) {
  // console.log(...arguments)
  return (
    <div>
      <button
        type="button" 
        onClick={onClick}
      >
        click to show local weather
      </button>
      <p>temperature: {data.temp}C</p>
    </div>
  );
}

export default MyWeather;
