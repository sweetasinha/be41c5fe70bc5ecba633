import React from "react";

const AsteroidInfo = React.memo(({ asteroidInfo }) => {
  return (
    <>
      <h3>Asteroid Info</h3>
      <div>
        <p>{`Name : ${asteroidInfo.name}`}</p>
        <p>{`Url : ${asteroidInfo.nasa_jpl_url}`}</p>
        <p>{`Is Potentially Hazardous : ${asteroidInfo.is_potentially_hazardous_asteroid}`}</p>
      </div>
    </>
  );
});

export default AsteroidInfo;
