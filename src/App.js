import React, { useState } from "react";
import "./App.css";
import MyLoc from "./MyLoc";

function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const success = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    console.log(lat, lon);
    return `my location: ${lat}, ${lon}`;
  };

  const error = () => "your location cannot be retrieved";

  const handleClick = () => {
    console.log('clicked')
    return navigator.geolocation.getCurrentPosition(success, error);
  };
  
  return (
    <div>
      <MyLoc onClick={handleClick} lat={lat} lon={lon} />
    </div>
  );
}

export default App;
