import React, { Component } from 'react';
import Zip from './Zip';
import Weather from './Weather';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: null,
      data: null
    }
    this.handleZip = this.handleZip.bind(this);
  }
  async handleZip(code) {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${code}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(data => this.setState({zip: code, data: data}));
  }
  render() {
    return (
        <div className="App">
          <Zip zip={this.handleZip}/>
          {this.state.zip ? <Weather className="Weather" zip={this.state.zip} data={this.state.data}/> : <p>Please enter a Zip Code.</p>}
        </div>
    );
  }
}

export default App;
