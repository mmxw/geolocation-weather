import React, { useState, useEffect } from "react";
import "./App.css";
import MyWeather from "./MyWeather";
import LocButton from "./LocButton";
import axios from "axios";

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const success = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLat(lat);
    setLon(lon);
    setUrl(
      `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`
    );
  };

  const error = () => "your location cannot be retrieved";

  const handleClick = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (url) fetchData();
  }, [url]);

  let child;
  if (isLoading) {
    child = <div>loading...</div>;
  } else {
    child =
      data === null ? null : <MyWeather lat={lat} lon={lon} data={data} />;
  }

  return (
    <div className="app">
      <div className="container">
        <h1>instant weather</h1>
        <LocButton onClick={handleClick} />
        {child}
      </div>
    </div>
  );
}

export default App;
