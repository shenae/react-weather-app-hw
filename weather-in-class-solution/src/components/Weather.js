import React from 'react';

const Weather = props => {
  return (
    <div className='weather-container'>
      <div>{props.weather.name}</div>
      <div className="temp">{Math.round(props.weather.main.temp)}°</div>
      <div className="summary">{props.weather.weather[0].description}</div>
      <div className="bottom">
        <div className="min-contain">
          <p>Min</p>
          <div className="min">{Math.round(props.weather.main.temp_min)}°</div>
        </div>
        <div className="max-contain">
          <p>Max</p>
          <div className="max">{Math.round(props.weather.main.temp_max)}°</div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
