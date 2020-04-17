import React from "react";

function MyLoc({onClick, lat, lon}) {
  console.log(...arguments)
  return (
    <div>
      <button
        type="button" 
        onClick={onClick}
      >
        get my location
      </button>
      <p>{`my location: lat: ${lat}; lon: ${lon}`}</p>
    </div>
  );
}

export default MyLoc;
