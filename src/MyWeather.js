import React from "react";

function MyWeather({onClick, lat, lon, data}) {



  return (
    <div className="container">
      <button
        type="button" 
        onClick={onClick}
      >
        <h1>locate me</h1>
      </button>
      <p>my coordinates: lat: {lat}, lon: {lon}</p>
      {/* <p>my location: {loc} </p> */}
      <p>temperature: {data.temp}C</p>
      {/* <p>description: {desc}</p> */}
      
    </div>
  );
}

export default MyWeather;
