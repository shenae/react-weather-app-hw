import React from 'react';
import '../App.css';

class Weather extends React.Component {
  kToF(num) {
    return Math.floor(((num - 273.15) * 9 / 5) + 32);
  }
  convert() {
    return {
      city: this.props.data.data.city.name,
      temp: this.kToF(this.props.data.data.list[0].main.temp),
      low: this.kToF(this.props.data.data.list[0].main.temp_min),
      high: this.kToF(this.props.data.data.list[0].main.temp_max),
      weather: this.props.data.data.list[0].weather[0].description
    }
  }
  render() {
    console.log(this.props.data);
    let converted = this.convert();
    return (
      <div className="weather-container">
        <div>
        <h2>{converted.city}</h2>
        <h1>{converted.temp}°</h1>
        </div>
        <div className="lohi">
          <h2>{converted.low}°<br />Low</h2>
          <h2>{converted.high}°<br />High</h2>
        </div>
        <h2>Today's weather is: {converted.weather}</h2>
      </div>
    )
  }
}

export default Weather;
