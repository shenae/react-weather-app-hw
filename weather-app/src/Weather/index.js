import React from 'react';
import '../App.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fahrenheit: true
    }
    this.cToF = this.cToF.bind(this);
  }
  kToF(num) {
    return (this.state.fahrenheit ?
    Math.floor(((num - 273.15) * 9 / 5) + 32) :
    Math.floor(num - 273.15));
  }
  cToF() {
    this.state.fahrenheit ?
    this.setState({fahrenheit: false}) :
    this.setState({fahrenheit: true});
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
    let converted = this.convert();
    return (
      <div className="weather-container">
        <div>
          <h2>{converted.city}</h2>
          <h1 onClick={this.cToF}>{converted.temp}°</h1>
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
