import React, { useState, useEffect } from "react";
import "./App.css";
import MyWeather from "./MyWeather";
import axios from "axios";

console.log('inside app')
function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [data, setData] = useState({ main: {} });
  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const success = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLat(lat);
    setLon(lon);
    setUrl(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`);
  };

  const error = () => "your location cannot be retrieved";

  const handleClick = () => {
    // console.log('clicked')
    setIsLoading(true); 
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const result = await axios(url);
        setData(result.data.main);
        setIsLoading(false);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    if (url) fetchData();
  }, [url]);

  return (
    <div className="app">
      {/* {MyLoc({onClick: handleClick, lat, lon})} */}
      {console.log('app rendering')}
      {isLoading ? <div>loading...</div> : 
        <MyWeather onClick={handleClick} lat={lat} lon={lon} data={data}/>
      }
    </div>
  );
}

export default App;
