import React, { Component } from 'react';
import './App.css';
import { getWeatherData } from './services/fetch-weather';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      weather: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      zip: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const result = await getWeatherData(this.state.zip);
    this.setState({
      weather: result.data,
      //reset zip back to an empty string for better UX (the input will clear on submit).
      zip: ''
    });
  }

  render() {
    return (
      <div className="App">
        <Form
          handleSubmit={this.handleSubmit}
          onInputChange={this.handleChange}
          zip={this.state.zip}
        />
          {this.state.weather ? <Weather weather={this.state.weather} /> : null}
      </div>
    );
  }
}

export default App;
