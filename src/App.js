import React, { Component } from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm/WeatherForm';

let API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const URL = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const URL_API = `,us&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`;

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    zipcode: '',
    name: '',
    min: 0,
    max: 0,
    description: '',
    currentTemp: 0
  }
}

getWeather = () => {
  fetch(URL + this.state.zipcode + URL_API)
  .then(response => {
    console.log(response);
    return response.json()
  })
  .then(data =>{
    console.log(data);
    this.setState({
      city: data.name,
      min: Math.floor(data.main.temp_min),
      max: Math.floor(data.main.temp_max),
      description: data.weather[0].description,
      currentTemp: Math.floor(data.main.temp)
  })
  })

}

onClick() {
  this.getWeather()
}
onClickHandler = (e) => {
  e.preventDefault()
  const v = e.target.value;
  this.setState({
    zipcode:  v,})
}

  render() {
    return (
      <div className="App">
      <WeatherForm
      getWeather={this.getWeather}
      click = {this.onClickHandler} 
      zipcode = {this.state.zipcode}/>
      <br />
        <h3>{this.state.city}</h3>
        <h3>current temp</h3><h1>{this.state.currentTemp}</h1>
        <h2>{this.state.description}</h2>
        <h3>{this.state.min}</h3>
        <h3>{this.state.max}</h3>
      </div>
    );
  }
}

export default App;
