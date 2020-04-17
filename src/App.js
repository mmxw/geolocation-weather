import React, { useState, useEffect } from "react";
import "./App.css";
import MyWeather from "./MyWeather";
import axios from "axios";

function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [data, setData] = useState({ main: {} });
  const [url, setUrl] = useState(
    "https://fcc-weather-api.glitch.me/api/current?lat=0&lon=0"
  );

  const success = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    // console.log(lat, lon);
    return `my location: ${lat}, ${lon}`;
  };

  const error = () => "your location cannot be retrieved";

  const handleClick = () => {
    // console.log('clicked')
    setUrl(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon})`)
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setData(result.data.main);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      {/* {MyLoc({onClick: handleClick, lat, lon})} */}
      <MyWeather onClick={handleClick} lat={lat} lon={lon} data={data}/>
    </div>
  );
}

export default App;
